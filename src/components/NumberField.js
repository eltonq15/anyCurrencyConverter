import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

export default function NumberField(props) {

    return (
        <div style={{padding: '20px'}}>
            <TextField
                id={props.id}
                label={props.label}
                type={props.type}
                value={props.value}
                InputLabelProps={{
                    shrink: true
                }}
                onChange={props.onChange}
                variant='outlined'
                style={{ width: '300px' }}
            />
        </div>
    )
};
