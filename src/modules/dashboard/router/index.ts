export default {
  name: 'auth',
  component: () => import('../layouts/DashboardLayout.vue'),
  children: [
    {
      path: '',
      name: 'overview',
      component: () => import('../views/OverviewPage.vue')
    },
    {
      path: 'savings',
      name: 'savings',
      component: () => import('../views/SavingsPage.vue')
    },
    {
      path: 'earnings',
      name: 'earnings',
      component: () => import('../views/EarningsPage.vue')
    },
    {
      path: 'expenses',
      name: 'expenses',
      component: () => import('../views/ExpensesPage.vue')
    }
  ]
}
