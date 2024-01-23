import React, { useState, useEffect } from "react";
import marked from "marked";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Function to convert markdown to HTML
    const convertToHtml = () => {
      setIsLoading(true);
      setHtml(marked(markdown));
      setIsLoading(false);
    };

    // Call the conversion function when the markdown content changes
    convertToHtml();
  }, [markdown]);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <div className="textarea">
        <h2>Markdown Input</h2>
        <textarea
          placeholder="Write your markdown here..."
          value={markdown}
          onChange={handleMarkdownChange}
        ></textarea>
      </div>

      <div className="preview">
        <h2>Markdown Preview</h2>
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    </div>
  );
};

export default App;
