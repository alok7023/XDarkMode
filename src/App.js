import React, {useState} from 'react';
import './App.css';
const styles = {
  dark : {
    backgroundColor : "black",
    color:"white"
  },
  light : {
    backgroundColor : "white",
    color:"black"
  }
}

function App() {
  const [theme, setTheme] = useState(false);
  const handleTheme =() => {
    setTheme(!theme);
  }
  return (
  <div className="App" style={theme ? styles.light : styles.dark}> 
      <h1>Change Theme</h1>
      <button onClick={handleTheme}>Click</button>
    </div>
  );
}

export default App;
