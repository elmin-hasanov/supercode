import { supabase } from "@/lib/supabase/client";
import { Button } from "./ui/button";
import { queryClient } from "@/main";

type PetCardProps = {
  id: string;
  name: string;
  description: string;
  category_id: string;
  owner: {
    id: string
    first_name: string | null
  }
};

export default function PetCard(props: PetCardProps) {
  const handleDelete = async () => {
    // wir löschen hier den Eintrag dessen id matcht
    await supabase.from('pets').delete().eq('id', props.id)
    queryClient.invalidateQueries({queryKey: ['pets']})
  };
  return (
    <article>
      <h3 className="font-bold">{props.name}</h3> 
      <p>{props.description}</p>
      <p>By {props.owner.first_name || props.owner.id}</p>
      <Button onClick={handleDelete}>Delete</Button>
    </article>
  );
}
