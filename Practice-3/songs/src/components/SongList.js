import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
// this runs every time action creator changes the state of the redux store (i.e. any value change is noticed)
const mapStateToProps = (state) => {
  return {
    songs: state.songs, // this enables the SongList to have songs as a prop passed to it
  };
};

// this needs connect function, that talks to the parent component
export default connect(mapStateToProps, {
  selectSong, // this allows the action creator to be passed as props to the referenced child
  // and wraps the action creator with the dispatch function, thus allowing for the state change to be possible
})(SongList);
// this is a function that returns an invoked function with songList as a passed param
