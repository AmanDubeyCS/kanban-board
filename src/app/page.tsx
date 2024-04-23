import Header from "@/Components/Header";
import KanbanBoard from "@/Components/KanbanBoard";
import TaskForm from "@/Components/TaskForm";

export default function Home() {
  return (
    <main className="container relative">
      <Header />
      <KanbanBoard />
    </main>
  );
}
