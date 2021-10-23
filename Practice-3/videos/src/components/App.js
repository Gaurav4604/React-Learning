import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            videos: []
        }
    }
    
    onTermSubmit = async (term) => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items
        });
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                I have {this.state.videos.length} videos
            </div>
        );
    }
}

export default App;