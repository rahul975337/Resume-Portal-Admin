import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import projectStorage from "../../firebase";
import BoxComponent from "../Box/Box";

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

  const [a, setA] = useState([]);
  useEffect(() => {
    projectStorage
      .collection("a")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setA(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  const [b, setB] = useState([]);
  useEffect(() => {
    projectStorage
      .collection("b")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setB(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  const [c, setC] = useState([]);
  useEffect(() => {
    projectStorage
      .collection("c")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setC(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
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
        <Tab label="DEP A" {...a11yProps(0)} />
        <Tab label="DEP B" {...a11yProps(1)} />
        <Tab label="DEP C" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className={classes.tabPanel}>
          {a.map((user) => (
            <BoxComponent
              key={user.id}
              name={user.data.file}
              phone={user.data.phone}
              email={user.data.email}
              image={user.data.image}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.tabPanel}>
          {b.map((user) => (
            <BoxComponent
              key={user.id}
              name={user.data.file}
              phone={user.data.phone}
              email={user.data.email}
              image={user.data.image}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.tabPanel}>
          {c.map((user) => (
            <BoxComponent
              key={user.id}
              name={user.data.file}
              phone={user.data.phone}
              email={user.data.email}
              image={user.data.image}
            />
          ))}
        </div>
      </TabPanel>
    </div>
    // </div>
  );
}

export default TabsComponent;
