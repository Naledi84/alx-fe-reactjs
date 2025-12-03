import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500">
        Recipe Sharing Platform Setup Successful!
      </h1>
      <div className="bg-gray-100 min-h-screen">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
