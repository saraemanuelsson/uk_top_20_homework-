import React, { Component } from "react";
import Header from "../Components/Header";
import Top20List from "../Components/Top20List";

class Top20Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            title: "UK Top 20"
        };
    };

    componentDidMount() {
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"

        fetch(url)
        .then(res => res.json())
        .then(songs => this.setState({ songs: songs.feed.entry }))
        .catch(err => console.error)
    };

    render() {
        return (
            <div>
                <Header title={ this.state.title } />
                <Top20List songs={ this.state.songs } />
            </div>
        )
    };

}

export default Top20Container;