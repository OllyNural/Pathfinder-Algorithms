import React, { useContext, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Box } from '@material-ui/core';
import AppContext from '../AppContext';
import SpeedSlider from './speedSlider';
import SettingsCheckbox from './settingsCheckbox'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      marginBottom: '5px',
      '&$selected': {
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
        },
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
    },
    menuSectionContainer: {
      padding: '15px',
      textAlign: 'left',
    },
    selected: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    }
  }),
);

export default function SettingsPanel() {
  const classes = useStyles({});

  const { dispatch } = useContext<AppContext>(AppContext)

  const [selected, setSelected] = useState<number>(0)

  const dispatchAlgorithm = (text: string, index: number) => {
    setSelected(index)
    dispatch({ currentAlgorithm: text })
  }

  return (
    <>
      <div className={classes.menuSectionContainer} >
        <Typography variant={'h6'} >Algorithm</Typography>
        <List>
          {["Dijkstra", "A*"].map((text, index) => (
            <MenuItem
              classes={{
                root: classes.root,
                selected: classes.selected
              }}
              selected={selected === index} button key={text} onClick={() => dispatchAlgorithm(text, index)}>
              {selected === index ? <DoubleArrowIcon /> : ''}
              <ListItemText primary={text} />
            </MenuItem>
          ))}
        </List>
      </div>
      <Divider variant="middle"/>
      <div className={classes.menuSectionContainer} >
        <Box pl={1}>
          <Typography variant={'h6'}>Options</Typography>
        </Box>
        <Box pl={2} mt={1} >
          <SettingsCheckbox disabled={true} label={'Allow Diagonal'} />
        </Box>
        <Box pl={2} mt={1} >
          <SettingsCheckbox disabled={true} label={'Allow Bi-Directional'} />
        </Box>
        <Box pl={2} mt={1} >
          <SpeedSlider />
        </Box>
      </div>
      <Divider />
    </>
  );
}
