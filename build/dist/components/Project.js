import React, {useState} from "../../_snowpack/pkg/react.js";
import {Card, CardMedia, CardContent, CardActionArea, Typography, makeStyles, IconButton} from "../../_snowpack/pkg/@material-ui/core.js";
import {useHistory} from "../../_snowpack/pkg/react-router-dom.js";
import EditIcon from "../../_snowpack/pkg/@material-ui/icons/Edit.js";
import EditProjectForm from "../pages/EditProjectForm.js";
const useStyles = makeStyles((theme) => ({
  media: {
    objectFit: "contain",
    maxHeight: "250px"
  },
  caption: {
    marginTop: "10px"
  },
  card: {
    maxHeight: "550px"
  },
  editButton: {
    left: "270px",
    top: "-45px"
  }
}));
export default function Project({project}) {
  const history = useHistory();
  const classes = useStyles();
  const [editProject, setEditProject] = useState(false);
  const handleCloseDialog = () => {
    setEditProject(false);
  };
  const handleOpenDialog = () => {
    setEditProject(true);
  };
  return /* @__PURE__ */ React.createElement(Card, {
    className: classes.card
  }, /* @__PURE__ */ React.createElement(CardActionArea, {
    onClick: () => history.push(`/${project.id}/dashboard`)
  }, /* @__PURE__ */ React.createElement(CardMedia, {
    component: "img",
    alt: project.title,
    className: classes.media,
    src: project.img
  })), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement(Typography, {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, project.title), /* @__PURE__ */ React.createElement(IconButton, {
    className: classes.editButton,
    onClick: handleOpenDialog
  }, /* @__PURE__ */ React.createElement(EditIcon, null)), /* @__PURE__ */ React.createElement(EditProjectForm, {
    open: editProject,
    onClose: handleCloseDialog,
    project
  }), /* @__PURE__ */ React.createElement(CardActionArea, {
    onClick: () => history.push(`/${project.id}/dashboard`)
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, project.description)), /* @__PURE__ */ React.createElement(Typography, {
    variant: "caption",
    className: classes.caption,
    color: "textSecondary",
    component: "p"
  }, project.edited)));
}
