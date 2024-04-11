import React, { useEffect, useState } from "react";
import "../App.css";

import TextToBeCopied from "./TextToBeCopied";

function Execution() {
  const [link, setLink] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [links, setLinks] = useState([]);

  const handleInputChange = (event) => {
    setLink(event.target.value);
  };

  useEffect(() => {
    const storageData = sessionStorage.getItem("data");
    if (storageData) {
      try {
        setLinks(JSON.parse(storageData));
      } catch (error) {
        console.error("Error parsing storage data: ", error);
        sessionStorage.removeItem("data");
      }
    }
  }, []);

  async function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission behavior
 // Regular expression pattern for URL validation
 const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

 if (!link) {
   setErrorMsg("Please enter a value.");
   return; // Exit the function if input value is empty
 }

 if (!urlPattern.test(link)) {
   setErrorMsg("Please enter a valid URL.");
   return; // Exit the function if input value is not a valid URL
 }


    try {
      const backendUrl = "https://short-url-api-theta.vercel.app/";
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: link }),
      });
      const data = await response.json();
      
      const updatedLinks = [
        ...links,
        {
          userLink: link,
          shortLink: data.result_url,
        },
      ];
      setLinks(updatedLinks);
      sessionStorage.setItem("data", JSON.stringify(updatedLinks));
      setLink("");
      setErrorMsg(""); // Clear error message on successful API call
    } catch (error) {
      console.error("Failed to call backend: ", error);
      setErrorMsg("Failed to call backend.");
    }
  }

  return (
    <div className="executionDiv">
      <form onSubmit={handleFormSubmission} id="inputSection">
        {" "}
        <div id="inputMsgDiv">
          {" "}
          <input
            type="text"
            name="link"
            id="linkInput"
            value={link}
            onChange={handleInputChange}
            placeholder="Shorten a link here..."
          />
          <p id="linkParagraph">{errorMsg}</p>
        </div>
        <button id="linkButton">Shorten it!</button>
      </form>

     
        <section id="resultSection">
          {links.map((link, index) => (
            <TextToBeCopied key={index} link={link}  />
          ))}
        </section>

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
