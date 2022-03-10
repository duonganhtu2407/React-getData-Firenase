import { addDoc, collection, setDoc } from 'firebase/firestore/lite';
import React, { useState } from 'react'
import db from '../../config/fbConfig';

export const readData = async (data) => {
    const dataRef = collection(db, "test");

    await addDoc(dataRef, data);
}

export default function CreateProjects() {

    const initialValue = {
        title: '',
        content: '',
        authFirstName: '',
        authLastName: '',
    }

    const [input, setInput] = useState(initialValue);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({
            ...input,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        readData(input)

        setInput(initialValue)



    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="blue-text text-darken-3">Create Project</h5>
                <div className="inpit-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange} value={input.title} name="title" />
                </div>
                <div className="inpit-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={handleChange} value={input.content} name="content"></textarea>
                </div>
                <div className="inpit-field">
                    <label htmlFor="content">FirstName</label>
                    <textarea id="content" className="materialize-textarea" onChange={handleChange} value={input.authFirstName} name="authFirstName"></textarea>
                </div>
                <div className="inpit-field">
                    <label htmlFor="content">LastName</label>
                    <textarea id="content" className="materialize-textarea" onChange={handleChange} value={input.authLastName} name="authLastName"></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}
