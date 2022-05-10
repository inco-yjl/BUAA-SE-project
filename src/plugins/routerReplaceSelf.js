export default{
  methods:{
// 监听路由跳转结束后，跳转到页面顶部
routeChangeComplete = () => {
  window.scrollTo(0, 0);
},
// 开启和关闭滑动监听
componentDidMount() {
  window.addEventListener('scroll', this.handleScroll, true);

  Router.events.on('routeChangeComplete', this.routeChangeComplete);
},

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll, true);
  Router.events.off('routeChangeStart', this.routeChangeComplete);
}
  }

}

