import React, { FC } from 'react';
import Sequence from './Sequence';
import { Card, List } from '@material-ui/core';
import { TestGroup, TestSequence } from 'models/models';
import useStyles from './styles';

const SequenceList: FC<TestGroup> = ({ test_sequences }) => {
  const styles = useStyles();
  const sequences = test_sequences.map((sequenceProps: TestSequence, index: number) => (
    <Sequence {...sequenceProps} key={index} />
  ));
  return (
    <Card className={styles.sequenceList}>
      <List>{sequences}</List>
    </Card>
  );
};

export default SequenceList;
