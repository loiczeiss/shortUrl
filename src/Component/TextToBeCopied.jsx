import React from 'react'
import { useState, useEffect } from 'react';

function TextToBeCopied({data}) {
    const [isCopied, setIsCopied] = useState(false);
    const [copyText, setCopyText] = useState("")

    useEffect(() => {
        if (data && data.result_url) {
          setCopyText(data.result_url);
        }
      }, [data]);
    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
      
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
  
    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(copyText)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          console.log(copyText)
          console.log(navigator.clipboard.readText)
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
  return (
    <div id="resultRightDiv" >  <a href={data.result_url}  id="resultShortUrl">{data.result_url}</a>
    <button id="resultButton" onClick={handleCopyClick}> <span>{isCopied ? 'Copied!' : 'Copy'}</span></button></div>
  )
}

export default TextToBeCopied