import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import flv from "flv.js";
import { useParams } from "react-router-dom";
import { fetchStream } from "../../actions";

const StreamShow = (props) => {
  const videoRef = useRef(null);

  const { id } = useParams();
  let player;
  let stream = props.streams[id];

  const buildPlayer = () => {
    if (player || !stream) return;

    player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    console.log(videoRef);
    player.attachMediaElement(videoRef.current);
    player.load();
  };

  useEffect(() => {
    buildPlayer();
    if (!stream) {
      props.fetchStream(id);
      buildPlayer();
    }

    // will work similar to componentWillUnmount
    return () => {
      player.destroy();
    };
  }, []);

  if (!stream) return <div>loading...</div>;
  else {
    const { title, description } = stream;

    return (
      <div>
        {/* this is the video tag */}
        <video ref={videoRef} style={{ width: "100%" }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    streams: state.streams,
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
