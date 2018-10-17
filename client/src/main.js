import Vue from 'vue'
import App from './App'
import '../static/weui/weui.css'
import '../static/css/app.css'
import MpvueRouterPatch from 'mpvue-router-patch'
import store from './store/index'


Vue.prototype.$store=store;

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
