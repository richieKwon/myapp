import React, { useState } from "react";
import SearchBox from "./SearchBox";

export default function SearchBoxTest() {

    const [state, setState] = useState(
        { searchQuery: "" }
    );

    function searchQueryChanged(searchQuery) {
        setState({ searchQuery: searchQuery });
    }
    return (
        <>
            <SearchBox searchQueryChanged={(searchQuery) => { searchQueryChanged(searchQuery) }}></SearchBox>
        </>
    )
}