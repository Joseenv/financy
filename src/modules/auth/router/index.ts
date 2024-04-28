export default {
  name: 'auth',
  component: () => import('../layouts/AuthLayout.vue'),
  children: [
    {
      path: '',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('../views/RegisterPage.vue')
    }
  ]
}
