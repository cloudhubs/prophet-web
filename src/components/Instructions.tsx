import React from 'react';
import {
    Box,
    Checkbox, Divider, IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Typography
} from "@material-ui/core";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CloseIcon from '@material-ui/icons/Close';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const Instructions = () => {

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const listItemValues = [
        {
            label: "Context map is present",
        },
        {

        }
    ]

    return (
        <React.Fragment>

            <Box>

                <Typography variant="h4">
                    Global
                </Typography>

                <Divider />

                <Paper>
                    <List>
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <ListItem key={value} role={undefined} dense button>
                                    <ListItemIcon>
                                        <Checkbox
                                            color={"primary"}
                                            checkedIcon={<CloseIcon />}
                                            edge="start"
                                            checked={true}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }} />


                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                                    {/*<ListItemSecondaryAction>*/}
                                    {/*    <IconButton edge="end" aria-label="comments">*/}
                                    {/*        <CommentIcon />*/}
                                    {/*    </IconButton>*/}
                                    {/*</ListItemSecondaryAction>*/}
                                </ListItem>
                            );
                        })}
                    </List>
                </Paper>
            </Box>
        </React.Fragment>
    )

}

export default Instructions;
