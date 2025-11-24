"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // CLOSE WHEN USER CLICKS OUTSIDE
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>

      <h1 className="navbar-logo-text">AlgoPlayground</h1>

      <div className="nav-links">

        <Link href="/">Home</Link>

        {/* BASICS DROPDOWN */}
        <div
          className="dropdown-wrapper"
          onMouseEnter={() => openMenu !== "basics" && setOpenMenu("basics")}
          onMouseLeave={() => openMenu !== "basics-click" && setOpenMenu(null)}
          onClick={() =>
            toggleMenu(openMenu === "basics-click" ? null : "basics-click")
          }
        >
          <span className="dropdown-label">Basics ▾</span>

          {(openMenu === "basics" || openMenu === "basics-click") && (
            <div className="dropdown-menu">
              <Link href="/basics/sorting">Sorting Algorithms</Link>
              <Link href="/basics/searching">Searching Algorithms</Link>
              <Link href="/basics/recursion">Recursion</Link>
            </div>
          )}
        </div>

        {/* PATHFINDING DROPDOWN */}
        <div
          className="dropdown-wrapper"
          onMouseEnter={() => openMenu !== "path" && setOpenMenu("path")}
          onMouseLeave={() => openMenu !== "path-click" && setOpenMenu(null)}
          onClick={() =>
            toggleMenu(openMenu === "path-click" ? null : "path-click")
          }
        >
          <span className="dropdown-label">Pathfinding ▾</span>

          {(openMenu === "path" || openMenu === "path-click") && (
            <div className="dropdown-menu">
              <Link href="/pathfinding/Shortest">Shortest Path </Link>
              <Link href="/pathfinding/maze">Maze generation</Link>
            </div>
          )}
        </div>

        {/* TREES DROPDOWN */}
        <div
          className="dropdown-wrapper"
          onMouseEnter={() => openMenu !== "trees" && setOpenMenu("trees")}
          onMouseLeave={() => openMenu !== "trees-click" && setOpenMenu(null)}
          onClick={() =>
            toggleMenu(openMenu === "trees-click" ? null : "trees-click")
          }
        >
          <span className="dropdown-label">Trees▾</span>

          {(openMenu === "trees" || openMenu === "trees-click") && (
            <div className="dropdown-menu">
              <Link href="/trees/bst">Binary Search Tree</Link>
              <Link href="/trees/avl">AVL Tree</Link>
              <Link href="/trees/heap">Heap Tree</Link>
            </div>
          )}
        </div>
        {/* GRAPHS DROPDOWN */}
        <div
          className="dropdown-wrapper"
          onMouseEnter={() => openMenu !== "graphs" && setOpenMenu("graphs")}
          onMouseLeave={() => openMenu !== "graphs-click" && setOpenMenu(null)}
          onClick={() =>
            toggleMenu(openMenu === "graphs-click" ? null : "graphs-click")
          }
        >
          <span className="dropdown-label">Graphs ▾</span>

          {openMenu === "graphs" && (
            <div className="dropdown-menu">
              <Link href="/graphs/Construction">Graph Construction</Link>
              <Link href="/graphs/Traversal">Traversal Algorithms</Link>
              <Link href="/graphs/MST">Minimum Spanning Tree (MST)</Link>
            </div>
          )}
          
        </div>
        <Link href="/compiler">Compiler</Link>
      </div>
    </nav>
  );
}
