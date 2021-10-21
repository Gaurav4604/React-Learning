import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // destructuring properties from the image object
    // image objects are the elements of images array 
    const images = props.images.map((image) => {
        return (
            <ImageCard image={image} key={image.id}/>
        );
    })
    return (
        <div className='image-list'>
            {images}            
        </div>
    )
}

export default ImageList
