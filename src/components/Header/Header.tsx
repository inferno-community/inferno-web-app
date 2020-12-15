import React, { FC } from 'react';
import useStyles from './styles';
import logo from 'images/inferno_logo.png';
import { Chip } from '@material-ui/core';

interface HeaderProps {
  chipLabel?: string;
}

const Header: FC<HeaderProps> = ({ chipLabel }) => {
  const styles = useStyles();
  return (
    <header>
      <img src={logo} alt="inferno logo" className={styles.logo} />
      {chipLabel && <Chip label={chipLabel} size="small" />}
    </header>
  );
};

export default Header;
