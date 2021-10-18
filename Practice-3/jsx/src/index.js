// import react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    let btnText = ["Click Me ", "Please"];

    const styles = {
            backgroundColor: 'blue',
            color: 'white'
        };
    return (
        <div>
            <label htmlFor="name">Enter name:</label>
            <input type="text" id="name" />
            <button style={styles}
            >{btnText}</button>
        </div>
    );
}

// take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);