import React, { useState } from "react";
import Header from "./Header";
import Editor from "./Editor";
import Preview from "./Preview";
import Footer from "./Footer";
import marked from "marked";
import { placeholder } from "./placeholder";

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}> </a>`;
};

function App() {
  const [text, setText] = useState(placeholder);

  const handleChange = e => {
    e.persist();
    setText(() => e.target.value);
  };

  const setInnerHTML = () => {
    return marked(text, { renderer: renderer });
  };
  return (
    <div style={{ width: "80vw", margin: "0 auto" }}>
      <Header />
      <main className="ed-prev-box">
        <Editor value={text} onChange={handleChange} />
        <Preview value={text} setHTML={setInnerHTML()} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
