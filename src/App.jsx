import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=> {
      if("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude: " + position.coords.latitude);
          console.log("Longitude: " + position.coords.longitude);
          setCount(`Latitude: ${position.coords.latitude} / Longitude: ${position.coords.longitude}`);
        }, function(error) {
          switch(error.code) {
            case error.PERMISSION_DENIED:
              console.log("Permissão negada pelo usuário.");
              setCount("Permissão negada pelo usuário.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.log("Informação de localização indisponível.");
              setCount("Informação de localização indisponível.");
              break;
            case error.TIMEOUT:
              console.log("A requisição de localização expirou.");
              setCount("A requisição de localização expirou.");
              break;
            case error.UNKNOWN_ERROR:
              console.log("Ocorreu um erro desconhecido.");
              setCount("Ocorreu um erro desconhecido.");
              break;
          }
        }, {
          timeout: 10000 // Tempo limite de 10 segundos
        });
      } else {
        console.log("Geolocalização não é suportada pelo navegador.");
        setCount("Geolocalização não é suportada pelo navegador.");
      }
  }, []);
  

  return (
    <>
      <div>{count}</div>
    </>
  )
}

export default App
