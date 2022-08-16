import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { MdOutlineContentCopy } from "react-icons/md";
import styled from "styled-components";
import { toast } from "react-toastify";

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <CSS>
      <div className="Code">
        <pre>
          <MdOutlineContentCopy
            size="20px"
            className="copy"
            onClick={() => {
              navigator.clipboard.writeText(code);
              toast.success("Copied To Clipboard");
              return;
            }}
          />
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </CSS>
  );
}

const CSS = styled.div`
  .Code {
    position: relative;
  }
  .copy {
    position: absolute;
    right: 20px;
    cursor: pointer;
  }
`;
