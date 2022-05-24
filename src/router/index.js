import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
  path:'/',
  name:'base',
  component: () => import('../views/Base.vue'),
  children: [{
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path:'/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/topic',
    name: 'topic',
    component: () => import(/* webpackChunkName: "about" */ '../views/Topic/Topic.vue')
  },
  {
    path: '/topic/detail',
    name: 'topicdetail',
    component: () =>import('../views/Topic/TopicDetail.vue')
  },
  {
    path: '/topic/edit',
    name: 'topicDtEditor',
    component: () =>import('../views/Topic/TopicEditor.vue')
  },
  {
    path: '/book',
    name: 'book',
    component: () =>import('../views/book/Book.vue')
  },
  {
    path: '/book/comment',
    name: 'bookcomment',
    component: () =>import('../views/book/BookComment.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../views/editors/CommentEditor.vue')
  },
  {
    path: '/passage',
    name: 'passage',
    component: () => import('../views/Passage.vue')
  },
  {
    path: '/person',
    name: 'person',
    component: () => import('../views/user/Person.vue')
  }, 
    {
      path: '/group',
      name: 'group',
      component: () => import('../views/group/group.vue')
    },
    {
      path: '/group/main',
      name: 'groupmain',
      component: () => import('../views/group/GroupMain.vue')
    },
    {
      path: '/group/addgroup',
      name: 'groupadd',
      component: () => import('../views/group/GroupAdd.vue')
    },
    {
      path: '/group/commit',
      name: 'groupcommit',
      component: () => import('../views/group/GroupCommit.vue')
    },
    {
      path: '/group/reply',
      name: 'groupreply',
      component: () => import('../views/group/GroupReply.vue')
    },
    {
      path: '/group/recommend',
      name: 'grouprecommend',
      component: () => import('../views/group/GroupRecommit.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/user/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/user/Register.vue')
    },
    {
      path: '/GroupHome',
      name: 'GroupHome',
      component: () => import('../views/group/GroupHome.vue')
    },
    {
      path: '/groupinit',
      name: 'Groupinit',
      component: () => import('../views/group/groupinit.vue')
    },
  ]
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
   //在此处加入以下内容
   scrollBehavior(to,from,saveTop){
    if(saveTop){
      return saveTop;
    }else{
      return {x:0,y:0}
    }
  },
})

export default router
