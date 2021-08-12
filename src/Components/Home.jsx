import React from 'react';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
//Nav bar
import { alpha, makeStyles } from '@material-ui/core/styles';
import NearMeIcon from '@material-ui/icons/NearMe';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
//Importing Paper component from material UI
import Paper from '@material-ui/core/Paper';

//Importing Styling
import "../Styling/Home.css";
import { useState } from 'react';
import { useEffect } from 'react';


const formStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "theme.palette.background.paper",
  },
}));

//The vertical tabs code
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function a12yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}


//The vertical tabs code

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function Home() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const classesForm = formStyles();

  //Vertical Tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value2, setValue2] = React.useState(0);

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };
  //Vertical Tabs

  //Nav bar code 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  //States defined for the data of Bus
  const [busData, setBusData] = useState([]);

  const [busNo, setBusNo] = useState("");
  const [color, setColor] = useState("");
  const [driverID, setDriverID] = useState(0);
  const [routeID, setRouteID] = useState("");

  const [currentBusNo, setCurrentBusNo] = useState(0);

  const [loading, setLoading] = useState(true);

  //Updated data state start over here
  const [busNo_U, setBusNo_U] = useState("");
  const [color_U, setColor_U] = useState("");
  const [driverID_U, setDriverID_U] = useState(0);
  const [routeID_U, setRouteID_U] = useState("");
  //Updated data state start over here

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  //Nav bar code 

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <div className="d-flex">
        <IconButton className="ml-3" aria-label="show 4 new mails" color="inherit">
          <DirectionsBusIcon fontSize="large" />
        </IconButton>
        <h1 className="mt-2 ml-3">BMS</h1>
      </div>

      <div>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
        >
          <Tab label="Bus" {...a11yProps(0)} />
          <Tab label="Bus Driver" {...a11yProps(1)} />
          <Tab label="Bus Route" {...a11yProps(2)} />
          <Tab label="Passenger" {...a11yProps(3)} />
          <Tab label="Person" {...a11yProps(4)} />
          <Tab label="Schedule" {...a11yProps(5)} />
          <Tab label="Seat" {...a11yProps(6)} />
          <Tab label="Staff" {...a11yProps(7)} />
          <Tab label="Terminal" {...a11yProps(8)} />
          <Tab label="Ticket" {...a11yProps(9)} />
        </Tabs>
      </div>

      {/* <Divider /> */}
    </div>
  );

  //Function to fetch the data from the API
  const refreshList = () => {
    fetch('http://localhost:5000/api/' + 'Bus')
      .then(response => response.json())
      .then(data => {
        setBusData(data);
        //Loading is done so setting the loading to false
        setLoading(false);
        //Updating the data after the loading is done 
        setBusNo_U(data[currentBusNo].BusNo);
        setColor_U(data[currentBusNo].Color);
        setDriverID_U(data[currentBusNo].DriverID);
        setRouteID_U(data[currentBusNo].RouteID);
        //Updating the data after the loading is done 
        console.log("Data is equal to==>", data);
      })
  }

  const handleSubmitBus = () => {
    fetch('http://localhost:5000/api/' + 'Bus', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        BusNo: busNo,
        Color: color,
        DriverID: driverID,
        RouteID: routeID
      })
    })
      .then(res => res.json())
      .then((result) => {
        alert("Sent Successfully");
        console.log("The Result is ==> " + result);
      },
        (error) => {
          alert('Failed to send data' + error);
          console.log('Failed to send data' + error);
        })
  }

  const handleUpdateBus = () => {
    fetch('http://localhost:5000/api/' + 'Bus', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        BusNo: busNo_U,
        Color: color_U,
        DriverID: driverID_U,
        RouteID: routeID_U
      })
    })
      .then(res => res.json())
      .then((result) => {
        alert("Updated Successfully");
        console.log("The Result is ==> " + result);
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
      },
        (error) => {
          alert('Failed to send data' + error);
          console.log('Failed to send data' + error);
        })
  }

  //Changing the current bus number
  const changingTheCurrentBusNoValue = (e) => {

    let index = e.target.value;

    //alert(e.target.value);

    setCurrentBusNo(e.target.value);

    setBusNo_U(busData[index].BusNo);
    setColor_U(busData[index].Color);
    setDriverID_U(busData[index].DriverID);
    setRouteID_U(busData[index].RouteID);
  }

  useEffect(() => {
    refreshList();
  }, [])

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button style={{ backgroundColor: "blue" }} onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
      <div className={classes.grow}>
        <AppBar position="fixed">
          <Toolbar>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  onClick={toggleDrawer(anchor, true)}
                  edge="start"
                  title="Toggle To View the side bar"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <MenuIcon />
                </IconButton>
              </React.Fragment>
            ))}

            <Typography className={classes.title} variant="h6" noWrap>
              Bus Management System
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">

                <MailIcon />

              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>

      <div className={classes.root}>
        <TabPanel value={value} index={0}>
          <div>
            <br /><br /><br />
            <h1 className="text-dark text-center">CRUD Operations for Bus Table</h1>
            <br />
            <div className={classes2.root}>
              <AppBar position="static">
                <Tabs
                  variant="fullWidth"
                  value={value2}
                  onChange={handleChange2}
                  aria-label="nav tabs example"
                >
                  <LinkTab className="text-white" label="GET" href="/drafts" {...a12yProps(0)} />
                  <LinkTab className="text-white" label="INSERT" href="/drafts" {...a12yProps(1)} />
                  <LinkTab className="text-white" label="UPDATE" href="/trash" {...a12yProps(2)} />
                  <LinkTab className="text-white" label="DELETE" href="/spam" {...a12yProps(3)} />
                </Tabs>
              </AppBar>
              <TabPanel value={value2} index={0}>
                <h2>GET the data</h2>
                <hr />

                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>BUS NO.</th>
                      <th>COLOR</th>
                      <th>DRIVER ID</th>
                      <th>ROUTE ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {busData.map(bus =>
                      <tr key={bus.BusNo}>
                        <td>{bus.BusNo}</td>
                        <td>{bus.Color}</td>
                        <td>{bus.DriverID}</td>
                        <td>{bus.RouteID}</td>
                      </tr>)}
                  </tbody>
                </table>

              </TabPanel>
              <TabPanel value={value2} index={1}>
                <h2>INSERT the Data</h2>
                <hr />
                <form className={classesForm.root} noValidate autoComplete="off">
                  <div className="d-flex justify-content-evenly w-100">
                    <h5 className="mt-3 text-bold">BusNo : </h5>
                    <TextField className="ml-7" id="standard-basic" onChange={(e) => setBusNo(e.target.value)} label="Enter the BusNo" />
                  </div>

                  <div className="d-flex justify-content-evenly w-100">
                    <h5 className="mt-3 text-bold">Color : </h5>
                    <TextField className="ml-6" id="standard-basic" label="Color" onChange={(e) => setColor(e.target.value)} />
                  </div>

                  <div className="d-flex justify-content-evenly w-100">
                    <h5 className="mt-3 text-bold">DriverID : </h5>
                    <TextField className="ml-4" id="standard-basic" label="DriverID" onChange={(e) => setDriverID(e.target.value)} />
                  </div>

                  <div className="d-flex justify-content-evenly w-100">
                    <h5 className="mt-3 text-bold">RouteID : </h5>
                    <TextField className="ml-4" id="standard-basic" label="RouteID" onChange={(e) => setRouteID(e.target.value)} />
                  </div>

                  <br />

                  <Button variant="outlined" onClick={handleSubmitBus} color="primary">
                    INSERT
                  </Button>

                </form>
              </TabPanel>
              <TabPanel value={value2} index={2}>
                <h2>UPDATE the Data</h2>
                <hr />
                <h3>Select the Bus No Which you want to change</h3>
                <br />
                <div className="input-group input-group-md category_select">
                  <span className="input-group-addon glyphicon glyphicon-search" id="sizing-addon2"></span>
                  <select style={{ fontSize: "15px", width: "200px" }} value={currentBusNo}
                    onChange={(e) => changingTheCurrentBusNoValue(e)} className="form-control">
                    {busData.map((v, i) => {
                      return <option value={i} key={i}>
                        {v.BusNo}
                      </option>
                    })}
                  </select>
                </div>
                <br />

                {(loading) ? (
                  <>
                    <h3 className="text-success text-center">LOADING</h3>
                  </>
                ) : (
                  <>
                    <form className={classesForm.root} noValidate onClick={() => handleSubmitBus} autoComplete="off">
                      <div className="d-flex justify-content-evenly w-100">
                        <h5 className="mt-3 text-bold">BusNo : </h5>
                        <TextField className="ml-7" id="standard-basic" label="Enter the BusNo" value={busNo_U} />
                      </div>

                      <div className="d-flex justify-content-evenly w-100">
                        <h5 className="mt-3 text-bold">Color : </h5>
                        <TextField className="ml-6" id="standard-basic" label="Color" onChange={(e) => setColor_U(e.target.value)} value={color_U} />
                      </div>

                      <div className="d-flex justify-content-evenly w-100">
                        <h5 className="mt-3 text-bold">DriverID : </h5>
                        <TextField className="ml-4" id="standard-basic" label="DriverID" onChange={(e) => setDriverID_U(e.target.value)} value={driverID_U} />
                      </div>

                      <div className="d-flex justify-content-evenly w-100">
                        <h5 className="mt-3 text-bold">RouteID : </h5>
                        <TextField className="ml-4" id="standard-basic" label="RouteID" onChange={(e) => setRouteID_U(e.target.value)} value={routeID_U} />
                      </div>
                      <br />

                      <button onClick={handleUpdateBus} className="btn btn-success btn-round">UPDATE</button>

                    </form>
                  </>
                )}


              </TabPanel>
              <TabPanel value={value2} index={3}>
                DELETE
              </TabPanel>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <h1 className="text-dark text-center">CRUD Operations for Bus Driver Table</h1>

          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div>
            <h1 className="text-dark text-center">CRUD Operations for Bus Route Table</h1>

          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div>
            <h1 className="text-dark text-center">CRUD Operations for Passenger Table</h1>

          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div>
            <h1 className="text-dark text-center">CRUD Operations for Person Table</h1>

          </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <div>
            <h1 className="text-dark text-center">CRUD Operations for Schedule Table</h1>

          </div>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <div>
            <h1 className="text-dark text-center">CRUD Operations for Seat Table</h1>

          </div>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <div>
            <h1 className="text-dark text-center">CRUD Operations for Staff Table</h1>

          </div>
        </TabPanel>
        <TabPanel value={value} index={8}>
          <div>
            <h1 className="text-dark text-center">CRUD Operations for Terminal Table</h1>

          </div>
        </TabPanel>
        <TabPanel value={value} index={9}>
          <div>
            <h1 className="text-dark text-center">CRUD Operations for Ticket Table</h1>

          </div>
        </TabPanel>
      </div>


    </div>
  );
}
