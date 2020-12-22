import React, { FC } from 'react';
import Sequence, { SequenceProps } from './Sequence';
import { List } from '@material-ui/core';

interface SequenceListProps {
  header: string;
  sequenceInfo: SequenceProps[];
}

const SequenceList: FC<SequenceListProps> = ({ header, sequenceInfo }) => {
  const sequences = sequenceInfo.map((sequenceProps: SequenceProps, index: number) => (
    <Sequence {...sequenceProps} key={index} />
  ));
  return <List>{sequences}</List>;
};

export default SequenceList;
