import React, { useEffect } from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = (props) => {
  const params = useParams();
  let stream = props.streams[params.id];

  const actions = (
    <React.Fragment>
      <button
        onClick={() => {
          props.deleteStream(params.id);
        }}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </React.Fragment>
  );

  useEffect(() => {
    if (!stream) props.fetchStream(params.id);
  }, []);

  const renderContent = () => {
    if (!stream) {
      return "are you sure you want to delete this stream?";
    } else
      return (
        <div>
          are you sure you want to delete:
          <span style={{ fontWeight: "Bold" }}> {`${stream.title}`}</span>
        </div>
      );
  };

  return (
    <div>
      <div>Deleting your Stream</div>
      <Modal
        title="Delete Stream"
        content={renderContent()}
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: state.streams,
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
