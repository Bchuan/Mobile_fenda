import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Login from '@/view/login'
import Ask from '@/view/ask'
import start from '@/view/start'
import smalltalk from '@/view/small_talk/small_talk'
import topic from '@/view/small_talk/topic'
import newcourse from '@/view/small_talk/newcourse'
import pay from '@/view/small_talk/pay'
import player from '@/view/small_talk/player'
import alllist from '@/view/small_talk/alllist'
import listen from '@/view/listen/listen'
import lisDetailQue from '@/view/listen/detailQue'
import bought from '@/view/bought'
import my from '@/view/my'
import answerPage from '@/view/answerPage'
import ansPageSearch from '@/view/ansPageSearch'
import kuaiwen from '@/view/kuaiwen/kuaiwen'
import kuaiwenTopic from '@/view/kuaiwen/kuaiwenTopic'
import kwenDetail from '@/view/kuaiwen/kwenDetail'
import kwenAsk from '@/view/kuaiwen/kwenAsk'
import expert from '@/view/expert/expert'
import workplace from '@/view/expert/workplace'
import polularScience from '@/view/expert/polular_Science'
import health from '@/view/expert/health'
import all from '@/view/expert/all'
import headlines from '@/view/headlines'
import openandanswer from '@/view/my/openandanswer'
import cents from '@/view/my/cents'
import setup from '@/view/my/set/setup'
import validate from '@/view/my/set/validate'
import binding from '@/view/my/set/binding'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'start',
      meta: {
        keepAlive: true
      },
      component: Index,
      children: [
        {
          path: 'start',
          component: start
        },
        {
          path: 'listen',
          component: listen
        },
        {
          path: 'Ask',
          component: Ask
        },
        {
          path: '/bought',
          component: bought
        },
        {
          path: '/my',
          component: my
        },
        {
          path: '/kuaiwen',
          component: kuaiwen
        },
        {
          path: '/kuaiwenTopic',
          component: kuaiwenTopic
        },
        {
          path: '/kwenDetail',
          component: kwenDetail
        },
        {
          path: '/kwenAsk',
          component: kwenAsk
        }
      ]
    },
    {
      path: '/smalltalk',
      component: smalltalk
    },
    {
      path: '/pay',
      component: pay
    },
    {
      path: '/topic',
      component: topic
    },
    {
      path: '/alllist',
      component: alllist
    },
    {
      path: '/lisDetailQue',
      component: lisDetailQue
    },
    {
      path: '/newcourse',
      component: newcourse
    },
    {
      path: '/player',
      component: player
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/answerPage',
      component: answerPage
    },
    {
      path: '/ansPageSearch',
      component: ansPageSearch
    },
    {
      path: '/expert',
      component: expert
    },
    {
      path: '/headlines',
      component: headlines
    },
    {
      path: '/workplace',
      component: workplace
    },
    {
      path: '/polularScience',
      component: polularScience
    },
    {
      path: '/health',
      component: health
    },
    {
      path: '/all',
      component: all
    },
    {
      path: '/openandanswer',
      component: openandanswer
    },
    {
      path: '/cents',
      component: cents
    },
    {
      path: '/setup',
      component: setup
    },
    {
      path: '/validate',
      component: validate
    },
    {
      path: '/binding',
      component: binding
    }
  ]
})
