import React from "react"
import PropTypes from "prop-types"
import "./Meme.css"

const Meme = ({deleteMeme, url, topText, bottomText, id}) => {
   const handleDeleteMeme = () => {
       deleteMeme(id)
   }


    return (
        <div id="foo" className="Meme">
            <div className="container">
                <span className="top-text">{topText}</span>
                <img src={url} alt="meme"/> 
                <span className="bottom-text">{bottomText}</span>
                <button id="meme_deleteBtn" onClick={handleDeleteMeme}>DELETE</button>
            </div>   
        </div>
    )
}

Meme.propTypes = {
    topText: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired
}
export default Meme