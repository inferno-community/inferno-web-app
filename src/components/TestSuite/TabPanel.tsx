import React, { FC } from 'react';
import useStyles from './styles';

interface TabPanelProps {
  index: number;
  currentPanelIndex: number;
}

const TabPanel: FC<TabPanelProps> = ({ index, currentPanelIndex, children }) => {
  const styles = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={currentPanelIndex !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {currentPanelIndex === index && <div className={styles.nested}>{children}</div>}
    </div>
  );
};

export default TabPanel;
