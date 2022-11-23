import React, { useEffect, useState } from "react";
import axios from 'axios'
export default function EntryIndex(props) {

    const [status, setStatus] = useState({ entries: [], loading: true });
    useEffect(() => { displayData() }, []);

    // function navigateToCreate() {
    //     const { history } = props
    //     history.push('entries/create')
    // }

    async function displayData() {
        const response = await axios.get("https://localhost:5001/api/entries")
        const data = response.data;
        // debugger
        setStatus({ entries: data, loading: false })
    }


    return (
        <>
            <h1>Article List</h1>

            {/* {status.entries.map((data, i) => <ul key={i}>
                <li>
                    {data.id}
                    {data.title}
                    {data.content}
                    {data.created}
                </li>
            </ul>)} */}
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Contents</th>
                    <th>Created</th>
                </tr>
                {status.entries.map((data, i) =>
                    <tr key={i}>
                        <td >{data.id}</td>
                        <td >{data.name}</td>
                        <td >{data.title}</td>
                        <td >{data.content}</td>
                        <td >{data.created}</td>
                    </tr>
                )}
            </table>
        </>
    );
} 