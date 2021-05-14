import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import projectStorage from "../../firebase";
import BoxComponent from "../Box/BoxComponent";

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
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "transparent",
    color: "white",
    display: "flex",
    flexDirection: "column",

    background: "#151618",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,

    margin: "auto",
    marginTop: "3%",
  },
  tabPanel: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "30px",
    flexWrap: "wrap",
  },
}));

function TabsComponent() {
  //

  const [it, setIt] = useState([]);
  useEffect(() => {
    projectStorage
      .collection("it")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setIt(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  const [bank, setBank] = useState([]);
  useEffect(() => {
    projectStorage
      .collection("bank")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setBank(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  const [insurance, setInsurance] = useState([]);
  useEffect(() => {
    projectStorage
      .collection("insurance")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setInsurance(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);
  const [buisness, setBuisness] = useState([]);
  useEffect(() => {
    projectStorage
      .collection("buisness")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setBuisness(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);
  //
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <div className="tabs">
    <div className={classes.root}>
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="IT Software" {...a11yProps(0)} />
        <Tab label="Banking" {...a11yProps(1)} />
        <Tab label="Insurance" {...a11yProps(2)} />
        <Tab label="Buisness" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className={classes.tabPanel}>
          {it.map((user) => (
            <BoxComponent
              key={user.id}
              name={user.data.name}
              phone={user.data.phone}
              email={user.data.email}
              company={user.data.company}
              designation={user.data.designation}
              department={user.data.department}
              resume={user.data.resume}
              pic={user.data.pic}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.tabPanel}>
          {bank.map((user) => (
            <BoxComponent
              key={user.id}
              name={user.data.name}
              phone={user.data.phone}
              email={user.data.email}
              company={user.data.company}
              designation={user.data.designation}
              department={user.data.department}
              resume={user.data.resume}
              pic={user.data.pic}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.tabPanel}>
          {insurance.map((user) => (
            <BoxComponent
              key={user.id}
              name={user.data.name}
              phone={user.data.phone}
              email={user.data.email}
              company={user.data.company}
              designation={user.data.designation}
              department={user.data.department}
              resume={user.data.resume}
              pic={user.data.pic}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={classes.tabPanel}>
          {buisness.map((user) => (
            <BoxComponent
              key={user.id}
              name={user.data.name}
              phone={user.data.phone}
              email={user.data.email}
              company={user.data.company}
              designation={user.data.designation}
              department={user.data.department}
              resume={user.data.resume}
              pic={user.data.pic}
            />
          ))}
        </div>
      </TabPanel>
    </div>
    // </div>
  );
}

export default TabsComponent;
