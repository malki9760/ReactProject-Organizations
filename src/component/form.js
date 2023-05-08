import { useState, useRef } from "react";
import '../scssFiles/form.scss'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export const Form = ({ addOrganization }) => {

    const [organization, setOrganization] = useState({
        name: '',
        tracking: { inUse: 0, assigned: 0 },
        protction: { inUse: 0, assigned: 8 },
        logo:''
    });

    const changeNameValue = (e) => {
        const newObj = { ...organization };
        newObj.name = e.target.value;
        setOrganization(newObj);
    }

    const changeTrackingInUseValue = (e, key) => {
        const newObj = { ...organization };
        const newOk = { ...newObj.tracking }
        newOk[key] = e.target.value;
        newObj.tracking = newOk
        setOrganization(newObj);
    }

    const changeProtctionAssignedValue = (e, key) => {
        const newObj = { ...organization };
        const newOk = { ...newObj.protction }
        newOk[key] = e.target.value;
        newObj.protction = newOk
        setOrganization(newObj);
    }

    const newOrganization = () => {
        addOrganization(organization)
        resetOrganization()
    }

    const resetOrganization = () => {
        setOrganization({
            name: '',
            tracking: { inUse: 0, assigned: 0 },
            protction: { inUse: 0, assigned: 0 },
            logo: ''
        })
    }

    const hiddenFileInput = useRef(null);

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };
    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        
        console.log(fileUploaded);
    };

    return (
        <div>
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <div className="formDiv">
                    <div className="input">
                        <TextField
                            required
                            id="organization.name"
                            label="organization name"
                            defaultValue=""
                            onChange={changeNameValue}
                        // className="input"
                        />
                    </div>
                    <div className="input">
                        <TextField
                            required
                            id="organization.tracking.inUse"
                            label="tracking in use"
                            type="number"
                            defaultValue=""
                            onChange={(e) => changeTrackingInUseValue(e, 'inUse')}
                        // className="input"
                        />
                    </div>
                    <div className="input">
                        <TextField
                            required
                            id="organization.tracking.assigned"
                            label="tracking assigned"
                            type="number"
                            defaultValue=""
                            onChange={(e) => changeTrackingInUseValue(e, 'assigned')}
                        // className="input"
                        />
                    </div>
                    <div className="input">
                        <TextField
                            required
                            id="organization.protction.inUse"
                            label="protction in use"
                            type="number"
                            defaultValue=""
                            onChange={(e) => changeProtctionAssignedValue(e, 'inUse')}
                        // className="input"
                        />
                    </div>
                    <div className="input">
                        <TextField
                            required
                            id="organization.protction.assigned"
                            label="protction assigned"
                            type="number"
                            defaultValue=""
                            onChange={(e) => changeProtctionAssignedValue(e, 'assigned')}
                        // className="input"
                        />
                    </div>
                    <div className="input">
                        <Button onClick={handleClick}>
                            Upload a file
                        </Button>
                        <input
                            type="file"
                            ref={hiddenFileInput}
                            onChange={handleChange}
                            style={{ display: 'none' }} 
                        />
                    </div>
                    <div className="formButton">
                        <Button variant="contained" className='newOrganizationButton' onClick={newOrganization}>Add</Button>

                    </div>
                </div>
            </Box>
        </div>
    )
}