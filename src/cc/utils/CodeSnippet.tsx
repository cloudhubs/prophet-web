import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const CodeSnippet = ({ code, language, showLineNumbers }) => {
    code += " hello";
    return (
        <CodeBlock
            text={code}
            language={language}
            showLineNumbers={showLineNumbers}
            theme={dracula}
        />
    );
}
export default CodeSnippet;

