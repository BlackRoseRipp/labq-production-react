import React from "react";
import { 
    Typography,
    Grid,
    Button,
    Box,
    Link,
    TextField,
    Container,
    Stack,
    Divider
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'

export default function Footer(){
    return (
        <>
            <div style={{
                backgroundColor:'#0C3959',
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                <Box component="span" style={{ 
                    width:"70%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    margin: '2em'
                }}>
                    <Grid container style={{
                        width:"90%",
                        padding: "2em 0em"
                    }}>
                        <Grid item xs={4}>
                            <RouterLink to="/" style={{ width: '15%', marginRight: '3em' }}>
                                <img src="assets/img/LabQ-Logo-White.svg" style={{ width: '40%' }} />
                            </RouterLink>
                            <Stack direction='row' style={{marginTop: '1.5em'}}>
                                <a href="https://www.instagram.com/labqdx/" style={{paddingRight: '1.8em', color: '#FFFFFF' }}>
                                    <FaInstagram />
                                </a>
                                <a href="https://www.linkedin.com/company/skybro/" style={{ paddingRight: '1.8em', color: '#FFFFFF' }}>
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://www.facebook.com/labqdiagnostics" style={{ paddingRight: '1.8em', color: '#FFFFFF' }}>
                                    <FaFacebookF />
                                </a>
                                <a href="https://twitter.com/LabQ247" style={{ color: '#FFFFFF' }}>
                                    <FaTwitter />
                                </a>
                            </Stack>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography style={{ fontSize: "1.5em", color: '#1C75BC', fontWeight: 'bold' }}>
                                Navigation
                            </Typography>
                            {/* TODO: Fix styling pls */}
                            <ul style={{ listStyleType: "none", width: "80%"}}>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#1C75BC", textDecorationLine: 'none' }}>Home</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#FFFFFF", textDecorationLine: 'none' }}>Locations</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#FFFFFF", textDecorationLine: 'none' }}>About</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#FFFFFF", textDecorationLine: 'none' }}>News</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#FFFFFF", textDecorationLine: 'none' }}>Tests</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#FFFFFF", textDecorationLine: 'none' }}>Careers</a></li>
                                <li style={{ padding: '.4em 0' }}><a href="#" style={{ color: "#FFFFFF", textDecorationLine: 'none' }}>Contact</a></li>
                            </ul>
                        </Grid>
                        <Grid item xs={4} style={{
                            justifyContent: "center"
                        }}>
                            <Typography style={{ fontSize: "1.5em", color: '#1C75BC', fontWeight: 'bold', marginBottom: '1em' }}>
                                Subscribe to our Newsletter
                            </Typography>
                            <Container sx={{ alignItems: 'center' }}>
                                <TextField label="Email" variant="outlined" size="medium" style={{ backgroundColor: "#FFFFFF", width: '80%', margin: '1em 0em'}}/>
                                <Button variant="contained" disableElevation style={{ textTransform: "none", fontSize: "1.05em", BackgroundColor: '#1C75BC', width: '80%'}}>
                                    Sign Up
                                </Button>
                            </Container>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Container>
                <Stack direction='row' divider={<Divider orientation="vertical" flexItem />} spacing={2} style={{
                    color: '#0C3959',
                    textDecorationLine: 'none',
                    justifyContent: 'center',
                    margin: '1em 0'
                }}>
                    <Typography>&copy; LabQ Diagnostics. All Right Reserved 2022.</Typography>
                    <a>Privacy Policy</a>
                    <a>Terms & Conditions</a>
                    <a>Accessibility Statement</a>
                </Stack>
            </Container>
        </>
    )
}