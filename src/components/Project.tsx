import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActionArea, Typography, makeStyles, Container, IconButton, Button, CardActions, Theme } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import EditProjectForm from '../pages/EditProjectForm';

export interface TaskModel{
  id: string;
  title: string;
  // description: string | null;
  asignee: string;
  label: string;
}

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  edited: string;
  img: string;
  tasks: TaskModel[];
  members: string[];
}

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    objectFit: 'contain',
    maxHeight: '250px'
  },
  caption: {
    marginTop: '10px'
  },
  card: {
    maxHeight: '550px'
  },
  editButton: {
    left: '270px',
    top: '-45px'
  }
}));

export default function Project({ project }: { project: ProjectProps }) {
  const history = useHistory<{ from: Location }>();
  const classes = useStyles();
  const [editProject, setEditProject] = useState(false);

  const handleCloseDialog = () => {
    setEditProject(false);
  };

  const handleOpenDialog = () => {
    setEditProject(true);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => history.push(`/${project.id}/dashboard`)}>
        <CardMedia
          component='img'
          alt={project.title}
          className={classes.media}
          src={project.img}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {project.title}
        </Typography>
        <IconButton className={classes.editButton} onClick={handleOpenDialog}>
          <EditIcon />
        </IconButton>
        <EditProjectForm
          open={editProject}
          onClose={handleCloseDialog} 
          project={project}/>
        <CardActionArea onClick={() => history.push(`/${project.id}/dashboard`)}>
          <Typography variant="body2" color="textSecondary" component="p">
            {project.description}
          </Typography>
        </CardActionArea>
        <Typography variant="caption" className={classes.caption} color="textSecondary" component="p">
          {project.edited}
        </Typography>
      </CardContent>
    </Card>
  );
}