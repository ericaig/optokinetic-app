import React, { useEffect, useState, forwardRef } from 'react';
import { Paper, Tab, Tabs, Grid, Box, Fade } from '@material-ui/core';
import PageControls from './PageControls';
import ParticlesControls from './ParticlesControls';
import DotControls from './DotControls';
import ConfiguratorProvider from '@contexts/ConfiguratorContext';

enum TabEnums {
  PAGE = 0,
  PARTICLES = 1,
  DOT = 2,
}

function renderControl(isVisible: boolean, child: JSX.Element): JSX.Element {
  return <div style={{ display: `${isVisible ? 'block' : 'none'}` }}>
    <Fade easing={{ exit: "0" }} in={isVisible}>
      <div>{child}</div>
    </Fade>
  </div>
}

// function RenderControl({isVisible, children}: { isVisible: boolean, children: any }) {
//   return <div style={{ display: `${isVisible ? 'block' : 'none'}` }}>
//     <Fade easing={{ exit: "0" }} in={isVisible}>
//       <div>{children}</div>
//     </Fade>
//   </div>
// }

export default function Configurator() {
  const [selectedTab, setSelectedTab] = useState(TabEnums.PAGE);
  const handleChange = (_: any, _value: number) => setSelectedTab(_value)

  return (
    <ConfiguratorProvider>
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
              {/* <RenderControl isVisible={selectedTab === TabEnums.PAGE}>
                <PageControls />
              </RenderControl> */}

              {renderControl(selectedTab === TabEnums.PAGE, <PageControls />)}
              {renderControl(selectedTab === TabEnums.PARTICLES, <ParticlesControls />)}
              {renderControl(selectedTab === TabEnums.DOT, <DotControls />)}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ConfiguratorProvider>
  );
}
