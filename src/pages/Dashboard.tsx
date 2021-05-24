import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import Tasks from '../components/Tasks';
import { useParams } from 'react-router-dom';
import { projects } from './Projects';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '50px'
  },
  tasks: {
    height: '800px',
    width: '250px',
    textAlign: 'center',
    border: '1px solid #424242',
    padding: 0,
    "& > :not(:first-child)":{
      marginTop: '25px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #424242',
      borderRadius: '20px',
      maxWidth: '200px',
      paddingBottom: '7px',
      marginLeft: '22px'
    },
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();

  const currentProject = projects.filter(project => project.id === id);

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={0}>
          {['New', 'In Progress', 'Ready For Code Review', 'Ready For Testing', 'In Testing', 'Closed'].map((value) => (
            <Grid key={value} item className={classes.tasks}>
              <Tasks label={value} tasks={currentProject[0].tasks} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}