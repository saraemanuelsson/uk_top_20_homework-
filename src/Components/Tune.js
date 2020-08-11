import React from "react";
import "./Tune.css"

const Tune = (props) => {

    return (
        <div>
            <li>
                <img src={props.image} alt="" className="album-cover"/>
                <h3 className="title">{props.title}</h3>
                <h4 className="artist">{props.artist}</h4>
                <a href={props.preview} className="link">Listen!</a>
            </li>
            <hr/>
        </div>

    )

}

export default Tune;