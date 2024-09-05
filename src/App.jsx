import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    window.onload = ()=> {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude: " + position.coords.latitude);
          console.log("Longitude: " + position.coords.longitude);
          setCount(`Latitude: ${position.coords.latitude} / Longitude: ${position.coords.longitude}`);
        }, function(error) {
          setCount("Erro ao obter localização: " + error.message);
        });
      } else {
        setCount("Geolocalização não é suportada pelo navegador.");
      }
    };
  }, []);
  

  return (
    <>
      <div>{count}</div>
    </>
  )
}

export default App
