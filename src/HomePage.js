import React, { useState } from 'react';
import { TextField, Button, FormControl } from '@material-ui/core';
import { useHistory } from "react-router-dom";

export default function ColorTextFields() {
    let history = useHistory();
    const [formData, setFormData] = useState({});

    const handleChange = (name, event) => {
        setFormData({ ...formData, [name]: event.target.value });
    };
    return (
        <div className="home-main">
            <div className="form-container">
                <form noValidate autoComplete="off">
                    <FormControl>
                        <TextField
                            id="outlined-primary"
                            label="User Name"
                            variant="outlined"
                            color="primary"
                            placeholder="Enter Your Name"
                            onChange={(event) => handleChange('username', event)}
                        />
                    </FormControl>
                    <FormControl>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => history.push('/calculator', { username: formData?.username })}
                        >
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </div>
        </div>
    );
}