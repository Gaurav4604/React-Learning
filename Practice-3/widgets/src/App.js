import React, { Component } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'What is React?',
        content: 'It is a JavaScript library'
    },
    {
        title: 'Why is react awesome',
        content: 'because it uses jsx and babel'
    },
    {
        title: 'how to use react',
        content: 'use react by creating components'
    }
]

class App extends Component {
    render() {
        return (
            <div>
                {/* <Accordion items={items}/> */}
                <Search/>
            </div>
        );
    }
}

export default App;