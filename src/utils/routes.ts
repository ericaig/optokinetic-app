const DASHBOARD = "/dashboard"

const Routes = {
    HOME: "/",
    DASHBOARD: DASHBOARD,
    ANALYTICS: `${DASHBOARD}/analytics`,
    CONFIGURATOR: `${DASHBOARD}/configurator`,
    CONFIGURATOR_PREVIEW: `${DASHBOARD}/configurator/preview`,
    CUSTOMERS_LIST: `${DASHBOARD}/customers`,
    CUSTOMER_CREATE: `${DASHBOARD}/customers`,
    CUSTOMER_EDIT: `${DASHBOARD}/customers`,
}

export default Routes

export function shouldUseDashboardTemplate(route: string) {
    /**
     * The routes in this array are exempted from using Dashboard template
     * Which include, side bar, header, ...
     */
    const exceptions = [Routes.CONFIGURATOR_PREVIEW]

    return route.startsWith(Routes.DASHBOARD) && !exceptions.includes(route)
}