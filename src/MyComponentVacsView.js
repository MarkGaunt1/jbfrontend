import React,{useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import image from './jboard.jpg';


const vacsPage = {
    width: '100%',
    height: '100%',
    color: 'white',
    
    margin: '0',
    backgroundImage: 'url('+image+')',
    backgroundSize: 'cover'
}


const table = {
    marginLeft: '20%',
    marginRight:'20%',
  };


export function MyComponentVacsView() {

    const[responseData, setResponseData] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/api/vacs")
    .then(response => response.json())
  .then(data => setResponseData(data));
  },[]);
    
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
