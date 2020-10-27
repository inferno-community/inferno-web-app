import React, { FC } from 'react';
import useStyles from './styles';

const Header: FC = () => {
  const styles = useStyles();
  return <div className={styles.header}>Inferno</div>;
};

export default Header;
