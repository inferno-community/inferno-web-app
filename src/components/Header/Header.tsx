import React, { FC } from 'react';
import useStyles from './styles';
import logo from 'images/inferno_logo.png';
import { Chip, Container } from '@material-ui/core';

interface HeaderProps {
  chipLabel?: string;
}

const Header: FC<HeaderProps> = ({ chipLabel }) => {
  const styles = useStyles();
  return (
    <header className={styles.header}>
      <Container maxWidth="md">
        <img src={logo} alt="inferno logo" className={styles.logo} />
        {chipLabel && <Chip label={chipLabel} size="small" />}
      </Container>
    </header>
  );
};

export default Header;
