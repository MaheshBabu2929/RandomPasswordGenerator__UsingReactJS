import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Password() {
  const [length, setLength] = useState(4);
  const [isNumbersAllowed, setNumbersAllowed] = useState(false);
  const [isSpecialCharactersAllowed, setSpecialCharactersAllowed] =useState(false);
  const [password,setPassword]=useState('sample');

  useEffect(     
    function generatePassword()
  {
    let str="abcdefghijklmnopqrstABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(isNumbersAllowed) str+="0123456789";
    if(isSpecialCharactersAllowed) str+="!@#$%^&*()[]{}+";
    let newPassword="";
    for(let i=0;i<length;i++)
    {
        newPassword+=str[Math.floor(Math.random()*str.length)];
    }
    setPassword(newPassword);
  }
    
     ,

    [length,isNumbersAllowed,isSpecialCharactersAllowed]
  );


  return (
    <div className="container mt-5">
      <div className="card">
        <h1 className="text-center text-success pt-5">Password Generator</h1>
        <form className="m-5">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={password}
            />
            <button className="btn btn-danger">generate</button>
          </div>
          <div className="mt-3">
            <div className="d-flex gap-3 align-items-center">
              <input
                type="range"
                min={4}
                max={30}
                onChange={(e)=>{setLength(e.target.value)}}
              />
              <span>Length : {length}</span>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="numbers"
                  className="form-check-input"
                  onClick={(e)=>{setNumbersAllowed(!isNumbersAllowed)}}
                  value={isNumbersAllowed}
                />
                <label htmlFor="numbers">Numbers</label>   
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="special"
                  onClick={(e)=>{setSpecialCharactersAllowed(!isSpecialCharactersAllowed)}}
                  value={isSpecialCharactersAllowed}
                 />
                <label htmlFor="special">Special Characters</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Password;