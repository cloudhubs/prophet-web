import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import CommentIcon from '@material-ui/icons/Comment';
import {useGlobalState} from "../state";
import { IconButton, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import RepositoryForm from './RepositoryForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      // maxWidth: 410,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default function ConfigList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [vConfigMultiple, uConfigMultiple] = useGlobalState('configMultiple');

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

  const onRemove = (index: number) => {
      if (vConfigMultiple.length > 1){
        let newVal =JSON.parse(JSON.stringify(vConfigMultiple));
        newVal.splice(index, 1);
        uConfigMultiple(newVal);
      }
  }

  return (
    <List className={classes.root}>

      {vConfigMultiple.map((cm, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem key={index} role={undefined} dense button>
            {/* <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon> */}
            <ListItemText id={labelId} >
              <RepositoryForm index={index} key={index}/>
            </ListItemText>
            {/* <ListItemText id={labelId} primary={`Monolith`}></ListItemText> */}
            <ListItemIcon>

              <Tooltip title="Monolith">
              <Checkbox
                    edge="start"
                    // checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}/>
              </Tooltip>
            </ListItemIcon>
            <ListItemSecondaryAction>
              <Tooltip title="Remove">
                <IconButton edge="end" aria-label="comments" onClick={(e) => onRemove(index)}>
                  <DeleteIcon/>
                </IconButton>
              </Tooltip>
              
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}