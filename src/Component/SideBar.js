import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Content from "./Content";
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Checkbox } from "@mui/material";
import Slider from '@mui/material/Slider';
import { SearchComponent } from "./SearchComponent";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const drawerWidth = 240;

function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;
export default function SideBar() {
    const [open, setOpen] = React.useState(true);
    const [open1, setOpen1] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);
    const [open3, setOpen3] = React.useState(true);
    const [open4, setOpen4] = React.useState(true);
    const [open5, setOpen5] = React.useState(true);
    const [secondary, setSecondary] = React.useState(false);
    const [secondary1, setSecondary1] = React.useState(false);
    const [secondary2, setSecondary2] = React.useState(false);
    const [secondary3, setSecondary3] = React.useState(false);


    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick1 = () => {
        setOpen1(!open1);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleClick3 = () => {
        setOpen3(!open3);
    };
    const handleClick4 = () => {
        setOpen4(!open4);
    };
    const handleClick5 = () => {
        setOpen5(!open5);
    };
    const [value1, setValue1] = React.useState([20, 37]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton>
                            <FilterAltIcon/><ListItemText primary="Hide Filter" />
                            <ListItemText primary="Reset" style={{marginLeft:36}}/>
                        </ListItemButton>
                        <Divider/>
                        <ListItemButton>
                            <ListItemText primary="Presets" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Preset One" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Presets Two" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Presets Three" />
                        </ListItemButton>
                        <Divider/>
                        <ListItemButton onClick={handleClick}>
                            <ListItemText primary="Date Range" />

                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <Checkbox
                                        checked={secondary}
                                        onChange={(event) => setSecondary(event.target.checked)}
                                    /> <ListItemText primary="Today" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <Checkbox
                                        checked={secondary1}
                                        onChange={(event) => setSecondary1(event.target.checked)}
                                    /><ListItemText primary="yesterday" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <Checkbox
                                        checked={secondary2}
                                        onChange={(event) => setSecondary2(event.target.checked)}
                                    /><ListItemText primary="Last 7 days" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <Checkbox
                                        checked={secondary3}
                                        onChange={(event) => setSecondary3(event.target.checked)}
                                    /> <ListItemText primary="Last 30 days" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemText primary="Custom Date" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Box>
                <Divider />
                <Box>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader">
                        <ListItemButton onClick={handleClick1}>
                            <ListItemText primary="Amount" />
                            {open1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open1} timeout="auto" unmountOnExit>
                            <List>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <Slider
                                        getAriaLabel={() => 'Minimum distance'}
                                        value={value1}
                                        onChange={handleChange1}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        disableSwap
                                    />
                                </ListItemButton>
                                <h2 style={{ textAlign: 'center' }}>$2000-$5000</h2>
                            </List>
                        </Collapse>

                    </List>
                </Box>
                <Divider />
                <Box>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader">
                        <ListItemButton onClick={handleClick2}>
                            <ListItemText primary="City" />
                            {open2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open2} timeout="auto" unmountOnExit>
                            <List>
                                <ListItemButton sx={{ pl: 4 }}  style={{ marginLeft: '-7vw' }} >
                                    <SearchComponent />
                                </ListItemButton>
                            </List>
                        </Collapse>

                    </List>
                </Box>
                <Divider />
                <Box>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader">
                        <ListItemButton onClick={handleClick3}>
                            <ListItemText primary="State" />
                            {open3 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open2} timeout="auto" unmountOnExit>
                            <List>

                            </List>
                        </Collapse>

                    </List>
                </Box>
                <Divider />
                <Box>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader">
                        <ListItemButton onClick={handleClick4}>
                            <ListItemText primary="Segment" />
                            {open4 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open2} timeout="auto" unmountOnExit>
                            <List>

                            </List>
                        </Collapse>

                    </List>
                </Box>
                <Divider />
                <Box>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader">
                        <ListItemButton onClick={handleClick5}>
                            <ListItemText primary="Branch" />
                            {open5 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open2} timeout="auto" unmountOnExit>
                            <List>

                            </List>
                        </Collapse>

                    </List>
                </Box>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Content />
                <Toolbar />
            </Box>
        </Box>
    );
}