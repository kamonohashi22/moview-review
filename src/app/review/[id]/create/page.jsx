// app/review/[id]/create.page.js
"use client";
export default function ReviewCreate({ id }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const reviewData = Object.fromEntries(formData.entries());

    // ここでreviewDataを使ってレビューをデータベースに保存する処理を実装
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>レビュー作成</h1>
      <div>
        <label htmlFor="rating">評価:</label>
        <input type="number" id="rating" name="rating" required />
      </div>
      <div>
        <label htmlFor="comment">コメント:</label>
        <textarea id="comment" name="comment" required />
      </div>
      <button type="submit">送信</button>
    </form>
  );
}

// ここでサーバーコンポーネントを使用して映画のIDを取得する処理を実装
// データ取得のロジックは略
