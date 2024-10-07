export default async function Home() {
  const res = await fetch("http://localhost:8000/");
  const data = await res.json(); // レスポンスをJSONとしてパース

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
