import React from "react";

const Spinner = (props) => {
    return (
        <div className='ui active dimmer'>
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
}

// specifying default properties
Spinner.defaultProps = {
    message: 'Loading...'
    // here the message prop has a default value
    // in case a prop is not passed to it
}

export default Spinner;