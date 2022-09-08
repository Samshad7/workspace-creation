import React, { useContext } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Cong.css';
import { Name } from "./Welcome";

const Congo = () => {

  const dname=useContext(Name);

  const onSubmit=()=>{
    console.log('Confirm');
  }

    const drag=<i className="fa-sharp fa-solid fa-circle-check"></i>;
  return (
    <>
      <div className="main_container">
        {/* <img src={drag} alt="basicright" /> */}
        <h1>Congratulations, {dname}!</h1>
        <p>You have completed onboarding, you can start using Eden!</p>
        <div class="d-grid gap-2 col-6 mx-auto container">
          <button class="btn btn-primary" type="button" onClick={onSubmit}>
            Launch Eden
          </button>
        </div>
      </div>
    </>
  );
};

export default Congo;
