import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Herosection/Hero'
import Section from './components/Section/section'
import styles from './App.module.css'
import { useEffect, useState } from "react";
import { fetchTopAlbums,fetchNewAlbums } from "./components/Apidata/Albumapi";
function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  const generateTopAlbumData = async()=>{
    try{
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
      
    }catch(err){
      console.error(err)
    }
  }
  const generateNewAlbumData = async()=>{
    try{
      const data = await fetchNewAlbums();
      setNewAlbumData(data);
     
    }catch(err){
      console.error(err)
    }
  }
  useEffect(()=>{
    generateTopAlbumData()
    generateNewAlbumData()
  },[])
  useEffect(()=>{
    console.log(topAlbumData)
  },[topAlbumData,newAlbumData])

  
  return (
    <>
     <Navbar/>
     <Hero/>
     <div className={styles.sectionWrapper}>
      <Section type= "album" title="Top Albums" data={topAlbumData}/>
      <Section type= "album" title="New Albums" data={newAlbumData}/>

      </div>
    
    </>
  );
}

export default App;
