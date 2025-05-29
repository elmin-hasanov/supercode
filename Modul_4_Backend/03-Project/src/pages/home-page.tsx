import PetCard from "../components/pet-card";
import { supabase } from "../lib/supabase/client";
import { useQuery } from "@tanstack/react-query";
// import { LoginForm } from "./components/login-form";

// Wir bereiten die Supabase Query vor

// wir extrahieren den ergebnistyp aus der Query um ihn dann im State einsetzen zu können

export default function HomePage() {
  const { data, isError, isPending } = useQuery({
    queryFn: async () => {
      const result = await supabase
        .from("pets")
        // .select("price_cents, id")
        .select("*, categories(*), profiles(*)")
        // .lte("price_cents", 5000)
        .eq("status", "available");
      if (result.data) {
        return result.data;
      } else {
        throw result.error;
      }
    },
    // queryKey: ["pets", {joins: ["categories", "profiles"]}],
    queryKey: ["pets", "homepage"],

  });

  if (isPending) {
    return "Is loading...";
  }
  if (isError) {
    return "Leider kaputt.";
  }

  return (
    <div className="grid grid-cols-2">
      <section>
        {data.map((pet) => (
          <PetCard
            key={pet.id}
            name={pet.name}
            category_id={pet.category_id}
            id={pet.id}
            description={pet.description}
            owner={pet.profiles}
          />
        ))}
      </section>
      {/* <div className="mx-auto max-w-lg"><LoginForm /></div> */}
    </div>
  );
}


// // Wir bereiten die Supabase Query vor
// const petQuery = supabase
//   .from("pets")
//   // .select("price_cents, id")
//   .select("*, categories(*)")
//   // .lte("price_cents", 5000)
//   .ilike("title", "%thyst%")
//   .neq("status", "deleted")
//   .neq("status", "adopted");
// // * => Alles aus der jeweiligen Zeile in articles, außerdem alles aus der verlinkten Zeile in Categories

// // wir extrahieren den ergebnistyp aus der Query um ihn dann im State einsetzen zu können
// type PetResults = QueryData<typeof petQuery>;

// function App() {
//   const [pets, setPets] = useState<PetResults>([]);
//   useEffect(() => {
//     petQuery.then((result) => {
//       // nur setArticles falls tatsaechlich Daten aus der DB kommen
//       if (result.data) {
//         setPets(result.data);
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <ul>
//         {pets.map((pet) => (
//           <li key={pet.id}>{pet.name}</li>
//         ))}
//       </ul>
//       <div className="mx-auto max-w-lg">{/* <LoginForm /> */}</div>
//     </div>
//   );
// }

// export default App;
