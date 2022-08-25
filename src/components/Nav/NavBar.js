import {
    Button, Card, ClickAwayListener, Container, ListItem,
    ListItemIcon,
    ListItemText, MenuItem, MenuList, Paper, Popper, Stack, Toolbar,
    Typography
} from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsTranslate } from 'react-icons/bs'
import { FaArrowRight, FaPhoneSquareAlt } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io"
import { MdKeyboardArrowDown } from "react-icons/md"
import { Link as RouterLink, useLocation } from 'react-router-dom'
import ListLink from './ListLink'
import "./NavBar.css"
import NavButton from './NavButton'
import { routes } from "./routes"


//TODO: fix pathing for ListItemLink's
const NavBar = () => {
    const location = useLocation()

    /*
    React.useEffect(() => {
        if (location.pathname === "/"){
            setNavColor('#FFFFFF')
        } else {
            setNavColor('#CDF3FD')
        }
    }, [location])

    
    */


    return (
        <React.Fragment>
            <nav className="nav nav-top">
                {/*<Grid container sx={{ paddingTop: '1.8em', paddingBottom: '1em', backgroundColor: navColor }}>
                    <Grid item xs={6} justifyContent="center">
                        <Typography variant="h6" align="center">
                            <RouterLink to="/">
                                <img src="assets/img/LabQ-Logo-1.svg" style={{ width: '50%' }} />
                            </RouterLink>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        
                    </Grid>
                </Grid>*/ }
                <div className='container-lg'>
                    {/* TODO: Phone # & Icon need hover; Languages need hover */}
                    <div className='nav-top-left'>
                        <a className='nav-top-link' href='tel:(888)LABQ-247'>
                            <FaPhoneSquareAlt style={{ padding: '.25em .5em' }} />
                            (888) LABQ-247
                        </a>
                        <AiOutlineClockCircle style={{ padding: '.25em .5em', color: '#1C75BC', marginLeft: '.8em', alignItems: 'center' }} />
                        24/7
                    </div>
                    
                    <div className='nav-top-right'>
                        <NavButton
                            primary='Portal Login'
                            dropdownLinks={[
                                {
                                    to: '/',
                                    primary: 'PATIENT PORTAL'
                                },
                                {
                                    to: '/',
                                    primary: 'DOCTORS PORTAL'
                                }
                            ]}
                        />
                        <a className='nav-top-link' href='#'>
                            <BsTranslate style={{ fontSize: '1em', padding: '0em .25em'}} />
                            <span style={{ fontWeight: 'bold', margin: '0 .25em'}}>
                                ES
                            </span>
                        </a>
                        <span style={{ fontWeight: 'bold', margin: '0 .5em' }}>
                            EN
                        </span>
                    </div>
                </div>
                <Container>
                    <Toolbar sx={{ padding: '0.5em', backgroundColor: '#FFFFFF' }}>
                        <RouterLink to="/" style={{ width: '15%', marginRight: '3em' }}>
                            <img src="assets/img/LabQ-Logo-1.svg" style={{ width: '100%' }} />
                        </RouterLink>
                        <>
                            <Button
                                id="patient-button"
                                aria-controls={openPatient ? "patient-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={openPatient ? "true" : undefined}
                                onClick={handleToggle}
                                style={{
                                    textTransform: "none",
                                    color: "#000000",
                                    marginRight: "20px",
                                    fontSize: "1em",
                                    '&:hover': {
                                        borderBottom: '1',
                                        borderBottomColor: '#000000'
                                    }
                                }}
                            >
                                Patient &nbsp;<MdKeyboardArrowDown />
                            </Button>
                            <Popper
                                anchorEl={anchor}
                                open={openPatient}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            id="patient-menu"
                                            aria-labelledby="patient-button"
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/"
                                                    primary="Patient Portal"
                                                />
                                            </MenuItem>
                                            {/* Needs to be another menu */}
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/"
                                                    primary="Locations"
                                                />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/tests"
                                                    primary="Tests"
                                                />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/appointment"
                                                    primary="Appointment"
                                                />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/insurance"
                                                    primary="Insurance"
                                                />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/billing"
                                                    primary="Billing"
                                                />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/"
                                                    primary="Pay your Bill"
                                                />
                                            </MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Popper>
                        </>
                        <>
                            <Button
                                id="doctor-button"
                                aria-controls={openDoctor ? "doctor-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={openDoctor ? "true" : undefined}
                                onClick={handleToggle}
                                style={{
                                    textTransform: "none",
                                    color: "#000000",
                                    marginRight: "20px",
                                    fontSize: "1em",
                                    '&:hover': {
                                        borderBottom: '1',
                                        borderBottomColor: '#000000'
                                    }
                                }}
                            >
                                Doctor &nbsp;<MdKeyboardArrowDown />
                            </Button>
                            <Popper
                                anchorEl={anchor}
                                open={openDoctor}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            id="doctor-menu"
                                            aria-labelledby="doctor-button"
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/forms"
                                                    primary="Forms"
                                                />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/insurance"
                                                    primary="Insurance"
                                                />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/supplies"
                                                    primary="Supplies"
                                                />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/tests"
                                                    primary="Tests"
                                                />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/"
                                                    primary="Doctors Portal"
                                                />
                                            </MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Popper>
                        </>
                        <ListItemLink
                            to="/services"
                            primary="Services"
                        />
                        <>
                            <Button
                                id="about-button"
                                aria-controls={openAbout ? "about-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={openAbout ? "true" : undefined}
                                onClick={handleToggle}
                                style={{
                                    textTransform: "none",
                                    color: "#000000",
                                    marginRight: "20px",
                                    fontSize: "1em",
                                    '&:hover': {
                                        borderBottom: '1',
                                        borderBottomColor: '#000000'
                                    }
                                }}
                            >
                                About &nbsp;<MdKeyboardArrowDown />
                            </Button>
                            <Popper
                                anchorEl={anchor}
                                open={openAbout}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            id="about-menu"
                                            aria-labelledby="about-button"
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/about"
                                                    primary="About Us"
                                                />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/about/accreditation-licensing"
                                                    primary="Accredition & Licensing"
                                                />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemLink
                                                    to="/news"
                                                    primary="News"
                                                />
                                            </MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Popper>
                        </>
                        <ListItemLink
                            to="/careers"
                            primary="Careers"
                        />
                        <ListItemLink
                            to="/contact-us"
                            primary="Contact"
                        />
                        <Button variant='outlined'>
                            Covid-19 Testing &nbsp;<FaArrowRight />
                        </Button>
                    </Toolbar>
                </Container>
            </Card>
            <div>
                {routes()}
            </div>
        </React.Fragment>
    )
}

export default NavBar