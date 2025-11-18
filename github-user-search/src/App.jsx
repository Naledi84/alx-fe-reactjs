import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">GitHub User Search</h1>
        <p className="text-sm text-gray-600">
          Search by username/keyword, filter by location and minimum
          repositories.
        </p>
      </header>

      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
