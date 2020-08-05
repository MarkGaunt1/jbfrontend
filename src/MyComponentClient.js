import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';

const clientPage = {
    width: '100%',
    height: '100%',
    color: 'white',
    
    margin: '0',
    backgroundColor: 'black',
    backgroundSize: 'cover'
}

const AddForm  = {
    marginLeft: '20%',
    marginRight:'20%',
    
  };
  
 
export function MyComponentClient() {
    
    const [jobref, setJobref] = useState("");
    const [jobtitle, setJobtitle] = useState("");
    const [salary, setSalary] = useState("");
    const [location, setLocation] = useState("");
    const [jobdescription, setJobdescription] = useState("");
    const[_id, set_id] = useState("");
    const[responseData, setResponseData] = useState([]);



    function onClick() {
        
        const requestOptions = {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json' 
        },
            body:   JSON.stringify({ jobref, jobtitle, salary, location, jobdescription })
        };
        fetch(`http://localhost:5000/api/vacs`, requestOptions)
        .then(response => response.json())
        .then(data => setResponseData(data));
        console.log(responseData)
    }; 


    function onClickDel() {
            
        
        
        fetch(`http://localhost:5000/api/vacs/` + _id, {method: 'DELETE'})
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    };


  return (
    <div>


        <Container fluid style = {clientPage}>
        <br />
        <h3>&lt;Client Vacancy Manager/&gt;</h3>
        <br />
            

            <Row>
                <Col>
                    <Form style = {AddForm}>
                        <Form.Label><h3>&lt;Post Vacancy/&gt;</h3></Form.Label>
        
                            <Form.Group controlId="formBasicText1">
                                <Form.Label>Job Reference:</Form.Label>
                                <Form.Control type="text" value= {jobref}  onChange={e => setJobref(e.target.value)} placeholder="eg Job01" />
                            </Form.Group>

                            <Form.Group controlId="formBasicText2">
                                <Form.Label>Job Title:</Form.Label>
                                <Form.Control type="text" value= {jobtitle}  onChange={e => setJobtitle(e.target.value)}placeholder="eg Developer" />
                            </Form.Group>

                            <Form.Group controlId="formBasicText3">
                                <Form.Label>Job Salary:</Form.Label>
                                <Form.Control type="number" value= {salary}  onChange={e => setSalary(e.target.value)}placeholder="30000" />
                            </Form.Group>

                            <Form.Group controlId="formBasicText4">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" value= {location}  onChange={e => setLocation(e.target.value)}placeholder="eg Leeds" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Job Description:</Form.Label>
                                <Form.Control as="textarea" rows="10" value= {jobdescription}  onChange={e => setJobdescription(e.target.value)} />
                                <br />           
                                <Button onClick={onClick} variant="primary" type="post" >
                                    Post
                                </Button>


                            </Form.Group>

       
                    </Form>
                
                </Col>
                
                

                <Col>

                <Form style = {AddForm}>
                        <Form.Label><h3>&lt;Find & Edit Vacancy/&gt;</h3></Form.Label>
        
                            <Form.Group controlId="formBasicText1">
                                <Form.Label>Job ID:</Form.Label>
                                <Form.Control type="text" placeholder="eg Job01" />
                                <br />           
                                <Button variant="primary" type="delter" >
                                    Find
                                </Button>
                            </Form.Group>

                            

       
                    </Form>
                    <br />

                    <Form style = {AddForm}>
                        <Form.Label><h3>&lt;Update Vacancy/&gt;</h3></Form.Label>
        
                            <Form.Group controlId="formBasicText1">
                                <Form.Label>Job Reference:</Form.Label>
                                <Form.Control type="text" placeholder="eg Job01" />
                            </Form.Group>

                            <Form.Group controlId="formBasicText2">
                                <Form.Label>Job Title:</Form.Label>
                                <Form.Control type="text" placeholder="eg Developer" />
                            </Form.Group>

                            <Form.Group controlId="formBasicText3">
                                <Form.Label>Job Salary:</Form.Label>
                                <Form.Control type="number" placeholder="30000" />
                            </Form.Group>

                            <Form.Group controlId="formBasicText4">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" placeholder="eg Leeds" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Job Description:</Form.Label>
                                <Form.Control as="textarea" rows="10" />
                                <br />           
                                <Button variant="primary" type="update" >
                                    Update
                                </Button>
                                


                            </Form.Group>

       
                    </Form>
                
                </Col>

                <Col>
                    <Form style = {AddForm}>
                        <Form.Label><h3>&lt;Delete Vacancy/&gt;</h3></Form.Label>
        
                            <Form.Group controlId="formBasicText1">
                                <Form.Label>Job ID:</Form.Label>
                                <Form.Control type="text" value= {_id}  onChange={e => set_id(e.target.value)}placeholder="eg Job01" />
                                <br />           
                                <Button onClick={onClickDel} variant="primary" type="delter" >
                                    Delete
                                </Button>
                            </Form.Group>

                            

       
                    </Form>
                
                </Col>
                
                
            </Row>
        </Container>
             
    
      

    </div>
  );
}
