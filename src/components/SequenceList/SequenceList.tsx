import React, { FC } from 'react';
import Sequence, { SequenceProps } from './Sequence';
import { List } from '@material-ui/core';
import RequirementsModal, { SequenceRequirement } from '../RequirementsModal';

interface SequenceListProps {
  header: string;
  sequenceInfo: SequenceProps[];
}

const SequenceList: FC<SequenceListProps> = ({ header, sequenceInfo }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [requirements, setRequirements] = React.useState<SequenceRequirement[]>([]);

  function showRequirementsModal(requirements: SequenceRequirement[]) {
    setRequirements(requirements);
    setModalVisible(true);
  }

  const sequences = sequenceInfo.map((sequenceProps: SequenceProps, index: number) => (
    <div>
      <Sequence {...sequenceProps} key={index} showRequirementsModal={showRequirementsModal} />
    </div>
  ));
  return (
    <div>
      <List>{sequences}</List>
      <RequirementsModal
        hideModal={() => setModalVisible(false)}
        modalVisible={modalVisible}
        requirements={requirements}
      />
    </div>
  );
};

export default SequenceList;
