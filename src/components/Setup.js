import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Setup.css";
import {Link, useNavigate} from 'react-router-dom';

const Setup = () => {
  const navigate=useNavigate();
  const [workName,setWorkName]=useState('');
  const [url,setUrl]=useState('');
  const [WorkDetails,setWorkDetails]=useState({
    wName:'',
    wUrl:''
  });

  const onSubmit=(e)=>{
    e.preventDefault();
    if(workName && url){
      setWorkDetails({...WorkDetails,wName:workName,wUrl:url})
      navigate("/select");
    }else{
      alert('Please provide your response in each box.')
    }
    setWorkName('');
    setUrl('');
  }
  return (
    <>
      <div className="main_container">
        <h1>Let's setup home for all your work</h1>
        <p>You can always change then later.</p>
        <div className="container">
          <form>
            <div className="mb-3">
              <label htmlFor="workspacename" className="form-label">
                Workspace Name
              </label>
              <input
                type="text"
                className="form-control input_ele"
                value={workName}
                name='workName'
                id="fullname"
                placeholder="Eden"
                onChange={e=>setWorkName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="basic-url" className="form-label">
                Workspace URL <span className="optional_text">(optional)</span>
              </label>
              <div className="input-group mb-3 input_ele">
                <span className="input-group-text" id="basic-addon3">
                  www.eden.com/
                </span>
                <input
                  type="text"
                  className="form-control"
                  value={url}
                  name="url"
                  id="basic-url"
                    placeholder="Example"
                    onChange={e=>setUrl(e.target.value)}
                />
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary input_ele" onClick={onSubmit}>
              Create Workspace
            </button>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Setup;
