import React from "../../_snowpack/pkg/react.js";
import {Grid, makeStyles} from "../../_snowpack/pkg/@material-ui/core.js";
import Tasks from "../components/Tasks.js";
import {useParams} from "../../_snowpack/pkg/react-router-dom.js";
import {projects} from "./Projects.js";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "50px"
  },
  tasks: {
    height: "800px",
    width: "250px",
    textAlign: "center",
    border: "1px solid #424242",
    padding: 0,
    "& > :not(:first-child)": {
      marginTop: "25px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #424242",
      borderRadius: "20px",
      maxWidth: "200px",
      paddingBottom: "7px",
      marginLeft: "22px"
    }
  },
  control: {
    padding: theme.spacing(2)
  },
  grid: {
    padding: "0px"
  }
}));
export default function Dashboard() {
  const classes = useStyles();
  const {id} = useParams();
  const currentProject = projects.filter((project) => project.id === id);
  return /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    spacing: 0,
    classes: {root: classes.grid}
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 10
  }, /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    justify: "center",
    spacing: 0
  }, ["New", "In Progress", "Ready For Code Review", "Ready For Testing", "In Testing", "Closed"].map((value) => /* @__PURE__ */ React.createElement(Grid, {
    key: value,
    item: true,
    className: classes.tasks
  }, /* @__PURE__ */ React.createElement(Tasks, {
    label: value,
    tasks: currentProject[0].tasks
  }))))));
}
