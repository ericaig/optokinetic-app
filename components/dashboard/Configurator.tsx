import React, { useEffect, useState, forwardRef } from 'react';
import { Paper, Tab, Tabs, Grid, Box, Fade } from '@material-ui/core';
import PageControls from './PageControls';
import ParticlesControls from './ParticlesControls';
import DotControls from './DotControls';

enum TabEnums {
  PAGE = 0,
  PARTICLES = 1,
  DOT = 2,
}

const ControlWithForwardedRef = forwardRef((props, ref) => {
  return <Box ref={ref} {...props}>{props.children}</Box>
})

export default function Configurator() {
  const [selectedTab, setSelectedTab] = useState(TabEnums.PARTICLES);
  const handleChange = (_: any, _value: number) => setSelectedTab(_value)

  const getSelectedTabComponent = () => {
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

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: (theme) => theme.spacing(3) }}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          // centered
          aria-label="Tabs"
        >
          <Tab value={TabEnums.PAGE} label="Page" aria-label="Page tab" />
          <Tab value={TabEnums.PARTICLES} label="Particles" aria-label="Particles tab" />
          <Tab value={TabEnums.DOT} label="Dot" aria-label="Dot tab" />
        </Tabs>
      </Box>

      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper aria-label="Preview panel" elevation={0} sx={{ p: 2, border: 1, borderColor: 'divider' }}>
              Preview
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            {/* {getSelectedTabComponent()} */}

            <div style={{ display: `${selectedTab === TabEnums.PAGE ? 'block' : 'none'}` }}>
              <Fade easing={{exit: "0"}} in={selectedTab === TabEnums.PAGE}>
                <div><PageControls /></div>
              </Fade>
            </div>
            <div style={{ display: `${selectedTab === TabEnums.PARTICLES ? 'block' : 'none'}` }}>
              <Fade easing={{exit: "0"}} in={selectedTab === TabEnums.PARTICLES} >
                <div><ParticlesControls /></div>
              </Fade>
            </div>
            <div style={{ display: `${selectedTab === TabEnums.DOT ? 'block' : 'none'}` }}>
              <Fade easing={{exit: "0"}} in={selectedTab === TabEnums.DOT} >
                <div><DotControls /></div>
              </Fade>
            </div>
          </Grid>
        </Grid>
      </Box>

      {/* <Box flexGrow={1}>
        <Grid container columnSpacing={{ xs: 0, lg: 2 }} rowSpacing={{ lg: 0, xs: 2, }}>
          <Grid item md={12} lg={6} flexGrow={1}>
            <Box marginTop={2} >
              <Typography variant="subtitle1" color="secondary" paddingLeft={2} marginBottom={2}>
                Page configs
              </Typography>
            </Box>
            <PageControls />
          </Grid>
          <Grid item md={12} lg={6} flexGrow={1}>
            <Box marginTop={2} >
              <Typography variant="subtitle1" color="secondary" paddingLeft={2} marginBottom={2}>
                Particles configs
              </Typography>
            </Box>
            <ParticlesControls />
          </Grid>
          <Grid item md={12} lg={6} flexGrow={1}>
            <Box marginTop={2} >
              <Typography variant="subtitle1" color="secondary" paddingLeft={2} marginBottom={2}>
                Dot configs
              </Typography>
            </Box>
            <DotControls />
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  );
}
