import React, { Component } from 'react';

class ImageCard extends Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        // this allows us to create a dom reference to the current image
        this.state = {
            spans: 0
        };
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        // function that we use to modify the css on image and change its grid-row-end value based on image height
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({spans: spans});
    }
    
    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={
                {
                    gridRowEnd: `span ${this.state.spans}`
                }
            }>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        );
    }
}

export default ImageCard;