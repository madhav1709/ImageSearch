import axios from 'axios';

export default axios.create({ 

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -GQAcBad5m65sYObJbW2aZ5tlUneRdpQHmZaHDPWMJ0'
    }
})
