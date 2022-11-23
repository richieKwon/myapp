import React, { useState } from "react";

export default function EntryDetails(props) {

    const [status, setStatus] = useState({
        id: 0,
        name: "",
        title: "",
        content: "",
        created: null
    });

    function navigateToIndex() {
        const { history } = props
        history.push('entries/index')
    }

    return (
        <>
            <h3>EntryDetails</h3>
        </>
    );
}