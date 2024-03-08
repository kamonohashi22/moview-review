import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

import MovieCard from "../ui/components/card";
import CreateCard from "../ui/components/createcard";

export default function Home() {
  return (
    <main>
      <div className="bg-slate-300 h-screen">
        <h1 className="p-4 text-6xl font-bold text-gray-700">My Page</h1>
        <div>
          <>
            <Card className="flex max-w-screen-md p-4 m-4">
              <CardContent className="object-contain">
                <img
                  src="https://th.bing.com/th/id/R.5a70d889deb5daa948132d370c312f62?rik=YJNiOoekv5%2frWw&riu=http%3a%2f%2ffarm5.static.flickr.com%2f4011%2f4504949513_df8494b480_o.jpg&ehk=bvwzvIeQ9auETsNt83JvD9oidJtxs%2fN9MbOnw%2ffmz8Y%3d&risl=&pid=ImgRaw&r=0"
                  alt="Movie Poster"
                  style={{ width: "350px", height: "200px" }}
                />
              </CardContent>
              <div className="flex flex-col">
                <CardHeader>
                  <div className="header-content ml-6">
                    <CardTitle>高巣雄大</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="ml-6">
                  <CardDescription>好きなジャンル</CardDescription>
                  <p className="break-words">アクション、SF</p>
                </CardContent>
              </div>
            </Card>
          </>
        </div>
      </div>
    </main>
  );
}
