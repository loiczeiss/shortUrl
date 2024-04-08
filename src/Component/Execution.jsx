import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

function Execution() {
  const [inputvalue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState();
  // const [url, seturl] = useState("https://google.com");

  // async function callingAPI() {
  //   const backendUrl = 'http://localhost:3001'

  //   try {
  //     const response = await fetch(backendUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ url: url }),
  //     })
  //     const responseData = await response.json(); // Renamed variable to avoid shadowing
  //     setData(responseData); // Update the state with the fetched data
  //     console.log(responseData.result_url);
  
  //   } catch (error) {
  //     console.error('Failed to call backend: ', error)
  //   }
  // }


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    console.log(inputvalue);
    console.log(errorMsg);
  }, [inputvalue, errorMsg]);

  // const inputValidation = () => {
  //   if (!inputvalue) {
  //     setErrorMsg("Please enter a value.");
  //   } else {
  //     setErrorMsg("");
  //   }
  // };


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
    <div id="resultRightDiv">  <p id="resultShortUrl">{data.result_url}</p>
      <button id="resultButton">Copy</button></div>
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
