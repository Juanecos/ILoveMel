import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState, useEffect } from "react";
import './App.css';

// importar componentes
import MainContainer from "./components/MainContainer";
import Heart from "./components/Heart";
import Image from "./components/Image";
import LoveButtons from "./components/LoveButtons";

// importar imagenes
import heartsLoveGif from './assets/hearts-love.gif'
import peachKissGif from './assets/peach-and-goma-peach-goma.gif'

function App() {

  const [showMessage, setShowMessage] = useState(false);
  const [showLast, setShowLast] = useState(false);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowLast(true);
      }, 3000);

      return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    }
  }, [showMessage]); // Se ejecuta solo cuando showMessage cambia a true
  return (
    <>
    { showMessage ? (
      showLast ? (
        <MainContainer>
          <h1 className="text-4xl">Lo sabia bb 😍</h1>
          <Image image={peachKissGif} description="loveimage2"></Image>
          <p> Tambien te amo un monton by: Cami❤</p>
        </MainContainer>
      ) : (
      <Heart></Heart>

      ) 
      ) : (
        <MainContainer>
        <h1 className="text-4xl">Me amas mucho Mel?</h1>
        <Image image={heartsLoveGif} description="loveimage1"></Image>
        <div>
          <LoveButtons onClick={() => setShowMessage(true)} text="Si" movable={false} />
          <LoveButtons text="No" movable={true} />
        </div>
      </MainContainer>
      )}

    </>

  );
}

export default App;
