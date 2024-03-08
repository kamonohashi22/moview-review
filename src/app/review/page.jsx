import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

import MovieCard from "../ui/components/card";
import CreateCard from "../ui/components/createcard";

export default function Home() {
  return (
    <main>
      <div className="bg-slate-300">
        <h1 className="p-4 text-6xl font-bold text-gray-700">Review</h1>
        <MovieCard />
        <CreateCard />
        <div className="flex max-w-screen-md p-4 m-4">
          <button className="bg-white text-slate hover:bg-gray-200 font-bold py-2 px-4 rounded">
            レビューを追加
          </button>
        </div>
      </div>
    </main>
  );
}
