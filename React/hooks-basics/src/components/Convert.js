import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState("text");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 600);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      ); // Url, body data, queries

      setTranslated(data.data.translations[0].translatedText);
    }; // Helper function

    doTranslation(); // Calling helper function
  }, [language, debouncedText]); // Every time that we got one new this functions runs

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
