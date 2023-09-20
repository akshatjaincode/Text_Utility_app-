import './App.css';
import TodoApp from './TodoApp';
import React,{ useState, useTransition } from 'react';
import Navbar from './Navbar';
function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white';

    }

  }
  return (
    <>
  
        <Navbar
          title="TO DO APP"
          mode={mode}
          toggleMode={toggleMode}
        />

        <div className="container my-3" mode={mode}>
        <TodoApp />
        </div>
    </>
  );
}

export default App;

