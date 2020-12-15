import { Box, Typography } from '@material-ui/core';
import React, { FC } from 'react';

interface TabPanelProps {
  index: number;
  value: number;
}

const TabPanel: FC<TabPanelProps> = ({ index, value, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
