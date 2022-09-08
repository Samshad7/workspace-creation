import React, { useRef, useState } from "react";
import "./Select.css";
import {Link, useNavigate} from 'react-router-dom';

const Select = () => {
  const ref1=useRef();
  const ref2=useRef();
  const [tab1,setTab1]=useState(false);
  const [tab2,setTab2]=useState(false);
  const navigate=useNavigate();

  const selectOne=()=>{
    setTab1(true);
    console.log(tab1)
    console.log(ref1)
    setTab2(false);
    setTimeout(()=>{
      navigate("/congo");
    },2000);
  }
  const selectTwo=()=>{
    setTab2(true);
    console.log(tab2)
    console.log(ref2)
    setTab1(false);
    setTimeout(()=>{
      navigate("/congo");
    },2000);
    
  }
  return (
    <>
    <div className="select_main_container">
      <h1>How are you planning to use Eden?</h1>
      <p>We'll streamline your experience accordingly.  </p>
      <div className="select_container">
       
        <button className={`btn_select ${tab1?"active":""}`} ref={ref1} onClick={selectOne}>
          <div className="main_container">
            <div className="container">
              
              <h4>For myself</h4>
              <p>Write better. Think more clearly, Stay organized.</p>
            </div>
          </div>
        </button>
        
        
        <button className={`btn_select ${tab2?"active":""}`} ref={ref2} onClick={selectTwo} >
          <div className="main_container">
            <div className="container">
              
              <h4>With my team</h4>
              <p>Wikis, docs, tasks & projects, all in one place.</p>
            </div>
          </div>
        </button>
       
      </div>
      </div>
    </>
  );
};

export default Select;
