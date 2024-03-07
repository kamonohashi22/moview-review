import Image from "next/image";
import { Textarea } from "@/components/ui/textarea"

import MovieCard from "../ui/components/card";
import CreateCard from "../ui/components/createcard";

export default function Home() {
  return (
    <main>
   <MovieCard/>
   <CreateCard/>
    </main>
  );
}