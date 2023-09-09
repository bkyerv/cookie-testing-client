function App() {
  console.log("mode", import.meta.env.MODE);
  console.log("env", import.meta.env);
  async function fetchServer() {
    const url =
      import.meta.env.MODE === "production"
        ? import.meta.env.VITE_URL_PROD
        : import.meta.env.VITE_URL_DEV;
    const res = await fetch(url, {
      credentials: "include",
    });
    const data = await res.text();
    console.log(data);
  }
  return (
    <div className="max-w-sm mx-auto h-screen pt-16">
      <button onClick={fetchServer} className="px-2 py-1 rounded border">
        Hit server
      </button>
    </div>
  );
}
export default App;
