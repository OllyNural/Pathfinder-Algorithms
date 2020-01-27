import React, { useContext, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Box } from '@material-ui/core';
import AppContext from '../AppContext';
import SpeedSlider from './speedSlider';
import SettingsCheckbox from './settingsCheckbox'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

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
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

export default function SettingsPanel() {
  const classes = useStyles({});

  const { dispatch } = useContext<AppContext>(AppContext)

  const [selected, setSelected] = useState<string>('Dijkstra')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = (event.target as HTMLInputElement).value
    setSelected(text);
    dispatch({ currentAlgorithm: text })
  };

  return (
    <>
      <div className={classes.menuSectionContainer} >
        <Typography variant={'h6'} >Algorithm</Typography>
        <List>
          <Box pl={2}>
            <FormControl component="fieldset" >
              <RadioGroup aria-label="gender" name="gender1" value={selected} onChange={handleChange}>
                {["Dijkstra", "A*"].map((text, index) => (
                  <FormControlLabel
                    value={text}
                    control={<Radio color="primary" />}
                    label={text}
                    disabled={text === 'A*' ? true : false}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </List>
      </div>
      <Divider variant="middle" />
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
