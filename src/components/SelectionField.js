import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


const divStyle = {
    padding: '20px'
}

export default function SelectionField(props) {

    return (
        <div style={divStyle}>
            <FormControl variant="outlined">
                <InputLabel>{props.label}</InputLabel>
                <Select
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    label={props.label}
                    name={props.name}
                    style={{ width: "300px" }}
                >
                    <MenuItem value="" style={{ width: '300px' }}>
                        <em>Not selected</em>
                    </MenuItem>
                    {props.symbols.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
};