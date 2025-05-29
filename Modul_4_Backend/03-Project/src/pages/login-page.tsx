// import { supabase } from "@/lib/supabase/client";
// import { useEffect } from "react";

import { LoginForm } from "@/components/login-form";
import { SocialLoginForm } from "@/components/social-login-form";

export default function LoginPage() {
  //   useEffect(() => {
  //     supabase.auth.signInWithPassword({
  //       email: "stefan@osorio.de",
  //       password: "stefan",
  //     }).then((result)=>{
  //         console.log(result)
  //     });
  //   }, []);
  return <>
  <LoginForm /> 
  <SocialLoginForm/>
  </>
}
