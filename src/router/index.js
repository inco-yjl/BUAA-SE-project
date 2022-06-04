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
    meta: {
      keepAlive : true 
    },
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
    component: () =>import('../views/editors/TopicEditor.vue')
  },
  {
    path: '/book',
    name: 'book',
    component: () =>import('../views/book/Book.vue')
  },
  {
    path: '/book/detail',
    name: 'bookdetail',
    component: () => import('../views/book/BookDetail.vue')
  },
  {
    path: '/book/comment',
    name: 'bookcomment',
    component: () =>import('../views/book/BookComment.vue')
  },
  {
    path: 'book/editor',
    name: 'bookeditor',
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
    {
      path: '/groupadmin',
      name: 'Groupadmin',
      component: () => import('../views/group/admin.vue')
    },
    {
      path: '/video/movie/detail',
      name: 'moviedetail',
      component: () => import('../views/Video/MovieDetail.vue')
    },
    {
      path: '/video/tele/detail',
      name: 'teledetail',
      component: () => import('../views/Video/TeleDetail.vue')
    }  
  ]
},
{
  path:'/admin/uploadbook',
  component: () => import('../views/admin/UploadBook.vue'),
},
{
  path:'/admin/uploadmovie',
  component: () => import('../views/admin/UploadMovie.vue'),
},
{
  path:'/admin/uploadtele',
  component: () => import('../views/admin/UploadTele.vue'),
},
{
  path:'/admin/uploadgroup',
  component: () => import('../views/admin/UploadGroup.vue'),
},
{
  path:'/admin/uploadtopic',
  component: () => import('../views/admin/UploadTopic.vue'),
}
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
