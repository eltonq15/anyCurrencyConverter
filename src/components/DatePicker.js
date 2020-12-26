import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import MomentUtils from "@date-io/moment";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

export default function DatePicker(props) {
  const muiTheme = createMuiTheme({
    palette: {
      primary: {
        light: "#000",
        main: "#00796e",
        dark: "#000",
      },
    },
  });

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
      <MuiThemeProvider theme={muiTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Grid container>
            <KeyboardDatePicker
              style={{ width: "100%" }}
              autoOk
              disableFuture
              margin="normal"
              id="date-picker-dialog"
              label={props.label}
              format="yyyy/MM/DD"
              value={props.value}
              onChange={props.onChange}
              inputVariant="outlined"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </div>
  );
}
