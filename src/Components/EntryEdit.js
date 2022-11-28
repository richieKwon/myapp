import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function EntryEdit(props) {

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
    function handleSubmit(event) {
        event.preventDefault();
        let entryDto = {
            // id: { params },
            name: status.name,
            title: status.title,
            content: status.content,
            // created: Date.now()
        };

        fetch(fetchURL, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-origin': '*',
                // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
            body: JSON.stringify(entryDto)
        }).then(res => {
            if (res.ok) {
                alert("A new book is edited");
                navigate(`/`);
            }
        })
    }

    const handleChangeName = (event) => {
        setStatus({
            ...status,
            name: event.target.value
        })
    }

    function handleChangeTitle(event) {
        setStatus({
            ...status,
            title: event.target.value
        })
    }

    function handleChangeContent(event) {
        setStatus({
            ...status,
            content: event.target.value
        })
    }

    return (
        <>
            <h3>Edit - Book List</h3>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label style={{ display: "flex", flexDirection: "row", paddingLeft: 12 }}>Name</label>
                            <input type="text" className="form-control" placeholder="Add Name" value={status.name}
                                onChange={handleChangeName} style={{ margin: 10 }} name="name"></input>
                        </div>
                        <div className="form-group">
                            <label style={{ display: "flex", flexDirection: "row", paddingLeft: 12 }}>Title</label>
                            <input type="text" className="form-control" placeholder="Add Title" value={status.title}
                                onChange={handleChangeTitle} style={{ margin: 10 }} name="title"></input>
                        </div>
                        <div className="form-group">
                            <label style={{ display: "flex", flexDirection: "row", paddingLeft: 12 }}>Content</label>
                            <textarea className="form-control" placeholder="Put down the story" value={status.content}
                                onChange={handleChangeContent} style={{ margin: 10 }} rows="10">
                            </textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" >Edit</button>
                            &nbsp;
                            <button className="btn btn-secondary" onClick={() => navigate(`/`)}>Back to List</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
}