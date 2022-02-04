import axios from "axios";

export const key = 'e38847e98b1cf994a4be12a5ec2350af6afab377'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}` 
    }
})

export default api