
export default function Navbar() {
  return (
    <nav className="navbar w-full flex justify-between items-center p-4 bg-white shadow">
      <h1 className="navbar-logo-text text-2xl font-bold">AlgoPlayground</h1>

      <div className="nav-links flex gap-6">
        <a href="/Home" className="hover:text-blue-600">Home</a>
        <a href="/basics" className="hover:text-blue-600">Basics</a>
        <a href="/pathfinding" className="hover:text-blue-600">Pathfinding</a>
        <a href="/trees-graphs" className="hover:text-blue-600">Trees & Graphs</a>
        <a href="/compiler" className="hover:text-blue-600">Compiler</a>
      </div>
    </nav>
  );
}
