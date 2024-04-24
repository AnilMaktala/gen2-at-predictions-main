import "./App.css";
import { generateClient } from "aws-amplify/api";
import { uploadData } from "aws-amplify/storage";
import React, { useState } from "react";

// Generating the client
const client = generateClient<Schema>();

function App() {
  // State to hold the recognized text
  const [textData, setTextData] = useState([]);

  // Function to handle file upload to S3 bucket
  const handleTranslate = async (event) => {
    try {
      // Uploading the file to the S3 bucket
      await uploadData({
        key: event.target.files[0], // The file to be uploaded
        data: "test1.png", // File name
      });
      console.log("Upload successful");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Function to recognize text from the uploaded image
  const recognizeText = async () => {
    // Identifying text in the uploaded image
    const data = await client.queries.identifyText({
      path: "test1.png", // File name
    });
    setTextData(data.data);
  };

  return (
    <div>
      <h1>Amazon Rekognition Text Recognition</h1>
      <div>
        <input type="file" onChange={handleTranslate} />
        <button onClick={recognizeText}>Recognize Text</button>
        <div>
          <h3>Recognized Text:</h3>
          {textData}
        </div>
      </div>
    </div>
  );
}

export default App;
