import React, { useEffect, useState } from 'react'
import "../App.css"
function Execution() {

const [inputvalue, setInputValue] = useState("")
const [errorMsg, setErrorMsg] = useState("")
const [data, setData] = useState(null);
const [url, seturl] = useState('https://google.com')
useEffect(() => {
    fetch('https://cleanuri.com/api/v1/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'url': url
        })
    })
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error));
    console.log(data)
}, []);
const handleInputChange = (event) => {
    setInputValue(event.target.value);


  
  };
  useEffect(() => {
   console.log(inputvalue); console.log(errorMsg)
  
  }, [inputvalue, errorMsg])

  const inputValidation=()=>{

    if (!inputvalue){
        setErrorMsg("Please enter a value.");
    } else {
      setErrorMsg("");
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
      <button id="linkButton" onClick={inputValidation}>Shorten it!</button>
    </section>
    {/* <section id="resultSection">
      <div id="resultFullDiv">
        <p id="resultFullUrl">frontendmentor.celjkfe</p>
      </div>
    <div id="resultRightDiv">  <p id="resultShortUrl">httpseferf</p>
      <button id="resultButton">Copy</button></div>
    </section>
    <section id="resultSection">
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
  )
}

export default Execution