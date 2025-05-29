import { useAuthContext } from "@/contexts/auth-context";
import { Link } from "react-router";
import { Button } from "./ui/button";

export default function SiteHeader() {
  const { signOut, session } = useAuthContext();

  // const signOut = ()=>{
  //   const result = supabase.auth.signOut()
  //   console.log(result)
  // }

  return (
    <header className="p-6 flex  justify-between items-center">
      <Link to="/">
        <span className="font-extrabold italic text-3xl">petty</span>
      </Link>
      <nav className="flex gap-4">
        <Link to="/">Tiere finden</Link>
        <Link to="/pets/new">Tiere inserieren</Link>
      </nav>

      <section>
        {!session && <Link to="/login">Einloggen/Registrieren</Link>}
        {session && <Button onClick={signOut}>Sign out</Button>}
      </section>
    </header>
  );
}
