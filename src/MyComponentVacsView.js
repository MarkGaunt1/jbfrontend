import React,{useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import image from './jboard4.jpg';


const vacsPage = {
    width: '100%',
    height: '100%',
    color: 'white',
    margin: '0',
    backgroundImage: 'url('+image+')',
    backgroundSize: 'contain'
    
}


const table = {
    margin:'0'
  };


export function MyComponentVacsView() {

    const[responseData, setResponseData] = useState([]);
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIHOST}/api/vacs`)
    .then(response => response.json())
  .then(data => setResponseData(data));
  },[]);

  console.log(process.env.APIHOST);
    
  const renderTable = () => {
    return responseData.map(vac => {
      return (
    
    <tbody >

        <tr>
        <td>Job ID:</td>
        <td>{vac._id}</td>
            
        </tr>


        <tr>
        <td>Job Ref:</td>
        <td>{vac.jobref}</td>
            
        </tr>

                        
        <tr>
        <td>Job Title:</td>
        <td>{vac.jobtitle}</td>
        </tr>
        
        <tr>
        <td>Location:</td>
        <td>{vac.location}</td>
        </tr>

        <tr>
        <td>Salary:</td>
        <td>{vac.salary}</td>
        </tr>

        <tr>
        <td>Job Description:</td>
        <td>{vac.jobdescription}</td>
        </tr>
        <br />
        <br />
        


    </tbody>





       
      )
    })
  }

  return (
    <div style = {vacsPage}>
                    <br />
                    <h3>&lt;Current Vacancies/&gt;</h3>
                    <br />
                    <div style = {table}>
                        <Table striped bordered hover variant="dark" >
                        {renderTable()}
                            
                        
                        </Table>
                        
                    </div>
                    <br />
                </div>
  );
}
