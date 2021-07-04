import React from 'react'

function FunctionClick() {
    function clickHandler(){
        document.body.append("hello");
    }
    return (
        <div>
            {/* this is supposed to be a function handler not a function by itself */}
            <button onClick={clickHandler}>
                Clicker
            </button>
        </div>
    )
}

export default FunctionClick
