interface DATATYPE {
  id: string;
  name: string;
}

export default async function Home() {
  const res = await fetch("http://localhost:8080/users");
  const data: Array<DATATYPE> = await res.json(); // レスポンスをJSONとしてパース

  return (
    <div>
      {data.map((user) => {
        return (
          <>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
          </>
        );
      })}
    </div>
  );
}
