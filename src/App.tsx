function App() {
  async function fetchServer() {
    const res = await fetch("http://localhost:8787", {
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
