import React, { FC } from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import useStyles from './styles';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import { green, red } from '@material-ui/core/colors';
import { Test, Result } from 'models/models';

interface TestListProps {
  tests: Test[];
}

const TestList: FC<TestListProps> = ({ tests }) => {
  const styles = useStyles();
  return (
    <List className={styles.root}>
      {tests.map((test, index) => (
        <ListItem key={index} className={index % 2 === 1 ? styles.testListItemAlternateRow : ''}>
          <ListItemIcon>
            {test.result === Result.Success ? (
              <CheckIcon style={{ color: green[500] }} />
            ) : (
              <CancelIcon style={{ color: red[500] }} />
            )}
          </ListItemIcon>
          <ListItemText primary={test.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default TestList;
