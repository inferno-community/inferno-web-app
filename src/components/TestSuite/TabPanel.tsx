import { Box } from '@material-ui/core';
import React, { FC } from 'react';

interface TabPanelProps {
  index: number;
  currentPanelIndex: number;
}

const TabPanel: FC<TabPanelProps> = ({ index, currentPanelIndex, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={currentPanelIndex !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {currentPanelIndex === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
