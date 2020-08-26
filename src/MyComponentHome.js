import React from 'react';
import {Container} from 'react-bootstrap';
import image from './jboard.jpg'

const styles = {
    width: '100%',
    height: '1000px',
    color: 'white',
    margin: '0',
    backgroundImage: 'url('+image+')',
    backgroundSize: 'cover'
      
    };


export function MyComponentHome() {


return (
    <div>
        <Container fluid style = {styles}>
        <br />
        <br />
        <h1>&lt;DEV JOBS R US/&gt;</h1>
        <br />        
        <h3>&lt;Advertise or search the latest developer jobs!/&gt;</h3>
        <br /> 
        <br />
        <br />
        <br />
        <br /> 
        </Container>      
       
      </div>
  );
}