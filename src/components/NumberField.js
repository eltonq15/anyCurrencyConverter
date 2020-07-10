import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function NumberField(props) {

    return (
        <div style={{margin: '25px'}}>
            <TextField
                id={props.id}
                label={props.label}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                variant='outlined'
                style={{ width: '250px' }}
            />
        </div>
    )
};
