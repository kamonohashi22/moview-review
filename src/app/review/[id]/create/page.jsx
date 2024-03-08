"use client";

import { useRouter } from "next/navigation"; // useRouterフックをインポート
import CreateCard from "../../../ui/components/createcard";
import { reviewPost } from "../create.action.server";
import ReviewForm from "@/app/ui/components/reviewForm";

export default function ReviewCreate() {
  const router = useRouter(); // useRouterフックを使ってルーターオブジェクトを取得

  const { id } = router; // ルーターのクエリオブジェクトからidを取得

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // idがundefinedでないことを確認
    if (id) {
      const response = await fetch(`/review/${id}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // ヘッダーを設定
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!response.ok) {
        console.error("レスポンスエラー", await response.text());
        return;
      }
      const data = await response.json();
    } else {
      console.error("IDが未定義です");
    }
  }

  return (
    <form action={reviewPost}>
      <ReviewForm />
    </form>
  );
}
