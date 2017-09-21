/**
 * Created by san on 2017/9/15.
 */
const HomePage = resolve => require(['../components/Page1'], resolve)
export default [
  {
    path: '/',
    name: 'HomePage',
    meta: {
      title: 'vue_cordova_home'
    },
    component: HomePage
  }
]
