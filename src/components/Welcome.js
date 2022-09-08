import React,{createContext, useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Welcome.css";
import {Link, useNavigate, } from 'react-router-dom';


const Name=createContext();
const Welcome = () => {
  let history=useNavigate();
  
  const [fullName,setFullName]=useState('');
  const [dispName,setDispName]=useState('');
  const [details,setDetails]=useState({
    fName:'',
    dName:''
  })
 
  const onSubmit=(e)=>{
    e.preventDefault();
    if(fullName && dispName){
      setDetails({...details,fName:fullName,dName:dispName})
      history("/setup");
    }else{
      alert('Please provide your response in Full Name and Display Name.')
    }

    console.log(details)

    setFullName('');
    setDispName('');

      
   
  }

  return (
    <>
    <Name.Provider value={details.dName}>
      <div className="main_container">
        <div className="container">
          <h1>Welcome! First things first...</h1>
          <p>You can always change then later.</p>
          <form>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control input_ele"
                id="fullname"
                name="fullname"
                value={fullName}
                placeholder="Steve Jobs"
                onChange={e=>setFullName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="displayname" className="form-label">
                Display Name
              </label>
              <input
                type="test"
                className="form-control input_ele"
                id="displayname"
                value={dispName}
                name="displayname"
                placeholder="Steve"
                onChange={e=>setDispName(e.target.value)}
              />
            </div>
            
            <button type="submit" className="btn btn-primary input_ele" onClick={onSubmit}>
              Create Workspace
            </button>
            
          </form>
        </div>
      </div>
      </Name.Provider>
    </>
  );
};

export default Welcome;
export {Name};
