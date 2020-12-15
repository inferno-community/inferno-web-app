import React, { FC } from 'react';
import ListItem from '@material-ui/core/ListItem';
import TestList, { Test } from './TestList/TestList';
import useStyles from './styles';
import {
  Collapse,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tab,
  Tabs,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { green, red } from '@material-ui/core/colors';
import { IconButton } from '@material-ui/core';
import TabPanel from './TabPanel';

interface SequenceProps {
  testList: Test[];
  title: string;
  description: string;
  result: SequenceResult;
}

export enum SequenceResult {
  Success,
  Failure,
  Skipped,
  None,
}

const SequenceList: FC<SequenceProps> = ({ testList, title, description, result }) => {
  const styles = useStyles();
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          {result === SequenceResult.Success ? (
            <CheckIcon style={{ color: green[500] }} />
          ) : (
            <CancelIcon style={{ color: red[500] }} />
          )}
        </ListItemIcon>
        <ListItemText primary={title} secondary={description} />
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemSecondaryAction>
          <IconButton edge="end">
            <PlayArrowIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Tabs value={value} className={styles.tabs} onChange={handleChange} variant="fullWidth">
          <Tab label="Test Results" />
          <Tab label="HTTP Requests" />
          <Tab label="About" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <TestList tests={testList}></TestList>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Http requests here
        </TabPanel>
        <TabPanel value={value} index={2}>
          About Page
        </TabPanel>
      </Collapse>
    </div>
  );
};

export default SequenceList;
