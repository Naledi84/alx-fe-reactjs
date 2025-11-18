import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">GitHub User Search</h1>
        <p className="text-sm text-gray-600">
          Enter a GitHub username to fetch profile details.
        </p>
      </header>

      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
