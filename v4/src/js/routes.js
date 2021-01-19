
import HomePage from '../pages/home.f7.html';
import LeftPanel from '../pages/leftpanel.f7.html';
import Cart from '../pages/cart.f7.html';
import Search from '../pages/search.f7.html';
import Lifelikeui from '../pages/Lifelikeui.f7.html';
import Article_Overview from '../pages/article_overview.f7.html';
import Checkout_Page_1 from '../pages/checkout_page_1.f7.html';
import Checkout_Page_2 from '../pages/checkout_page_2.f7.html';
import Article_Info from '../pages/info.f7.html';
import Comments from '../pages/comment_page.f7.html';
import Comments2 from '../pages/comment_page2.f7.html';
import Lifelikeui_left from '../pages/lifelikeui_left.f7.html';
import Lifelikeui_right from '../pages/lifelikeui_right.f7.html';
import Lifelikeui_vegetable from '../pages/lifelikeui_vegetable.f7.html';
import Lifelikeui_vegetable2 from '../pages/lifelikeui_vegetable2.f7.html';
import Lifelikeui_vegetable_right from '../pages/lifelikeui_vegetable_right.f7.html';
import Lifelikeui_vegetable_left from '../pages/lifelikeui_vegetable_left.f7.html';

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
    path: '/checkout_page_1',
    component: Checkout_Page_1,
  },
  {
    path: '/checkout_page_2',
    component: Checkout_Page_2,
  },
  {
    path: '/info',
    component: Article_Info
  },
  {
    path: '/comment_page',
    component: Comments
  },
  {
    path: '/comment_page2',
    component: Comments2
  },
  {
    path: '/lifelikeui_left',
    component: Lifelikeui_left
  },
  {
    path: '/lifelikeui_right',
    component: Lifelikeui_right,
  },
  {
    path: '/lifelikeui_vegetable',
    component: Lifelikeui_vegetable,
  },
  {
    path: '/lifelikeui_vegetable2',
    component: Lifelikeui_vegetable2,
  },
  {
    path: '/lifelikeui_vegetable_left',
    component: Lifelikeui_vegetable_left,
  },
  {
    path: '/lifelikeui_vegetable_right',
    component: Lifelikeui_vegetable_right,
  },
];

export default routes;