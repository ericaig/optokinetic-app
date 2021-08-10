import { useState } from 'react';
import { Container, Grid, Paper, styled, Tab, Tabs } from '@material-ui/core';
import Divider from '../components/Divider';
import ParticlesControls from '../components/ParticlesControls';
import PageControls from '../components/PageControls';
import DotControls from '../components/DotControls';


const Preview = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Controls = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

enum TabEnums {
  PAGE = 0,
  PARTICLES = 1,
  DOT = 2,
}

const getSelectedTabComponent = (selectedTab: number) => {
  switch (selectedTab) {
    case TabEnums.PAGE:
      return <PageControls />
    case TabEnums.PARTICLES:
      return <ParticlesControls />
    case TabEnums.DOT:
      return <DotControls />
    default:
      // TODO::  use a generic component here
      return <div>Something went wrong!</div>
  }
}

export default function Index() {
  const [selectedTab, setSelectedTab] = useState(TabEnums.PAGE);
  const handleChange = (e: any, _value: number) => setSelectedTab(_value)

  return (
    <Container>
      <Paper elevation={0}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab value={TabEnums.PAGE} label="Page" />
          <Tab value={TabEnums.PARTICLES} label="Particles" />
          <Tab value={TabEnums.DOT} label="Dot" />
        </Tabs>
      </Paper>

      <Divider />

      <Container maxWidth={'lg'}>
        <Controls elevation={1}>
          {getSelectedTabComponent(selectedTab)}
        </Controls>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Preview>
              left
            </Preview>
          </Grid>
          <Grid item xs={12} md={8}>
            <Controls elevation={1}>
              {getSelectedTabComponent(selectedTab)}
            </Controls>
          </Grid>
        </Grid> */}
      </Container>
    </Container>
  );
}
