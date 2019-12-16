import React from "react";

const Editor = props => {
  const style = {
    backgroundColor: "#ddd",
    color: "#000",
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 600
  };
  return (
    <textarea
      style={style}
      id="editor"
      onChange={props.onChange}
      className="editor"
      value={props.value}
      type="text"
      cols="10"
      rows="5"
    />
  );
};

export default Editor;
