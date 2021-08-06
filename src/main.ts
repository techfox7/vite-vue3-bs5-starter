import 'vue-global-api'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createHead } from '@vueuse/head'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

import './scss/custom.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import '@popperjs/core'
import 'bootstrap'

import App from './App.vue'

const routes = setupLayouts(generatedRoutes)
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes,
})

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})

const head = createHead()

const app = createApp(App)
app.use(head)
app.use(i18n)
app.use(router)
app.mount('#app')
