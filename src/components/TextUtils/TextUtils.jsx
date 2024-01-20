import React, { useState } from "react";

const TextUtils = () => {
  const [text, setText] = useState("");
  const [livePreviewText, setLivePreviewText] = useState("");

  const handleOnChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setLivePreviewText(newText);
  };

  const handleUpClick = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
    setLivePreviewText(upperCaseText);
  };

  const handleLowerClick = () => {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
    setLivePreviewText(lowerCaseText);
  };

  const handleClearClick = () => {
    setText("");
    setLivePreviewText("");
  };

  const copyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text);
  };

  const removeExtra = () => {
    const trimmedText = text.replace(/\s+/g, " ").trim();
    setText(trimmedText);
    setLivePreviewText(trimmedText);
  };

  const dummyData = () => {
    let dummyTest =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias, exercitationem ut deleniti ducimus totam hic fugiat minus quibusdam iste. Modi ipsum, dignissimos perspiciatis excepturi nobis sint commodi numquam cumque enim vel, minus impedit.";
    setText(dummyTest);
    setLivePreviewText(dummyTest);
  };
  const buttonStyle =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2";

  return (
    <>
      <div className="m-5">
        <div>
          <h1>
            <center>Enter the text below</center>
          </h1>

          <textarea
            className="block mb-3 p-2 rounded-lg border border-blue-500"
            placeholder="Type here"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            cols="150"
          ></textarea>

          <button className={buttonStyle} onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className={buttonStyle} onClick={handleLowerClick}>
            Convert to Lowercase
          </button>
          <button className={buttonStyle} onClick={handleClearClick}>
            Clear text Area
          </button>
          <button className={buttonStyle} onClick={copyText}>
            Copy text
          </button>
          <button className={buttonStyle} onClick={removeExtra}>
            Remove extra space
          </button>
          <button className={buttonStyle} onClick={dummyData}>
            Create dummy data
          </button>
        </div>

        <hr />

        <div className="m-5 center">
          <h1>Live Preview</h1>
          <textarea
            placeholder="Live Preview available here"
            className="mt-5 text-gray-500"
            value={livePreviewText}
            onChange={handleOnChange}
            cols="150"
            disabled
          ></textarea>
        </div>
        <div className="mt-5">
          <h3 className="mb-3">Summery</h3>
          <p>Words: {text.split(" ").length - 1}</p>
          <p>Characters: {text.length} </p>
          <p>Avrage reading time :{text.length / 1000} min</p>
        </div>
      </div>
    </>
  );
};

export default TextUtils;
