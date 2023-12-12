import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import NavBar from '@/components/NavBar';

const Layout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`,
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>

      <GridItem area='main' padding={4}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Layout;
