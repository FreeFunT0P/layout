import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/styles/styleSheet.css';
// import MainPage from "@/components/MainPage"

// import VueI18n from 'vue-i18n'
// import ElementLocale from 'element-ui/lib/locale'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import ruLocale from 'element-ui/lib/locale/lang/ru-RU'
// import uaLocale from 'element-ui/lib/locale/lang/ua'
// import enLang from '@/lang/en'
// import ruLang from '@/lang/ru'
// import uaLang from '@/lang/ua'

// Vue.use(ElementUI, { locale: ruLocale })
// Vue.use(ElementUI)
// Vue.use(VueI18n)

const myV3App = createApp(App)
// myV3App.component('MainPage', MainPage)
myV3App
  .use(ElementPlus)
  .use(router)

myV3App.mount('#app')
