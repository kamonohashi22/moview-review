// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const movie1 = await prisma.movie.create({
    data: {
      title: "インセプション",
      imageUrl: "https://picsum.photos/200/300/?blur",
      detail: "夢の中での盗みという斬新なコンセプトを描いた作品。",
      releaseDate: new Date("2010-07-16"),
    },
  });

  const movie2 = await prisma.movie.create({
    data: {
      title: "インターステラー",
      imageUrl: "https://picsum.photos/200/300/?blur",
      detail: "宇宙を舞台にした時間と愛をテーマにした映画。",
      releaseDate: new Date("2014-11-07"),
    },
  });

  // さらに映画データを追加...
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
