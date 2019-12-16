import React from "react"

const Preview = props => {
  const style = {
    backgroundColor: "#eee",
    color: "green",
    padding: 10,
    borderRadius: 10
  };

  return (
    <div
      id="preview"
      style={style}
      dangerouslySetInnerHTML={{__html: props.setHTML}}
    />
  );
};

export default Preview;
