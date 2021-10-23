import axios from 'axios';

const KEY = 'AIzaSyBJZkI9A-NJAMQJDpMs7c43Um07_IIpbTc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});