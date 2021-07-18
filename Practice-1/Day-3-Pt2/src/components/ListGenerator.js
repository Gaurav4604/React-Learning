import React from 'react'

export default function ListGenerator() {
    const names = ["ab", "cd", "ef"].map((name, index) => {
        //key is a identification attribute unique to each value
        return <h2 key={index}>{name}</h2>
        // better to not use index as key as keys are used to render the widget tree
        // each key has value associated with it, and is used to save processing when rendered,
        // if index is used as key, and order of items inserted is not simple, then it will cause
        // reordering issues on the widget tree 
    });
    console.log(names);
    return (
        <div>
            {names}
        </div>
    )
}
