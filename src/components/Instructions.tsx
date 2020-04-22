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
import {useGlobalState} from '../state/appState';
import {ErrorItem} from "../data/ErrorItem";
import {AnalysisErrors} from "../data/AnalysisErrors";

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


    const [analysisError] = useGlobalState('analysisError');

    return (
        <React.Fragment>

            <Box>



                <Paper>

                    <Typography variant="h4">
                        Global
                    </Typography>

                    <Divider />


                    <List>
                        {analysisError.errors.map((errorItem: ErrorItem) => {
                            const value = errorItem.error;

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
                                            inputProps={{ 'aria-labelledby': value }} />
                                    </ListItemIcon>
                                    <ListItemText id={value} primary={value} />
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
