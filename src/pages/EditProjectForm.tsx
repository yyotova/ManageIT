import { Button, Dialog, DialogActions, DialogContent, FormControl, Grid, IconButton, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from "react";
import { projects } from './Projects';
import { v4 as uuidv4 } from 'uuid';
import type { ProjectProps } from 'src/components/Project';

export interface editFormProps {
    open: boolean;
    onClose: () => void;
    project: ProjectProps;
}

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        paddingBottom: '10px',
        position: 'absolute'
    },
    titleWrapper: {
        fontWeight: 'bold',
        marginTop: 0,
        textAlign: 'center',
        backgroundColor: '#ffcc66',
        padding: '10px'
    },
    textField: {
        width: '350px'
    },
    contentWrapper: {
        overflow: 'hidden',
        paddingTop: '20px'
    },
    descriptionWrapper: {
        paddingTop: '0px'
    },
    descriptionContentWrapper: {
        width: '350px'
    },
    addedWrapper: {
        paddingTop: '0px',

    },
    addedContentWrapper: {
        width: '350px'
    },
    textFieldPadding: {
        padding: '10px'
    },
    title: {
        fontWeight: 'bold'
    },
    button: {
        margin: theme.spacing(3),
        backgroundColor: '#dba0be',
        left: '-80px'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
}));

export default function EditProjectForm({ open, onClose, project }: editFormProps) {

    const [projectName, setProjectName] = useState(project.title);
    const [description, setDescription] = useState(project.description);
    const classes = useStyles();
    const [members, setMembers] = useState(project.members);
    const defaultOptions = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder'
    ];

    const saveProject = (event: any) => {
        event.preventDefault();
        let returnedProject: ProjectProps = projects.filter(item => item.id === project.id)[0];
        returnedProject.title = projectName;
        returnedProject.description = description;
        returnedProject.members = members;
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <Typography variant="h4" className={classes.titleWrapper}>Edit Project</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>
            <DialogContent className={classes.contentWrapper}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Typography variant="h6" className={classes.title}>Project name</Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            value={projectName}
                            onChange={(event: any) => setProjectName(event.target.value)}
                            variant="outlined"
                            type="text"
                            className={classes.textField}
                            placeholder='Enter project name'
                            color="secondary"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" className={classes.title}>Team members</Typography>
                        <FormControl>
                            <Select
                                label='select-members'
                                id="members"
                                multiple
                                value={members}
                                onChange={(event: any) => setMembers(event.target.value)}
                            >
                                {defaultOptions.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} className={classes.descriptionWrapper}>
                        <Typography variant="h6" className={classes.title}>Description</Typography>
                        <TextField
                            value={description}
                            onChange={(event: any) => setDescription(event.target.value)}
                            placeholder="Describe the business logic of the project"
                            className={classes.descriptionContentWrapper}
                            variant="outlined"
                            multiline
                            rows={4}
                            rowsMax={8}
                            color="secondary"
                        />
                    </Grid>
                    <Grid item xs={6} className={classes.addedWrapper}>
                        <Typography variant="h6" className={classes.title}>Added</Typography>
                        <FormControl>
                            <Select
                                disabled
                                multiple
                                native
                                inputProps={{
                                    id: 'select-multiple-native',
                                }}
                            >
                                {members.map((name) => (
                                    <option key={name} value={name}>
                                        {name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" size="large" className={classes.button} onClick={saveProject}>
                    Submit
        </Button>
            </DialogActions>
        </Dialog>
    );
}
