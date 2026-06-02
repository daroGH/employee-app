import { useState } from "react";

export default function Filters() {
  const [searchQuery, setSearchQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("search") || "";
  });

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Sync the search input directly with the browser URL bar
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set("search", value);
    } else {
      url.searchParams.delete("search");
    }
    window.history.replaceState({}, "", url);
  };

  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={searchQuery}
      onChange={handleSearchChange}
      className="w-full sm:w-64 px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-md focus:outline-hidden focus:border-slate-400 placeholder-slate-400"
    />
  );
}
