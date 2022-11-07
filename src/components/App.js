import React, { useState } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState('')
  return (
    <>
    <div className="panel top-panel">
      <Editor 
      language="xml" 
      displayName="HTML" 
      value={html} 
      onChange={setHtml}
      />
      <Editor />
      <Editor />
    </div>
    <div className="panel bottom-panel">
      <iframe
      title="output"
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"
      />
    </div>
    </>
  )

}

export default App;
