import { useState } from "react";
import { Button } from "./ui/button";
import { supabase } from "@/lib/supabase/client";
import { queryClient } from "@/main";

export default function AddPetForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // isPending soll true sein wenn das Formular gerade submitted wurde
  // wir nutzen es um den submitbutton zu disablen, und mehrfachsubmissions zu verhindern
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log({ name, description });

    if (name.trim().length=== 0 || description.trim().length === 0){
        return
    }


    setIsPending(true);
    supabase
      .from("pets")
      .insert({
        name: name,
        description,
        category_id: "2ef3b050-d6cf-4d4a-8932-4c114f794ff9",
      })
      .then(() => {
        setName("");
        setDescription("");
        setIsPending(false)
        queryClient.invalidateQueries({queryKey: ['pets']})
        
      })
  };

  return (
    <form>
      <h2>Add New Animal</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <textarea
        name="name"
        placeholder="Description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <Button disabled={isPending} onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </form>
  );
}
