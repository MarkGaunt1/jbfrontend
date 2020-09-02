import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { MyComponentClientUpdate} from './MyComponentClientUpdate';





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
    
    const { register, handleSubmit, errors } = useForm();
  

    function onClick() {
        
        const requestOptions = {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json' 
        },
            body:   JSON.stringify({ jobref, jobtitle, salary, location, jobdescription })
        };
        fetch(`${process.env.REACT_APP_APIHOST}/api/vacs`, requestOptions)
        .then(response => response.json())
        .then(data => {setResponseData(data)
        window.location.reload()});
        console.log(responseData)
    }; 



    


    function onClickDel(event) {

        event.preventDefault();
            
        
        
        fetch(`${process.env.REACT_APP_APIHOST}/api/vacs/` + _id, {method: 'DELETE'})
        .then(response => response.text())
        .then(result => window.location.reload())
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
        
                            <Form.Group controlId="jobreference" >
                                <Form.Label for="jobreference">Job Reference:</Form.Label>
                                <Form.Control name ="jobreference" type="text" value= {jobref}  onChange={e => setJobref(e.target.value)} ref={register({ required: true })} placeholder="eg Job01"  />
                                {errors.jobreference && errors.jobreference.type === "required" && <span>A job reference is required!</span>}
                                                                                                                               
                            </Form.Group>

                            <Form.Group controlId="formBasicText2">
                                <Form.Label>Job Title:</Form.Label>
                                <Form.Control name ="jobtitle" type="text" value= {jobtitle}  onChange={e => setJobtitle(e.target.value)} ref={register({ required: true })} placeholder="eg Developer" />
                                {errors.jobtitle && errors.jobtitle.type === "required" && <span>A job title is required!</span>}

                            </Form.Group>

                            <Form.Group controlId="formBasicText3">
                                <Form.Label>Job Salary:</Form.Label>
                                <Form.Control name ="salary" type="number" value= {salary}  onChange={e => setSalary(e.target.value)} ref={register({ required: true })} placeholder="30000" />
                                {errors.salary && errors.salary.type === "required" && <span>Job salary is required!</span>}

                            </Form.Group>

                            <Form.Group controlId="formBasicText4">
                                <Form.Label>Location</Form.Label>
                                <Form.Control name ="location" type="text" value= {location}  onChange={e => setLocation(e.target.value)} ref={register({ required: true })} placeholder="eg Leeds" />
                                {errors.location && errors.location.type === "required" && <span>Job location is required!</span>}

                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Job Description:</Form.Label>
                                <Form.Control name ="jobdescription" as="textarea" rows="10" value= {jobdescription}  onChange={e => setJobdescription(e.target.value)} ref={register({ required: true })} />
                                {errors.jobdescription && errors.jobdescription.type === "required" && <span>Job description is required!</span>}

                                <br />           
                                <Button onClick={handleSubmit(onClick)} variant="primary" type="post" >
                                    Post
                                </Button>


                            </Form.Group>

       
                    </Form>
                
                </Col>
                
                

                <Col>

                <MyComponentClientUpdate/>
                
                </Col>

                <Col>
                    <Form style = {AddForm}>
                        <Form.Label><h3>&lt;Delete Vacancy/&gt;</h3></Form.Label>
        
                            <Form.Group controlId="formBasicText1">
                                <Form.Label>Job ID:</Form.Label>
                                <Form.Control type="text" value= {_id}  onChange={e => set_id(e.target.value)}placeholder="eg 5f188815..." />
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
