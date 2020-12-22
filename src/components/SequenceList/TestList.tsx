import React, { FC } from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import useStyles from './styles';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import { green, red } from '@material-ui/core/colors';

export interface TestListProps {
  tests: Test[];
}

export interface Test {
  description: string;
  result: TestResult;
}

export enum TestResult {
  Success,
  Failure,
  Skipped,
  None,
}

const TestList: FC<TestListProps> = ({ tests }) => {
  const styles = useStyles();
  return (
    <List className={styles.root}>
      {tests.map((test, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            {test.result === TestResult.Success ? (
              <CheckIcon style={{ color: green[500] }} />
            ) : (
              <CancelIcon style={{ color: red[500] }} />
            )}
          </ListItemIcon>
          <ListItemText primary={test.description} />
        </ListItem>
      ))}
    </List>
  );
};

export default TestList;
