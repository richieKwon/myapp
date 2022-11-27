import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EntryDetails(props) {

    const [status, setStatus] = useState({
        id: "",
        name: "",
        title: "",
        content: "",
        created: ""
    });

    const navigate = useNavigate()

    const params = useParams().id;
    const fetchURL = "https://localhost:5001/api/entries/" + params

    useEffect(() => { displayById() }, []);

    function displayById() {
        fetch(fetchURL, { method: "GET" })
            .then((response) => { return response.json() })
            // .then((data) => console.log(data));
            .then((data) =>
                setStatus({
                    id: data.id,
                    name: data.name,
                    title: data.title,
                    content: data.content,
                    created: data.created ? new Date(data.created).toISOString().slice(0, 10) : null
                })
            );

    };

    function deleteBookById() {
        if (window.confirm("Delete?")) {
            fetch(fetchURL, {
                method: "DELETE"
                // headers: {
                //     'Content-Type': 'application/json',
                //     'Access-Control-Allow-origin': '*',
                //     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                // }
            }).then(res => {
                if (res.ok) {
                    alert("A new book is deleted");
                    navigate(`/`);
                }
            })
        }
    }
    return (
        <>
            <h3>EntryDetails</h3>
            <div className="row">
                <div className="col-md-6">

                    <div className="form-group">
                        <label style={{ display: "flex", flexDirection: "row", paddingLeft: 12 }}>ID</label>
                        <input type="text" className="form-control" value={status.id}
                            style={{ margin: 10 }} name="name"></input>
                    </div>
                    <div className="form-group">
                        <label style={{ display: "flex", flexDirection: "row", paddingLeft: 12 }}>Name</label>
                        <input type="text" className="form-control" value={status.name}
                            style={{ margin: 10 }} name="name"></input>
                    </div>
                    <div className="form-group">
                        <label style={{ display: "flex", flexDirection: "row", paddingLeft: 12 }}>Title</label>
                        <input type="text" className="form-control" value={status.title}
                            style={{ margin: 10 }} name="title"></input>
                    </div>
                    <div className="form-group">
                        <label style={{ display: "flex", flexDirection: "row", paddingLeft: 12 }}>Content</label>
                        <textarea className="form-control" value={status.content}
                            style={{ margin: 10 }} rows="10">
                        </textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Edit</button>
                        &nbsp;
                        <button className="btn btn-danger" onClick={() => { deleteBookById() }}>Delete</button>
                        &nbsp;
                        <button className="btn btn-secondary" onClick={() => navigate(`/`)}>Back to List</button>
                    </div>

                </div>
            </div >
        </>
    );
}