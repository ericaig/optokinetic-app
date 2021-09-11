import React, { useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import AppTitle from "@components/dashboard/AppTitle";
import particles from '@lib/particles';

// import '@src/styles/particles.css'

export default function ConfiguratorPreviewPage() {
    const pageTitle = "Configurator Preview"

    return (
        <>
            <AppTitle title={pageTitle} />
            <Particles
                id="tsparticles"
                // options={particles}
                // className={particlesClassNames}
            />
        </>
    )
}