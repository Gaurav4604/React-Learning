import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID S6H0ylvsB22syakSySNcmfHWq3Tk1TVYcKD9oP_DyWw'
    }
});