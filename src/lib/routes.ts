const DASHBOARD = "/dashboard"

// const Routes = (() => {
//     const _dashboard = "/dashboard"

//     return {
//         HOME: "/",
//         DASHBOARD: _dashboard,
//         ANALYTICS: `${_dashboard}/analytics`,
//         CONFIGURATOR: `${_dashboard}/configurator`,
//         CONFIGURATOR_PREVIEW: `${_dashboard}/configurator/preview`,

//         shouldUseDashboardTemplate(route: string) {
//             /**
//              * The routes in this array are exempted from using Dashboard template
//              * Which include, side bar, header, ...
//              */
//             const exceptions = [this.CONFIGURATOR_PREVIEW]

//             return route.startsWith(this.DASHBOARD) && !exceptions.includes(route)
//         }
//     }
// })()

const Routes = {
    HOME: "/",
    DASHBOARD: DASHBOARD,
    ANALYTICS: `${DASHBOARD}/analytics`,
    CONFIGURATOR: `${DASHBOARD}/configurator`,
    CONFIGURATOR_PREVIEW: `${DASHBOARD}/configurator/preview`,

    shouldUseDashboardTemplate(route: string) {
        /**
         * The routes in this array are exempted from using Dashboard template
         * Which include, side bar, header, ...
         */
        const exceptions = [this.CONFIGURATOR_PREVIEW]

        return route.startsWith(this.DASHBOARD) && !exceptions.includes(route)
    }
}

export default Routes