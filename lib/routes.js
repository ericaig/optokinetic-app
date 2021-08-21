const Routes = (() => {
    const _dashboard = "/dashboard"

    return {
        HOME: "/",
        DASHBOARD: _dashboard,
        ANALYTICS: `${_dashboard}/analytics`,
        CONFIGURATOR: `${_dashboard}/configurator`,
    }
})()

export default Routes