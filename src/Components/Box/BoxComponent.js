import { Avatar, CardContent, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import { LinkOutlined, Phone } from "@material-ui/icons";
import React from "react";
import { SiGmail } from "react-icons/si";

// import "./Box.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: 370,
    borderRadius: "10px",
    padding: 3,
    background: "#25282c",
    margin: 30,
    color: "white",
  },
  media: {
    height: 130,
    width: 130,

    // paddingTop: "56.25%",
    margin: "auto",
    // borderRadius: "10px",
  },
  icon: {
    color: "white",
    marginLeft: 10,
    fontSize: 20,
    transition: "0.2s ease-in",

    "&:hover, &:focus": {
      color: "#e91e63",
    },
  },
  tabs: {
    margin: "auto",
    marginTop: "3%",
  },
  title: {
    marginTop: "7px",
    textAlign: "center",
    fontWeight: "fontWeightBold",
    cursor: "pointer",
    transition: "0.2s ease-in",
    "&:hover, &:focus": {
      color: "#e91e63",
    },
  },
  content: {},
  cardText: {
    fontWeight: "100",
  },
  divider: {
    width: 150,
    margin: "auto",
    marginBottom: 25,
    // height: 1,
    borderBottom: "1px solid var(--red)",
    // background: "var(--red)",
  },
  actions: {
    margin: "auto 10px",
  },
}));

function BoxComponent({
  name, //dis--
  phone, //display
  email, //link
  company, //displa
  designation, //displa
  department,
  resume, //link
  pic, //link
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.title} title={name} />
      <div className={classes.divider}></div>
      <Avatar className={classes.media} src={pic} />
      <CardContent className={classes.content}>
        <Typography className={classes.cardText}>Phone: {phone}</Typography>
        <Typography className={classes.cardText}>Company: {company}</Typography>
        <Typography>Designation: {designation}</Typography>
      </CardContent>

      <CardActions className={classes.actions}>
        <a type="number" href={`tel:${phone}`}
        //  target="_blank" rel="noreferrer"
         >
          <Phone className={classes.icon} />
        </a>
        {/* mailto */}
        <a href={`mailto:${email}`} target="__blank" rel="noreferrer">
          <SiGmail className={classes.icon} />
        </a>
        {/* resume download */}
        <a
          type="application/pdf"
          href={resume}
          target="___blank"
          rel="noreferrer"
        >
          <LinkOutlined className={classes.icon} />
        </a>
      </CardActions>
    </Card>
  );
}
export default BoxComponent;
