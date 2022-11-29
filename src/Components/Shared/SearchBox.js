import React, { useState } from "react";
import debounce from 'loadash.debounce'

export default function SearchBox(props) {

    const [state, setState] = useState(
        { searchQuery: "" }
    );

    function searchHandler() {
        debounce(sendSearchQuery(), 1000)
    }

    function sendSearchQuery() {
        props.searchQueryChanged(state.searchQuery);
    }

    function searchQueryChanged(event) {
        const query = event.targer.value
        setState({ searchQuery: query });
        searchHandler();
    }

    function debounce(fn, interval) {
        let debounceTimer

        return _ => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                debounceTimer = null;
                fn.apply(this, arguments);
            }, interval);
        };
    };

    return (
        <>
            <div>
                <input type="search" value={state.searchQuery}
                    onChange={searchQueryChanged}></input>

                <div>
                    <button type="button" onClick={sendSearchQuery}>Search</button>
                </div>
            </div>
        </>
    )
}