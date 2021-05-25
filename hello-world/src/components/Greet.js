import React from 'react';

export const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div> // props.children helps to render more html inside the enclosing tags
    );
} // named export
