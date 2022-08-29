import React, { useState } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsTelephonePlusFill, BsTranslate } from 'react-icons/bs'
import { FaArrowRight, FaPhoneSquareAlt } from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io"
import { MdKeyboardArrowDown } from "react-icons/md"
import { useLocation } from 'react-router-dom'
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
            <nav className="navbar nav-top">
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
                    <div className='nav nav-top-left'>
                        <a className='nav-top-link' href='tel:(888)LABQ-247'>
                            <FaPhoneSquareAlt style={{ padding: '0em .25em', fontSize: '2em'}} />
                            (888) LABQ-247
                        </a>
                        <AiOutlineClockCircle style={{ padding: '0em .25em', fontSize: '2.5em', color: '#1C75BC', marginLeft: '.8em', alignItems: 'center' }} />
                        24/7
                    </div>
                    
                    <div className='nav nav-top-right'>
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
                            style={{color: '#FFF'}}
                        />
                        <a className='nav-top-link' href='#'>
                            <BsTranslate style={{ fontSize: '2em', padding: '0em .25em'}} />
                            <span style={{ fontWeight: 'bold', margin: '0 .25em'}}>
                                ES
                            </span>
                        </a>
                        <span style={{ fontWeight: 'bold', margin: '0 .5em', color: '#FFF' }}>
                            EN
                        </span>
                    </div>
                </div>
            </nav>
            <nav className='navbar nav-bottom'>
                <div className='container-lg'>
                    <a className='navbar-brand' href='/' style={{width: '13%'}}>
                        <img src="assets/img/LabQ-Logo-1.svg" style={{ width: '100%' }} />
                    </a>
                    <div className='d-flex align-items-center justify-content-center'>
                        <NavButton 
                            primary='Patient'
                            dropdownLinks={[
                                {
                                    to: '/',
                                    primary: 'Patient Portal'
                                },
                                {
                                    to: '/',
                                    primary: 'Locations',
                                    dropdownLinks: [
                                        {
                                            to: '/covid-mobile-testing',
                                            primary: 'Covid Testing'
                                        },
                                        {
                                            to: '/locations',
                                            primary: 'Lab Locations'
                                        }
                                    ]
                                },
                                {
                                    to: '/tests',
                                    primary: 'Tests'
                                },
                                {
                                    to: '/appointment',
                                    primary: 'Appointment'
                                },
                                {
                                    to: '/insurance',
                                    primary: 'Insurance'
                                },
                                {
                                    to: '/billing',
                                    primary: 'Billing'
                                },
                                {
                                    to: "/",
                                    primary: "Pay your Bill"
                                }
                            ]}
                        />
                        <NavButton
                            primary='Doctor'
                            dropdownLinks={[
                                {
                                    to: '/forms',
                                    primary: 'Forms'
                                },
                                {
                                    to: '/insurance',
                                    primary: 'Insurance'
                                },
                                {
                                    to: '/supplies',
                                    primary: 'Supplies'
                                },
                                {
                                    to: '/tests',
                                    primary: 'Tests'
                                },
                                {
                                    to: '/',
                                    primary: "Doctors Portal"
                                }
                            ]}
                        />
                        <NavButton
                            to="/services"
                            primary="Services"
                        />
                        <NavButton
                            primary='About'
                            dropdownLinks={[
                                {
                                    to: '/about',
                                    primary: 'About Us'
                                },
                                {
                                    to: '/about/accreditation-licensing',
                                    primary: 'Accreditation & Licensing'
                                },
                                {
                                    to: '/news',
                                    primary: 'News'
                                }
                            ]}
                        />
                        <NavButton
                            to="/careers"
                            primary="Careers"
                        />
                        <NavButton
                            to="/contact-us"
                            primary="Contact"
                        />
                    </div>
                    <a className='btn btn-testing' href='#'>
                        Covid-19 Testing &nbsp;<FaArrowRight />
                    </a>
                </div>
            </nav>
            <div>
                {routes()}
            </div>
        </React.Fragment>
    )
}

export default NavBar