import React from 'react';
import './App.css';
import image from './jboard.jpg';
import { MyComponentClient} from './MyComponentClient';
import { MyComponentVacsView} from './MyComponentVacsView';

const styles = {
  width: '100%',
  height: '100%',
  color: 'white',
  margin: '0',
  backgroundImage: 'url('+image+')',
  backgroundSize: 'cover'
    
  };

  

function App() {
  return (
    <div className="App">
      <header className="App-header"><link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
  />
      </header>

      <div style = {styles}>
        <br />
        <br />
        <h1>&lt;DEV JOBS R US/&gt;</h1>
        <br />        
        <h3>&lt;Advertise or search the latest developer jobs below/&gt;</h3>
        <br /> 
        <br />
        <br />
        <br />
        <br />       
       
      </div>  

    <MyComponentClient/>
    <MyComponentVacsView/>
        
        

    </div>
  );
}

export default App;
