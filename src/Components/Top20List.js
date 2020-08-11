import React from "react";
import Tune from "./Tune";

const Top20List = (props) => {

    const songNodes = props.songs.map(song => {
        return (
            <Tune 
            key={song.id.label}
            image={song["im:image"][0].label}
            title={song["im:name"].label}
            artist={song["im:artist"].label}
            preview={song.link[1].attributes.href}
            />
        )
    })

    return (
        <ol>
            { songNodes }
        </ol>
    )

}

export default Top20List;