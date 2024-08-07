import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [fontSize, font] = useState(40);
  const [greeting, setGreeting] = useState("Good Morning");
  const [language, setLanguage] = useState("English");


  const FontChange = (size) => {
    font(prevSize => prevSize + size)

  }
  const Language = (newLanguage) => {
    setLanguage(newLanguage);

  const greetings = {
      English: "Good Morning",
      Spanish: "Buenos Días",
      HaitianCreole: "Bonjou",
      Portuguese: "Bom Dia",
      Chinese: "早上好",
    };
    setGreeting(greetings[newLanguage]);
  };

  return (
    <div>

      <div>
        <button onClick={() => FontChange(-10)}>-</button>
        <button onClick={() => FontChange(10)}>+</button>
        
      </div>


      <h1 style={{ fontSize: `${fontSize}px` }}>
        {greeting}
      </h1>

      <div>
      <button onClick={() => Language("English")}>English</button>
      <button onClick={() => Language("Chinese")}>Chinese</button>
      <button onClick={() => Language("Spanish")}>Spanish</button>
      <button onClick={() => Language("HaitianCreole")}>Haitian Creole</button>
      <button onClick={() =>Language("Portuguese")}>Portuguese</button>
      </div>
    </div>
  );
};

export default App

