import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
export default function Home() {
  return (
   <main className="bg-gradient-to-tr from-primary to-secondary h-screen flex justify-center items-center">
     <div className="px-6 py-6 rounded-xl bg-gradient-to-br from-[#D9D9D9]/50 to-[#D9D9D9]/60 backdrop-blur-xl max-w-md">
      <TodoList/>
      <AddTodo/>
     </div>
    

   </main>
  );
}
