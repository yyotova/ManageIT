import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Tasks from '../components/Tasks';
import { useParams } from 'react-router-dom';
import { projects } from './Projects';

const useStyles = makeStyles((theme) => ({
  tasks: {
    height: '800px',
    width: '220px',
    textAlign: 'center',
    border: '1px solid #424242',
    padding: 0,
    "& > :not(:first-child)": {
      marginTop: '25px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid #424242',
      borderRadius: '20px',
      maxWidth: '200px',
      paddingBottom: '7px',
      marginLeft: '10px'
    },
  },
  control: {
    padding: theme.spacing(2),
  },
  gridPadding: {
    padding: '0px'
  },
  gridItem: {
    padding: '0px',
    paddingTop: '30px',
    paddingBottom: '60px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();

  const currentProject = projects.filter(project => project.id === id);

  return (
    <Grid container spacing={0} classes={{ root: classes.gridPadding }}>
      <Grid item xs={12} classes={{ root: classes.gridItem }}>
        <Grid container justify="center" spacing={0} classes={{ root: classes.gridPadding }}>
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