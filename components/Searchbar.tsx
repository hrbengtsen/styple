import React, { useState } from "react";
import { SearchField } from "../packages/design-system";

// Boilerplate component of how to implement SearchField
export const Searchbar = () => {
  const [query, setQuery] = useState("");

  function keyPressed(e: React.KeyboardEvent) {
    // Check and prevent default for 'Enter'
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }

  return (
    <form style={{ width: "100%" }}>
      <SearchField
        query={query}
        setQuery={setQuery}
        keyPressed={keyPressed}
        placeholder="Search test.."
      />
    </form>
  );
};
