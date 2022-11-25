import './App.css';
import React from 'react';

class App extends React.Component{

state = {
  name: 'circle'
}

startRotation = () => {
  this.setState({
    name: 'circle start-rotate'
  })
  setTimeout(() => {
    this.setState({
      name: 'circle start-rotate stop-rotate'
    })
  }, Math.floor(Math.random() * 5000) + 1)
}

render() {
  return (
  <>
   
    <div className='app'>
      <div className='arrow'></div>

      <ul className={this.state.name}>
        <li><div className='text'>0</div></li>
        <li><div className='text'>10</div></li>
        <li><div className='text'>20</div></li>
        <li><div className='text'>30</div></li>
        <li><div className='text'>40</div></li>
        <li><div className='text'>50</div></li>
        <li><div className='text'>60</div></li>
        <li><div className='text'>70</div></li>
        <li><div className='text'>80</div></li>
        <li><div className='text'>90</div></li>
        <li><div className='text'>100</div></li>
        <li><div className='text'>Retry</div></li>
      </ul>

      <button className='spin-button' onClick={this.startRotation}>SPIN</button>
      <br></br>
      <h1>Spin & Check your luck rating</h1>
    </div>
  </>
  );
}
}

export default App