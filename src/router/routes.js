/*
 * @Author: Do not edit
 * @Date: 2020-11-19 23:23:09
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-20 22:11:56
 * @Description:
 * @FilePath: /quasar_todo/src/router/routes.js
 */

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Todo.vue') },
      { path: '/help', component: () => import('pages/Help.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
