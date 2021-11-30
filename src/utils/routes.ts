const dashboard = "/dashboard"

const Routes = {
    home: "/",
    dashboard: dashboard,
    analytics: `${dashboard}/analytics`,
    configurator: `${dashboard}/configurator`,
    configuratorPreview: `${dashboard}/configurator/preview`,
    clientsList: `${dashboard}/clients`,
    clientCreate: `${dashboard}/clients/create`,
    clientEdit: (id: string) => `${dashboard}/clients/${id}/edit`,
    clientView: (id: string) => `${dashboard}/clients/${id}/view`,
}

export default Routes

export function shouldUseDashboardTemplate(route: string) {
    /**
     * The routes in this array are exempted from using Dashboard template
     * Which include, side bar, header, ...
     */
    const exceptions = [Routes.configuratorPreview]

    return route.startsWith(Routes.dashboard) && !exceptions.includes(route)
}