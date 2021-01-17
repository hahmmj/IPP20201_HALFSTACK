
import HomePage from '../pages/home.f7.html';
import LeftPanel from '../pages/leftpanel.f7.html';
import Cart from '../pages/cart.f7.html';
import Search from '../pages/search.f7.html';
import Lifelikeui from '../pages/Lifelikeui.f7.html';
import Article_Overview from '../pages/article_overview.f7.html';
import Checkout_Page from '../pages/checkout_page.f7.html';
import Article_Info from '../pages/article_info.f7.html';
import Lifelikeui_left from '../pages/lifelikeui_left.f7.html';
import Lifelikeui_right from '../pages/lifelikeui_right.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/leftpanel',
    component: LeftPanel,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/lifelikeui',
    component: Lifelikeui,
  },
  {
    path: '/article_overview',
    component: Article_Overview,
  },
  {
    path: '/checkout_page',
    component: Checkout_Page,
  },
  {
    path: '/info',
    component: Article_Info
  },
  {
    path: '/lifelikeui_left',
    component: Lifelikeui_left
  },
  {
    path: '/lifelikeui_right',
    component: Lifelikeui_right,
  }
];

export default routes;