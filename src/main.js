import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/styles/styleSheet.css';

// import VueI18n from 'vue-i18n'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import ruLocale from 'element-ui/lib/locale/lang/ru-RU'
// import uaLocale from 'element-ui/lib/locale/lang/ua'
// import enLang from '@/lang/en'
// import ruLang from '@/lang/ru'
// import uaLang from '@/lang/ua'

// Vue.use(VueI18n)

const app = createApp(App)
app
  .use(ElementPlus)
  .use(router)

router.isReady().then(() => {
  app.mount('#app')
})
