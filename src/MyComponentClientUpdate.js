import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddForm  = {
    marginLeft: '20%',
    marginRight:'20%',
    
  };


export function MyComponentClientUpdate() {


const [jobrefedit, setJobrefedit] = useState("");
const [jobtitleedit, setJobtitleedit] = useState("");
const [salaryedit, setSalaryedit] = useState("");
const [locationedit, setLocationedit] = useState("");
const [jobdescriptionedit, setJobdescriptionedit] = useState("");
const[_idEdit, set_idEdit] = useState("");
const { register, handleSubmit, errors } = useForm();

function onClickFindEdit() {

    fetch(`${process.env.REACT_APP_APIHOST}/api/vacs/` +_idEdit)
      .then(response => response.json())
      .then((result) => {setJobrefedit(result[0].jobref) 
        setJobtitleedit(result[0].jobtitle) 
        setSalaryedit(result[0].salary)
        setLocationedit(result[0].location)
        setJobdescriptionedit(result[0].jobdescription)
    } )
      .catch(error => console.log('error', error));


};

function onClickEdit(event) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({jobref:jobrefedit, jobtitle:jobtitleedit, salary:salaryedit, location:locationedit, jobdescription:jobdescriptionedit});
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    console.log(raw);

    fetch(`${process.env.REACT_APP_APIHOST}/api/vacs/` +_idEdit, requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result)
        window.location.reload()})
      .catch(error => console.log('error', error));
    
};

return (
    <div>


              

                <Form style = {AddForm}>
                        <Form.Label><h3>&lt;Find & Edit Vacancy/&gt;</h3></Form.Label>
        
                            <Form.Group controlId="formBasicText1">
                                <Form.Label>Job ID:</Form.Label>
                                <Form.Control type="text" value= {_idEdit}  onChange={e => set_idEdit(e.target.value)}placeholder="eg 5f188815..." />
                                <br />           
                                <Button onClick={onClickFindEdit} variant="primary" type="button" >
                                    Find
                                </Button>
                            </Form.Group>

                            

       
                    </Form>
                    <br />

                    <Form style = {AddForm}>
                        <Form.Label><h3>&lt;Update Vacancy/&gt;</h3></Form.Label>
        
                            <Form.Group controlId="formBasicText1">
                                <Form.Label>Job Reference:</Form.Label>
                                <Form.Control name ="jobrefedit" type="text" value= {jobrefedit}  onChange={e => setJobrefedit(e.target.value)} ref={register({ required: true })} placeholder="eg Job01" />
                                {errors.jobrefedit && errors.jobrefedit.type === "required" && <span>Job ref edit not completed!</span>}

                            </Form.Group>

                            <Form.Group controlId="formBasicText2">
                                <Form.Label>Job Title:</Form.Label>
                                <Form.Control name ="jobtitleedit" type="text" value= {jobtitleedit}  onChange={e => setJobtitleedit(e.target.value)} ref={register({ required: true })} placeholder="eg Developer" />
                                {errors.jobtitleedit && errors.jobtitleedit.type === "required" && <span>Job title edit not completed!</span>}

                            </Form.Group>

                            <Form.Group controlId="formBasicText3">
                                <Form.Label>Job Salary:</Form.Label>
                                <Form.Control name= "salaryedit" type="number" value= {salaryedit}  onChange={e => setSalaryedit(e.target.value)} ref={register({ required: true })} placeholder="30000" />
                                {errors.salaryedit && errors.salaryedit.type === "required" && <span>Job salary edit not completed!</span>}

                            </Form.Group>

                            <Form.Group controlId="formBasicText4">
                                <Form.Label>Location</Form.Label>
                                <Form.Control name= "locationedit" type="text" value= {locationedit}  onChange={e => setLocationedit(e.target.value)} ref={register({ required: true })} placeholder="eg Leeds" />
                                {errors.locationedit && errors.locationedit.type === "required" && <span>Job location edit not completed!</span>}

                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Job Description:</Form.Label>
                                <Form.Control name="jobdescriptionedit" as="textarea" rows="10" value= {jobdescriptionedit}  onChange={e => setJobdescriptionedit(e.target.value)} ref={register({ required: true })} />
                                {errors.jobdescriptionedit && errors.jobdescriptionedit.type === "required" && <span>Job location edit not completed!</span>}
                                

                                <br />           
                                <Button onClick={handleSubmit(onClickEdit)}  variant="primary" type="update" >
                                    Update
                                </Button>
                                


                            </Form.Group>

       
                    </Form>
                
                
                
                
                 
             
    
      

    </div>
  );
}
