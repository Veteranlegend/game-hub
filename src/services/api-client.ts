import axios from "axios"; 

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
   params: { 
    key: '141fed7387534372877ac5f9551fde47'
   } 
})
