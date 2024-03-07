import MovieCard from "../ui/components/card";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
export default async function Home() {
  const movies = await prisma.movie.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return (
    <main>
      <div className="bg-slate-300">
        <h1 className="p-4 text-6xl font-bold text-gray-700">
          Recommend Movies
        </h1>
        {/* Flex containerを追加し、flex-wrapを使用して項目を折り返すようにします */}
        <div className="flex flex-wrap -mx-2">
          {movies.map((movie) => (
            // 各カードをflex-basisを使用して幅を調整します。この例では50%の幅で、paddingのためにmx-2を追加しています。
            <div className="w-1/2 p-2" key={movie.id}>
              <MovieCard
                title={movie.title}
                content={movie.detail}
                date={movie.releaseDate.toDateString()}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
