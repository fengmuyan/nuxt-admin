const getters = {
  userInfo: state => state.user.userInfo,
  scrollTop: state => state.view.scrollTop,
  navActiveIndex: state => state.view.navActiveIndex,
  visitedViews: state => state.tagsView.visitedViews,
  menu: state => state.index.menu,
}
export default getters