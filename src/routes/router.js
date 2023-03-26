import {createRouter, createWebHistory } from "vue-router";
import MainPageRout from "@/components/Main/MainPageRout";
import ServicesBar from "@/components/Main/MainPageComponents/ServicesBar";
import OneService from "@/components/OneService"
import ReviewsBar from "@/components/Main/MainPageComponents/ReviewsBar"
import DossierBar from "@/components/Main/MainPageComponents/DossierBar"
import BlogBar from "@/components/Main/MainPageComponents/BlogBar"
import OneBlogEntries from "@/components/OneBlogEntries"
import ContactsBar from "@/components/ContactsBar"
import SloganBar from "@/components/Main/MainPageComponents/SloganBar"

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPageRout,
    props: true,
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesBar,
    props: true,
  },
  {
    path: '/services/:val',
    name: 'OneService',
    component: OneService,
    props: true,
  },
  {
    path: '/review',
    name: 'review',
    component: ReviewsBar,
    props: true,
  },
  {
    path: '/dossier',
    name: 'dossier',
    component: DossierBar,
    props: true,
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogBar,
    props: true,
  },
  {
    path: '/blog/:name',
    name: 'OneBlogEntries',
    component: OneBlogEntries,
    props: true,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsBar,
    props: true,
  },
  {
    path: '/slogan',
    name: 'slogan',
    component: SloganBar,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router