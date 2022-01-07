import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  const params = useParams();
  let stream = props.streams[params.id];

  useEffect(() => {
    if (!stream) {
      props.fetchStream(params.id);
    }
  }, []); // to make sure that we check and fetch required data

  const onSubmit = (formValues) => {
    props.editStream(params.id, formValues);
  };

  console.log(stream);

  if (!stream) return <div>Loading...</div>;
  else
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={{
            // these have to be same as the name given to the redux form component
            title: stream.title,
            description: stream.description,
          }}
          onSubmit={onSubmit}
        />
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    streams: state.streams,
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
