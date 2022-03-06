import React, { useState } from "react";

import Editor from "cuvette-text-editor";

function TextEditor(props) {
  const initialValue = props.content;
  const [editorValue, setEditorValue] = useState(initialValue);

  return (
    <div>
      <Editor
        defaultValue={props.content}
        value={editorValue}
        onChange={(value) => setEditorValue(value)}
      />
    </div>
  );
}

export default TextEditor;