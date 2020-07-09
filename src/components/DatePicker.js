import React from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

export default function DatePicker(props) {

    const muiTheme = createMuiTheme({

        palette: {
            primary: {
                light: '#000',
                main: '#000',
                dark: '#000'
            }
        }
    });

    return (
        <MuiThemeProvider theme={muiTheme}>
            <MuiPickersUtilsProvider utils={MomentUtils} >
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                    style={ {width: '300px'} }
                    autoOk
                    margin="normal"
                    id="date-picker-dialog"
                    label={props.label}
                    format="yyyy/MM/DD"
                    value={props.value}
                    onChange={props.onChange}
                    inputVariant='outlined'
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                </Grid>
            </MuiPickersUtilsProvider >
        </MuiThemeProvider >
    );
};