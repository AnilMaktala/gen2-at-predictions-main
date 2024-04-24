import React, { useState } from "react";

const Translation = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("es");

  const handleTranslate = async () => {
    try {
      const { data } = await client.queries.translate({
        sourceLanguage,
        targetLanguage,
        text,
      });
      setTranslatedText(data);
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  return (
    <>
      <div>
        <h1>Amazon Translate Demo</h1>
        <div>
          <label>Enter text to translate:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label>Source Language:</label>
          <select
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            {/* Add more languages as needed */}
          </select>
        </div>
        <div>
          <label>Target Language:</label>
          <select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option value="es">Spanish</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            {/* Add more languages as needed */}
          </select>
        </div>
        <button onClick={handleTranslate}>Translate</button>
        <div>
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      </div>
    </>
  );
};

export default Translation;
