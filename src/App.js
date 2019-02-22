import React, { useState } from 'react';
import './App.css';
import MediaHooks from './Hooks.Media.container'
import MediaHookless from './Hookless.Media.container'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <OneChanceButtonHooks />
      <OneTimeButtonHookless />
        <p>
          Hooks in <code>src/Hooks.Media.container.js</code> check it out.
        </p>
        <MediaHooks />
        <MediaHookless />
      </header>
    </div>
  );
}


class OneTimeButtonHookless extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        disabled={this.state.clicked}
      >
        Yea, you clicked the button... once... without hooks
      </button>
    );
  }
} 



const OneChanceButtonHooks =(props)=>  {
  const [clicked, setClicked] = useState(false);

  const doClick =()=> setClicked(true); 

  return  (  
    <div>
      <button 
        onClick={clicked ? undefined : doClick} 
        disabled={clicked} > 
        You Have One Chance to Click.. with hooks
      </button> 
    </div> 
  );  
}

export default App