import { Paper } from '@material-ui/core';
import React, { useState } from 'react';
import type { TaskProps } from './Task';

export default function Comment({ task }: TaskProps) {

    return (
        <Paper variant="outlined" square style={{maxHeight: 200, overflow: 'auto'}}/>
    );
}