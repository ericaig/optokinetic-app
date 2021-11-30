const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const i18n = require('./i18n')
const nextTranslate = require('next-translate')
const path = require('path')

const nextConfig = (phase, { defaultConfig }) => {

    /**
     * Configurations for all build phases (dev, prod, ...)
     */
    const configsForAllPhases = {
        i18n
    }

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            /* development only config options here */
            env: {},
            ...configsForAllPhases
        }
    }

    return {
        /* config options for all phases except development here */
        env: {},
        ...configsForAllPhases
    }
}

module.exports = nextTranslate(nextConfig)