import React, { useState } from "react";

const TextRecognition = () => {
  const [image, setImage] = useState(null);
  const [textData, setTextData] = useState([]);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const recognizeText = async () => {
    if (image) {
      const params = {
        Image: {
          Bytes: await image.arrayBuffer(),
        },
      };

      //const command = new DetectTextCommand(params);
      // const response = await client.send(command);
      //setTextData(response.TextDetections);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={recognizeText}>Recognize Text</button>
      <div>
        <h3>Recognized Text:</h3>
        <ul>
          {textData.map((text, index) => (
            <li key={index}>
              {text.DetectedText} (Confidence: {text.Confidence.toFixed(2)}%)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TextRecognition;
