var routes = [
  // Index page
  {
    path: '/home',
    url: './index.html',
    name: 'home',
  },
  {
    path: '/cart/',
    url: './pages/cart.html'
  },
  {
    path: '/cart2/',
    componentUrl: './pages/cart2.html'
  },
  {
    path: '/fruit/',
    componentUrl: './pages/lifelikeui_fruit.html'
  },
  {
    path: '/fruit_left/',
    componentUrl: './pages/lifelikeui_fruit_left.html'
  },
  {
    path: '/fruit_right/',
    componentUrl: './pages/lifelikeui_fruit_right.html'
  },
  {
    path: '/fruit/banana/',
    componentUrl: './pages/article_overview_banana.html'
  },
  {
    path: '/fruit/apples/',
    componentUrl: './pages/article_overview_apples.html',
  },
  {
    path: '/fruit/pineapples/',
    componentUrl: './pages/article_overview_pineapples.html',
  },
  {
    path: '/fruit/oranges/',
    componentUrl: './pages/article_overview_oranges.html',
  },
  {
    path: '/vegetable/zucchini/',
    componentUrl: './pages/article_overview_zucchini.html',
  },
{
    path: '/search',
    url: './pages/search.html'
},
{
  path: '/checkout_page_1/',
  url: './pages/checkout_page_1.html'
},
{
  path: '/checkout_page_2/',
  url: './pages/checkout_page_2.html'
},
{
  path: '/info',
  url: './pages/info.html'
},
{
  path: '/comment_page',
  url: './pages/comment_page.html'
},
{
  path: '/comment_page2',
  url: './pages/comment_page2.html'
},
{
  path: '/lifelikeui_vegetable/' ,
  componentUrl: './pages/lifelikeui_vegetable.html'
},
{
  path: '/lifelikeui_vegetable2/' ,
  componentUrl: './pages/lifelikeui_vegetable2.html'
},
{
  path: '/lifelikeui_vegetable_left/' ,
  componentUrl: './pages/lifelikeui_vegetable_left.html'
},
{
  path: '/lifelikeui_vegetable_right/' ,
  componentUrl: './pages/lifelikeui_vegetable_right.html'
},
{
  path: '/vegetable/onion/',
  componentUrl: './pages/article_overview_onion.html',
},
{
  path: '/vegetable/potato/',
  componentUrl: './pages/article_overview_potato.html',
},
{
  path: '/vegetable/bell_pepper/',
  componentUrl: './pages/article_overview_bell_pepper.html',
},
{
  path: '/vegetable/cabbage/',
  componentUrl: './pages/article_overview_cabbage.html',
},










  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
