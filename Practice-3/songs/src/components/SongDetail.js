import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  return (
    <div>
      <h1>Song Detail</h1>
      {props.song ? (
        <div>
          <h2>Title: {props.song.title}</h2>
          <h3>Duration: {props.song.duration}</h3>
        </div>
      ) : (
        <div>
          <h2>Select a Song</h2>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
