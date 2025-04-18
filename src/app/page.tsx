import Board from "./components/Board";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Project Board</h1>
      <Board />
    </main>
  );
}
