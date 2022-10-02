import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from "prop-types";

import styles from "./index.module.scss";

function InputSearch({onChange, value}) {
    return (
        <div className={styles.InputSearch}>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    value={value}
                    id="outlined-search"
                    label="Search pokemon"
                    type="search"
                    onChange={onChange}
                />
            </div>
        </Box>
        </div>
    );
}

InputSearch.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default InputSearch;