import React, { useEffect, useState } from "react";
import Axios from "axios";

const Convert = ({ language, term }) => {
  const [translation, setTranslation] = useState("");

  useEffect(() => {
    const translatePhrase = async () => {
      const response = await Axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: term,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      console.log(response);
      setTranslation(response.data.data.translations[0].translatedText);
      console.log(translation);
    };
    const timeoutId = setTimeout(() => {
      if (term) {
        translatePhrase();
      }
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [language, term]);

  return (
    <div>
      <h2>{translation}</h2>
    </div>
  );
};

export default Convert;
