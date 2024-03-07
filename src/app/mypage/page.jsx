import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea"

import MovieCard from "../ui/components/card";
import CreateCard from "../ui/components/createcard";

export default function Home() {
  return (
    <main>
    <div className="bg-slate-300 h-screen">
      <h1 className="p-4 text-6xl font-bold text-gray-700">
          My Page
      </h1>
      <div>
      <>
      <Card className="flex max-w-screen-md p-4 m-4">
        <CardContent className="object-contain">
          <img src="https://placehold.jp/300x200.png" alt="Movie Poster" />
        </CardContent>
        <div className="flex flex-col">
          <CardHeader>
            <div className="header-content ml-6">
              <CardTitle>タイトル</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="ml-6">
            <CardDescription>レビュー</CardDescription>
            <p className="break-words">
              あああああああああああああああああああああああああああああああああああ<br/><br/>★★★★★
            </p>
          </CardContent>
          <CardFooter className="ml-6">
          <div className="flex flex-col"> 
            <CardDescription>作成日</CardDescription>
            <p>2024/03/08</p>
          </div>
          </CardFooter>
        </div>
      </Card>
      </>
   </div>
   </div>
    </main>
  );
}