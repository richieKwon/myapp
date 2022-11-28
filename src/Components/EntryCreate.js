import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function EntryCreate(props) {
    const [status, setStatus] = useState({
        id: "",
        name: "",
        title: "",
        content: "",
        created: ""
    });
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        let entryDto = {
            // id: 0,
            name: status.name,
            title: status.title,
            content: status.content,
            // created: Date.now()
        };

        console.log(entryDto);

        fetch("https://localhost:5001/api/entries", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-origin': '*',
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
            body: JSON.stringify(entryDto)
        }).then(res => {
            if (res.ok) {
                alert("A new book is created");
                navigate(`/`);
            }
        })
        // axios.post("https://localhost:5001/api/entries", entryDto)
        //     .then((result) => { navigate('/') })
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
            <h3>Create your book</h3>
            <div className="row">
                <div className="col-md-8 offset-md-2">
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
                            <button type="submit" className="btn btn-success">Submit</button>
                            &nbsp;
                            <button className="btn btn-secondary" onClick={() => navigate(`/`)}>Back to List</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
} 