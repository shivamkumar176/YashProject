import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { CssBaseline, Grid, Paper } from '@mui/material';
import { SearchComponent } from './SearchComponent';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Content() {

    return (
        <div >
            <div>
                <h1>Robo collection actions</h1>
                <p>Amet minim-mollit non deserunt ullamco est sit aliqua dolor do amet sint .</p>
                <div style={{ height: "0.3vh", width: "97%", backgroundColor: "gray" }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: "space-around", marginTop: "4vh" }}>
                <Card sx={{ borderRadius: 5, height: "25vh", backgroundColor: "#e8eaf6" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ borderRadius: 5, backgroundColor: "darkblue", height: "25vh" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ borderRadius: 5, height: "25vh", backgroundColor: "#e8eaf6" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ borderRadius: 5, height: "25vh", backgroundColor: "#e8eaf6" }} >
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>

                </Card>
                <Card sx={{ borderRadius: 5, height: "25vh", backgroundColor: "#e8eaf6" }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <Grid container style={{ display: 'flex', marginTop: "8vh", marginLeft:"6vw" }}>
                <Grid item xs={6.5}>
                    <Button variant="contained">
                        Executed 3,567
                    </Button>
                    <Button variant="contained">
                        Pending 1,467
                    </Button>
                    <Button variant="contained">
                        Cancelled 1,89
                    </Button>
                </Grid>
                <Grid item xs={5} style={{ display: 'flex' }}>
                    <SearchComponent />
                    <Button >
                        <DownloadIcon sx={{ mr: 1 }} />Export
                    </Button>
                </Grid>
            </Grid>
            <CssBaseline />
            <Box sx={{ flexGrow: 1, mt: 6 }}>
                <Grid container style={{ borderRadius: 16 }}>
                    <Grid item xs={12} sm={12} md={12} xl={12}>
                        <Item>
                            <div style={{ display: 'flex', marginTop: "4vh" }}>
                                <Card sx={{ borderRadius: 5, height: "25vh", width: "30vw", marginLeft: "5vw", marginRight: "7vw", backgroundColor: "#e8eaf6" }}>
                                    <CardContent>
                                        <Typography variant="h1" sx={{ fontSize: 20, color: "black" }} color="text.secondary" gutterBottom>
                                            BBW Girl
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Ahmedabad
                                        </Typography>
                                        <hr />
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <span>    <SchoolIcon /></span>
                                            <span>  <Typography variant='h5'>$123456</Typography></span>
                                        </div>
                                    </CardContent>

                                </Card>
                                <Card sx={{ borderRadius: 5, height: "25vh", width: "30vw", backgroundColor: "#e8eaf6" }}>
                                    <CardContent>
                                        <Typography variant="h1" sx={{ fontSize: 20, color: "black" }} color="text.secondary" gutterBottom>
                                            GYM Girl
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Catereres
                                        </Typography>
                                        <hr />
                                        <div style={{ display: "flex", justifyContent: "space-around" }} >

                                            <span>   <HomeIcon /></span>
                                            <span>    <Typography variant='h5'>$123456</Typography></span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div style={{ display: 'flex', justifyContent: "space-around", marginTop: "4vh" }}>
                                <Card sx={{ borderRadius: 5, height: "25vh", width: "30vw", marginLeft: "1vw", backgroundColor: "#e8eaf6" }}>
                                    <CardContent>
                                        <Typography variant="h1" sx={{ fontSize: 20, color: "black" }} color="text.secondary" gutterBottom>
                                            Chud Kumari
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Ahmedabad
                                        </Typography>
                                        <hr />
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <span> <LocalShippingIcon /></span>
                                            <span> <Typography variant='h5'>$123456</Typography> </span>
                                        </div>
                                    </CardContent>

                                </Card>
                                <Card sx={{ borderRadius: 5, height: "25vh", width: "30vw", backgroundColor: "#e8eaf6" }}>
                                    <CardContent>
                                        <Typography variant="h1" sx={{ fontSize: 20, color: "black" }} color="text.secondary" gutterBottom>
                                            Maal
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Catereres
                                        </Typography>
                                        <hr />
                                        <div style={{ display: "flex", justifyContent: "space-around" }} >

                                            <span>   <SchoolIcon /></span>
                                            <span>     <Typography variant='h5'>$123456</Typography></span>
                                        </div>
                                    </CardContent>

                                </Card>
                            </div>
                            <div style={{ display: 'flex', justifyContent: "space-around", marginTop: "4vh" }}>
                                <Card sx={{ borderRadius: 5, height: "25vh", width: "30vw", backgroundColor: "#e8eaf6" }}>
                                    <CardContent>
                                        <Typography variant="h1" sx={{ fontSize: 20, color: "black" }} color="text.secondary" gutterBottom>
                                            Girl
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Ahmedabad
                                        </Typography>
                                        <hr />
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                            <span> <LocalShippingIcon /></span>
                                            <span> <Typography variant='h5'>$123456</Typography></span>
                                        </div>
                                    </CardContent>

                                </Card>
                                <Card sx={{ borderRadius: 5, height: "25vh", width: "30vw", marginRight: "12vw", backgroundColor: "#e8eaf6" }}>
                                    <CardContent>
                                        <Typography variant="h1" sx={{ fontSize: 20, color: "black" }} color="text.secondary" gutterBottom>
                                            Orichimaru
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Catereres
                                        </Typography>
                                        <hr />
                                        <div style={{ display: "flex", justifyContent: "space-around" }} >

                                            <span>   <SchoolIcon /></span>
                                            <span>    <Typography variant='h5'>$123456</Typography></span>
                                        </div>
                                    </CardContent>

                                </Card>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

        </div>
    )
}

export default Content