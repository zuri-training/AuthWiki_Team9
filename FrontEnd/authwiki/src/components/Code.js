import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import styled from "styled-components";

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <CodeStyle>
      <div className="Code" style={{ backgroundColor: "red" }}>
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </CodeStyle>
  );
}

const CodeStyle = styled.div`
  background-color: "red";
`;
