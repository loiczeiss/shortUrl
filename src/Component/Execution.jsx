import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import TextToBeCopied from "./TextToBeCopied";

function Execution() {
  const [inputvalue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState();



  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    console.log(inputvalue);
    console.log(errorMsg);
  }, [inputvalue, errorMsg]);

 

  async function handleFormSubmission() {
    if (!inputvalue) {
      setErrorMsg("Please enter a value.");
      return; // Exit the function if input value is empty
    }
  
    try {
      const backendUrl = 'http://localhost:3001';
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: inputvalue }),
      });
      const responseData = await response.json();
      setData(responseData);
      console.log(responseData.result_url);
      console.log(inputvalue)
      setErrorMsg(""); // Clear error message on successful API call
    } catch (error) {
      console.error('Failed to call backend: ', error);
      setErrorMsg("Failed to call backend.");
    }
  }
  
  return (
    <div className="executionDiv">
      <section id="inputSection">
        <div id="inputMsgDiv">
          {" "}
          <input
            type="text"
            name="link"
            id="linkInput"
            value={inputvalue}
            onChange={handleInputChange}
            placeholder="Shorten a link here..."
          />
          <p id="linkParagraph">{errorMsg}</p>
        </div>
        <button id="linkButton" onClick={handleFormSubmission}>
          Shorten it!
        </button>
      </section>

  { data  &&  <section id="resultSection">
      <div id="resultFullDiv">
        <p id="resultFullUrl">{inputvalue}</p>
      </div>
  <TextToBeCopied data={data}/>
    </section>}
    {/* <section id="resultSection">
      <div id="resultFullDiv">
        <p id="resultFullUrl">frontendmentor.celjkfe</p>
      </div>
    <div id="resultRightDiv">  <p id="resultShortUrl">httpseferf</p>
      <button id="resultButton">Copy</button></div>
    </section> <section id="resultSection">
      <div id="resultFullDiv">
        <p id="resultFullUrl">frontendmentor.celjkfe</p>
      </div>
    <div id="resultRightDiv">  <p id="resultShortUrl">httpseferf</p>
      <button id="resultButton">Copy</button></div>
    </section> */}
    </div>
  );
}

export default Execution;
