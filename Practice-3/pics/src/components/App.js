import React, { Component } from 'react';
import unsplash from  '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends Component {

    constructor() {
        super();
        this.state = {
            images: []
        }
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            },
            
        });

        this.setState({
            images: response.data.results
        });
    }
    
    render() {
        return (
            <div className="ui container" style={
                {
                    marginTop: '10px'
                }
            }>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}


export default App;