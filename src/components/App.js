import React, { useState } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')

  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `

  return (
    <>
    <div className="panel top-panel">
      <Editor 
      language="xml" 
      displayName="HTML" 
      value={html} 
      onChange={setHtml}
      />
      <Editor 
      language="css" 
      displayName="CSS" 
      value={css} 
      onChange={setCss}
      />
      <Editor 
      language="javascript" 
      displayName="JS" 
      value={js} 
      onChange={setJs}
      />
    </div>
    <div className="panel bottom-panel">
      <iframe
      srcDoc = {srcDoc}
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
