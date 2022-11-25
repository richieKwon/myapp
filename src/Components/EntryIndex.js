import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function EntryIndex(props) {

    const [status, setStatus] = useState({ entries: [], loading: true });
    useEffect(() => { displayData() }, []);
    const navigate = useNavigate()

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
            <h1>Article List
                <button className="btn btn-sm btn-default" onClick={() => navigate('/create')}>+</button>
            </h1>

            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Contents</th>
                        <th>Created</th>
                        <th>Action, Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {status.entries.map((data, i) =>
                        <tr key={i}>
                            <td >{data.id}</td>
                            <td >{data.name}</td>
                            <td >{data.title}</td>
                            <td >{data.content}</td>
                            <td >{new Date(data.created).toLocaleDateString()}</td>
                            <td className="text-nowrap">
                                <button className="btn btn-sm btn-primary" onClick={() => navigate(`/edit/${data.id}`)}>Edit</button> &nbsp;
                                &nbsp;
                                <button className="btn btn-sm btn-danger" onClick={() => navigate(`/delete/${data.id}`)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
} 