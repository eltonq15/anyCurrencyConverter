import React from "react";
import TextField from "@material-ui/core/TextField";

export default function NumberField(props) {
  const fieldStyleDesktop = {
    width: "100%",
    margin: " 28px 20px 0px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const fieldStyleMobile = {
    width: "90%",
    margin: " 028px 20px 0px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      style={
        window.matchMedia("(min-width: 800px)").matches
          ? fieldStyleDesktop
          : fieldStyleMobile
      }
    >
      <TextField
        id={props.id}
        label={props.label}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        variant="outlined"
        style={{ width: "100%" }}
      />
    </div>
  );
}
