// app/review/[id]/create.action.server.js
"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function reviewPost(formData) {
  // const formData = await request.formData();
  // const reviewData = Object.fromEntries(formData);
  const comment = formData.get("comment");
  const rating = formData.get("rating");
  // const movieId = formData.get("movieId");
  const reviewDate = formData.get("created_at");
  // paramsからmovieIdを取得
  // const movieId = params.id;
  // console.log("review" + reviewData);
  console.log("comment" + comment);
  console.log("rating" + rating);
  console.log("reviewDate" + reviewDate);

  // データベースにレビューを保存
  const review = await prisma.review.create({
    data: {
      movieId: 3, // 文字列を数値に変換
      rating: +4, // 適宜キャストする
      comment: comment,
    },
  });

  revalidatePath("/dashboard");
  redirect("/dashboard");
}
