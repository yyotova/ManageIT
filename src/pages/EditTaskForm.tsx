import { Avatar, Dialog, DialogContent, Grid, IconButton, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from "./CreateProjectForm";
import type { TaskModel } from "../components/Project";
import Comment from "../components/Comment";

export interface taskFormProps {
    open: boolean;
    onClose: () => void;
    task: TaskModel;
};

export default function EditTaskForm({ open, onClose, task }: taskFormProps) {
    const classes = useStyles();
    const [id] = useState(task.id);
    const [title] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [assignee, setAssignee] = useState(task.asignee);
    const [reporter, setReporter] = useState(task.reporter);
    const [label, seLabel] = useState(task.label);
    const [estimate, setEstimate] = useState(task.estimated);

    const closeAndCleanUp = () => {
        onClose();
    }

    return (
        <Dialog open={open} onClose={closeAndCleanUp} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <Typography variant="h4" className={classes.titleWrapper}>#{task.id} {task.title}</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={closeAndCleanUp}>
                <CloseIcon />
            </IconButton>
            <DialogContent className={classes.contentWrapper}>
                <Grid container spacing={4} alignItems='flex-end'>
                    <Grid item xs={8}>
                        <Typography variant="h6" className={classes.title}>Description</Typography>
                        <TextField
                            value={description}
                            onChange={(event: any) => setDescription(event.target.value)}
                            placeholder="Describe the business logic of the project"
                            className={classes.descriptionContentWrapper}
                            variant="outlined"
                            multiline
                            rows={7}
                            rowsMax={9}
                            color="secondary"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Avatar>{task.asignee[0].toLocaleUpperCase()}</Avatar>
                        <TextField id="input-with-icon-grid" label="With a grid" />
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Comment task={task} />
                </Grid>
            </DialogContent>
        </Dialog>
    );
}