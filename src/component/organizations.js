import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {add} from '../redux/slice'
import '../scssFiles/organizations.scss'
import { Organization } from "./organization";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Search, SearchIconWrapper, StyledInputBase } from './utils'
import { Form } from "./form";

export const Organizations = ({ }) => {

    //redux
    const organizationSelectot = useSelector((state) => state.organization.organizations)
    const dispatch = useDispatch()

    //state
    const [showAddNewOrganitationPart, setShowAddNewOrganitationPart] = useState(false)
    // const [allOrganizations, setAllOrganizations] = useState(JSON.parse(localStorage.getItem('allOrganizations' || [])))
    const [searchOrganization, setsearchOrganization] = useState('')

    //handale show or not the add organization part
    const clicked = () => {
        setShowAddNewOrganitationPart(!showAddNewOrganitationPart)

    }

    const addOrganization = (organization) => {
        // const newAllOrganizations = [...allOrganizations, organization]
        // setAllOrganizations(newAllOrganizations);
        // localStorage.setItem('allOrganizations', JSON.stringify(newAllOrganizations))
        localStorage.setItem('allOrganizations', JSON.stringify([...organizationSelectot,organization]))
        setShowAddNewOrganitationPart(false)
        dispatch(add(organization))
    }

    const search = (e) => {
        setsearchOrganization(e.target.value)
    }

    return (<div className="allPage">
        <div className="header" >
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static" sx={{ backgroundColor: 'white' }}>
                    <Toolbar >
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block', color: 'black' } }}
                             >
                           <b className="nameOfOrg"> All Organizations ( {organizationSelectot.length} )</b>
                        </Typography>
                        <Search sx={{ display: { xs: 'none', sm: 'block' } }}                            >
                            <SearchIconWrapper className="SearchIconWrapper">
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={search}
                            />
                        </Search>
                        <div className="flex-grow"></div>
                        <Button variant="contained" onClick={clicked}>Add new organization</Button>
                    </Toolbar>

                </AppBar>
            </Box>
        </div>
        {!showAddNewOrganitationPart ? <div></div> : <div>
            <Form addOrganization={addOrganization} />
        </div>}
        <div className="allOrganizationDivs">
            {organizationSelectot.map(item => {//allOrganizations
                console.log(item.name.includes(searchOrganization))
                if (item.name.includes(searchOrganization)) {
                    return (
                        <Organization item={item} />
                    )
                }
            })}
        </div>
    </div>)
}
