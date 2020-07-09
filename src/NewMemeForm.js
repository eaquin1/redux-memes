import React, {useState} from "react"
import { v4 as uuid } from 'uuid';
import "./NewMemeForm.css"

const Form = ({createMeme}) => {
    const INITIAL_STATE = {url: '', topText: '', bottomText: ''}
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleSubmit= (e) => {
        e.preventDefault()
        createMeme({...formData, id: uuid()});
        setFormData(INITIAL_STATE)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(f => ({
            ...f,
            [name]: value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="url">Image URL</label>
                <input
                 type="text" 
                 name="url"
                 id="url"
                 onChange={handleChange}
                 value={formData.url}     
                 />
            </div>
            <div className="form-group">
                <label htmlFor="topText">Top Text</label>
                <input
                 type="text" 
                 id="top-text"
                 onChange={handleChange}
                 value={formData.topText}
                 name="topText"
                 />
            </div>
            <div className="form-group">
                <label htmlFor="bottomText">Bottom Text</label>
                <input
                 type="text" 
                 id="bottom-text"
                 onChange={handleChange}
                 value={formData.bottomText}
                 name="bottomText"
                 />
            </div>
            <button>Create Meme</button>
        </form>

    )
}

export default Form