import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

export default function SelectionField(props) {
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
    <FormControl
      variant="outlined"
      style={
        window.matchMedia("(min-width: 800px)").matches
          ? fieldStyleDesktop
          : fieldStyleMobile
      }
    >
      <InputLabel>{props.label}</InputLabel>
      <Select
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        label={props.label}
        name={props.name}
        style={{ width: "100%" }}
      >
        <MenuItem value="" style={{ width: "100%" }}>
          <em>Not selected</em>
        </MenuItem>
        {props.symbols.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
