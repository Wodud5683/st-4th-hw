import { useState, useEffect } from "react";
import TextInput from "./components/TextInput";

function App() {
  // 로컬 스토리지에서 초기 상태 가져오기
  const [texts, setTexts] = useState(() => {
    const savedTexts = localStorage.getItem("texts");
    return savedTexts ? JSON.parse(savedTexts) : [];
  });

  useEffect(() => {
    // 상태가 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput onAddText={onAddText} />
      <ul>
        {texts.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
