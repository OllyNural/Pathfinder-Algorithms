import React, { useContext, useState } from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText';
import AppContext from '../AppContext';
import SpeedSlider from './speedSlider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '&$selected': {
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
        },
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
    },
    selected: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    }
  }),
);

export default function SettingsPanel() {
  const classes = useStyles({});

  const { state, dispatch } = useContext<AppContext>(AppContext)

  const [selected, setSelected] = useState<number>(0)

  const dispatchAlgorithm = (text: string, index: number) => {
    setSelected(index)
    dispatch({ currentAlgorithm: text })
  }

  return (
    <>
      <Typography variant={'subtitle1'} >Algorithm Choice</Typography>
      <List>
        {["Dijkstra", "A*"].map((text, index) => (
          <MenuItem
            classes={{
              root: classes.root,
              selected: classes.selected
            }}
            selected={selected === index} button key={text} onClick={() => dispatchAlgorithm(text, index)}>
            <ListItemText primary={text} />
          </MenuItem>
        ))}
      </List>
      <Divider />
      <SpeedSlider />
      <Divider />
    </>
  );
}
