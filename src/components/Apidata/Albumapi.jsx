import axios from "axios";

export const EndPoint = "https://qtify-backend-labs.crio.do/"
export const fetchTopAlbums = async ()=>{
    try{
        const res = await axios.get(`${EndPoint}/albums/top`);
        
        return res.data
    } catch(err){
        console.error(err)
    }
}   
export const fetchNewAlbums = async ()=>{
    try{
        const res = await axios.get(`${EndPoint}/albums/new`);
        return res.data
    } catch(err){
        console.error(err)
    }
}   