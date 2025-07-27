import './App.css'
import { Button } from "./components/ui/button";
function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-blue-500 dark:text-blue-300">
            NexMeet with Tailwind and shadcn/ui
          </h1>
          <Button variant="default">Test Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </div>
    </>
  );
}

export default App
