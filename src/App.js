import React, { useState } from 'react';
import './App.css';

function App() 
const [cursorX ,setCursorX]= useState();
    const [cursorY ,setCursorY]= useState();

    window.addEventListener('mousemove',(e)=>{
        setCursorX(e.pageX)
        setCursorY(e.pageY)
    })
    return (
        <div>
           <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#News">News</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Contact</a></li>

                <div className="cursor"
                style={{
      left:cursorX + 'px',
      top:cursorY + 'px'
      }}
                >
                    
                </div>
            </ul>        
        </div>
  );
}

export default App;
