import MovieCard from "../ui/components/card";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
export default async function Home() {
  const movies = await prisma.movie.findMany({
    orderBy: {
      id: "asc",
    },
  });
  console.log("movies" + movies);
  return (
    <main>
      <div className="bg-slate-300">
        {/* <h1 className="p-4 text-6xl font-bold text-gray-700">Task Box</h1> */}
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            content={movie.detail}
            date={movie.releaseDate.toDateString()}
          />
        ))}
      </div>
    </main>
  );
}
