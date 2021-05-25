import {Button, Dialog, DialogActions, DialogContent, FormControl, Grid, IconButton, makeStyles, MenuItem, Select, TextField, Typography} from "../../_snowpack/pkg/@material-ui/core.js";
import CloseIcon from "../../_snowpack/pkg/@material-ui/icons/Close.js";
import React, {useState} from "../../_snowpack/pkg/react.js";
import {projects} from "./Projects.js";
import {v4 as uuidv4} from "../../_snowpack/pkg/uuid.js";
const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    paddingBottom: "10px",
    position: "absolute"
  },
  titleWrapper: {
    fontWeight: "bold",
    marginTop: 0,
    textAlign: "center",
    backgroundColor: "#ffcc66",
    padding: "10px"
  },
  textField: {
    width: "350px"
  },
  contentWrapper: {
    overflow: "hidden",
    paddingTop: "20px"
  },
  descriptionWrapper: {
    paddingTop: "0px"
  },
  descriptionContentWrapper: {
    width: "350px"
  },
  addedWrapper: {
    paddingTop: "0px"
  },
  addedContentWrapper: {
    width: "350px"
  },
  textFieldPadding: {
    padding: "10px"
  },
  title: {
    fontWeight: "bold"
  },
  button: {
    margin: theme.spacing(3),
    backgroundColor: "#dba0be",
    left: "-80px"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));
export default function CreateProjectForm({open, onClose}) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const classes = useStyles();
  const [members, setMembers] = useState([]);
  const defaultOptions = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder"
  ];
  const setParamsToEmpty = () => {
    setProjectName("");
    setDescription("");
    setMembers([]);
  };
  const saveProject = (event) => {
    event.preventDefault();
    projects.push({
      id: uuidv4(),
      title: projectName,
      description,
      edited: "Last updated 2 sec ago",
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0PDg0NDQ0NDQ0NDQ8NDQ4NFhEWFhURExMYHSggGBolGxUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAgEDBAUH/8QAMBABAQACAAIGCAcBAQAAAAAAAAECEQMEEiExQVJxFTJRYWKRobEFExQigZKi0XL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/RAAAAAAAAAADQ0GaNNAZo0oBOjSzQI0adDQOejTpo0Dno0vRoEaNLYCdGlMBg2sAAAAAAAAAAAAAAAAAAAAAayKBjRoDdEipATpulaboE6NLkNAjRpejQIZpemaBGmLsZYCBVTQZWNYAAAAAAAAAAAAAAAAAAAABFJioDWyEVAFSEipAZMVSNkVICZG6Xo0COizTthw7l1SW+UdOLyuWGPSuu3Wu2wHk0yx1sTYDlYyulibAc9JrpU0EJVUgAAAAAAAAAAAAAAAAAAAARcRF4gqKjIuA2RWMZHfg8HLL1cbff3fMESKmL28LkPHf4x/69Mxw4fZjd+7G2/MHi4XKZ5d2p7+p6ceUwx68rvz6ozPj8S+rhZ77La4ZY53rsyvnKD0Zc1hj1YzflNRWN/N4dl7bueV7nk/Ly8N+Vd+U3LZZdWey9oPBcU2PbzXBvStktl6+qb63C8HPwZf1oPNYmx1sRYDlU10sRkDlUrqAAAAAAAAAAAAAAAAAAAAAI6YucdMQXF4oi8Qev8AD5jc9ZSXc6t+17+Z5n8vUmPbOr2Pk8PKyyztllj6nN49PhzOd2sv47wOT4uWeWXSvdNTuis+a6Ns6O9X2uX4d25eUc+P6+XmD0fq/h+p+q+H6rnLY613+3byZTVs9lsB6f1Xw/Vl5v4fq8yuJhcdb75sHa858P1duX43T31a179vn16uQ7MvOfYHg4vrZed+7lXbi+tfO/dxoIrnXSudBzyRV5IoAAAAAAAAAAAAAAAAAAAAEdMXOOmILi8XOLgLj6n4fn0sLhe77V8qPVyXF6OePsv7b/IPXyWHRzzxvc48f18vN75w9Z3L24yXzj5/Mevl5g7Y8zlJrq8+9y2rluF07u+rO2+33PTxOWl7P2/YHPluFu7vZOz316eJw5lOvuVjjJJJ2RoPnc1h0curss3HbkOzLzn2bz+O8Zl7L9Kn8OvVl5wHh4vrXzv3csl8W/uy8793Ogioq7UZA55IXkgAAAAAAAAAAAAAAAAAAAACLiIqAuKiIqA6Sqlc5VSg+7yvE6eGN79avnHh5jDLp5axys32yVz5Tm/y5ZZuXr7dar0+kp4L/YDHmOJJqcPUnw5N/VcXwf5yPSM8H1PSM8F+YN/VcTwf5yZ+q4vg/wA5HpGeC/M9IzwfUE8Tj8TKWXDqvV6uTr+HY2TLcs652zTn6SngvzZ6Tngv9geHi392X/q/dztbnlu2+22otBlTk2poIqVVIAAAAAAAAAAAAAAAAAAAAEVEqBqpUNBcqtucqtguVUrnK3YOkrduezYOmzbn0i0FbZck7ZsG2stZtloFqaUBiWsAAAAAAAAAAAAAAAAAAAAAaxoDWAKakBcptICzaGgrZtIDdm07Ng3bGAAMArG1gAAAAAAAAAAAAAAAAAAAABsAaMAaMAUJAUJAUJAUJAaMAaMAbWAAAAAAAAAAAD//2Q==",
      members,
      tasks: []
    });
    setParamsToEmpty();
    onClose();
  };
  const closeAndCleanUp = () => {
    setParamsToEmpty();
    onClose();
  };
  return /* @__PURE__ */ React.createElement(Dialog, {
    open,
    onClose,
    maxWidth: "md",
    classes: {paper: classes.dialogWrapper}
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4",
    className: classes.titleWrapper
  }, "Create a new Project"), /* @__PURE__ */ React.createElement(IconButton, {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: closeAndCleanUp
  }, /* @__PURE__ */ React.createElement(CloseIcon, null)), /* @__PURE__ */ React.createElement(DialogContent, {
    className: classes.contentWrapper
  }, /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    spacing: 4
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 6
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title
  }, "Project name"), /* @__PURE__ */ React.createElement(TextField, {
    autoFocus: true,
    margin: "dense",
    id: "name",
    value: projectName,
    onChange: (event) => setProjectName(event.target.value),
    variant: "outlined",
    type: "text",
    className: classes.textField,
    placeholder: "Enter project name",
    color: "secondary"
  })), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 6
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title
  }, "Team members"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(Select, {
    label: "select-members",
    id: "members",
    multiple: true,
    value: members,
    onChange: (event) => setMembers(event.target.value)
  }, defaultOptions.map((name) => /* @__PURE__ */ React.createElement(MenuItem, {
    key: name,
    value: name
  }, name))))), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 6,
    className: classes.descriptionWrapper
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title
  }, "Description"), /* @__PURE__ */ React.createElement(TextField, {
    value: description,
    onChange: (event) => setDescription(event.target.value),
    placeholder: "Describe the business logic of the project",
    className: classes.descriptionContentWrapper,
    variant: "outlined",
    multiline: true,
    rows: 4,
    rowsMax: 8,
    color: "secondary"
  })), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 6,
    className: classes.addedWrapper
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title
  }, "Added"), /* @__PURE__ */ React.createElement(FormControl, null, /* @__PURE__ */ React.createElement(Select, {
    disabled: true,
    multiple: true,
    native: true,
    inputProps: {
      id: "select-multiple-native"
    }
  }, members.map((name) => /* @__PURE__ */ React.createElement("option", {
    key: name,
    value: name
  }, name))))))), /* @__PURE__ */ React.createElement(DialogActions, null, /* @__PURE__ */ React.createElement(Button, {
    variant: "contained",
    size: "large",
    className: classes.button,
    onClick: saveProject
  }, "Submit")));
}
