// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  navbar: {
    mdCenterTitle: true
  },
  
  data: function () {
    return {
     
    SC: [],

    Bananas: [],
    Apples: [],
    Onions: [],
    Oranges: [],
    Cucumbers: [],
    BellPeppers: [],    
    Potatoes: [],
    Zucchini: [],
    Cabbage: [],
    Pineapples: [],
    
      mockArticleGroups: [{   
        id: "Fruits",
        articleGroup: "Bananas",
        path: "'/article_overview_bananas'",
        articles: [],
        latestArticle () {
            if (!!this.articles.length < 1){
                return "No Articles"
            } else {
                loadArticlesIntoArticleGroup()
            }
        }
    },
    {   
        id: "Fruits",
        articleGroup: "Apples",
        path: "'/article_overview_apples'",
        articles: [],
        latestArticle () {
            if (!!this.articles.length < 1){
                return "No Articles"
            } else {
                loadArticlesIntoArticleGroup()
            }
        }
    },
    {   
        id: "Fruits",
        articleGroup: "Pineapples",
        path: "'/article_overview_pineapples'",
        articles: [],
        latestArticle () {
            if (!!this.articles.length < 1){
                return "No Articles"
            } else {
                loadArticlesIntoArticleGroup()
            }
        }
    },
    {   
        id: "Fruits",
        articleGroup: "Oranges",
        path: "'/article_overview_oranges'",
        articles: [],
        latestArticle () {
            if (!!this.articles.length < 1){
                return "No Articles"
            } else {
                loadArticlesIntoArticleGroup()
            }
        }
    },
    {   
        id: "Vegetables",
        articleGroup: "Onions",
        path: "'/article_overview_onions'",
        articles: [],
        latestArticle () {
            if (!!this.articles.length < 1){
                return "No Articles"
            } else {
                loadArticlesIntoArticleGroup()
            }
        }
    },
    {   
        id: "Vegetables",
        articleGroup: "Cucumbers",
        path: "'/article_overview_cucumbers'",
        articles: [],
        latestArticle () {
            if (!!this.articles.length < 1){
                return "No Articles"
            } else {
                loadArticlesIntoArticleGroup()
            }
        }
    },
    {   
        id: "Vegetables",
        articleGroup: "BellPeppers",
        path: "'/article_overview_bell_pepper'",
        articles: [],
        latestArticle () {
            if (!!this.articles.length < 1){
                return "No Articles"
            } else {
                loadArticlesIntoArticleGroup()
            }
        }
    },
    {   
        id: "Vegetables",
        articleGroup: "Potatoes",
        path: "'/article_overview_potato'",
        articles: [],
        latestArticle () {
            if (!!this.articles.length < 1){
                return "No Articles"
            } else {
                loadArticlesIntoArticleGroup()
            }
        }
    },
    {   
        id: "Vegetables",
        articleGroup: "Zucchini",
        path: "'/article_overview_zucchini'",
        articles: [],
        latestArticle () {
            if (!!this.articles.length < 1){
                return "No Articles"
            } else {
                loadArticlesIntoArticleGroup()
            }
        }
    },
    {   
        id: "Vegetables",
        articleGroup: "Cabbage",
        path: "'/article_overview_cabbage'",
        articles: [],
        latestArticle () {
            if (!!this.articles.length < 1){
                return "No Articles"
            } else {
                loadArticlesIntoArticleGroup()
            }
        }
    },
    ],
    
    
    //app.data.mockArticles
    mockArticles: [
        {
            articleCategory: "Fruits",
            articleGroup: "Bananas",
            articleImage: "./img/Chiquita_banana.PNG",
            articleName: "Chiquita Banana",
            articleRating: "4.5",
            articleQuantity: "1 piece",
            articlePrice: "0.50",
            qtyInSc: 0,
        },
        {
            articleCategory: "Fruits",
            articleGroup: "Bananas",
            articleImage: "./img/Bio banana.PNG",
            articleName: "Bio Banana",
            articleRating: "4.5",
            articleQuantity: "1 piece",
            articlePrice: "0.75",
            qtyInSc: 0,
        },
        {
            articleCategory: "Fruits",
            articleGroup: "Bananas",
            articleImage: "./img/snack banana.PNG",
            articleName: "Snack Banana",
            articleRating: "4.5",
            articleQuantity: "1 piece",
            articlePrice: "0.40",
            isInSC: "false",
            qtyInSc: 0,
        },
        {
            articleCategory: "Fruits",
            articleGroup: "Bananas",
            articleImage: "./img/Lancatan banana.PNG",
            articleName: "Lancatan Banana",
            articleRating: "4.5",
            articleQuantity: "1 piece",
            articlePrice: "0.70",
            isInSC: "false",
            qtyInSc: 0,
        },
        {
            articleCategory: "Fruits",
            articleGroup: "Bananas",
            articleImage: "./img/Dole_banana.PNG",
            articleName: "Dole Banana",
            articleRating: "4.5",
            articleQuantity: "1 piece",
            articlePrice: "0.60",
            qtyInSc: 0,
        },
        {
            articleCategory: "Fruits",
            articleGroup: "Apples",
            articleImage: "./img/pink_lady_apple.PNG",
            articleName: "Pink Lady Apple",
            articleRating: "4.5",
            articleQuantity: "1 piece",
            articlePrice: "0.60",
            qtyInSc: 0,
        },
        {
            articleCategory: "Fruits",
            articleGroup: "Apples",
            articleImage: "./img/pink_lady_apple.PNG",
            articleName: "Pink Sir Apple",
            articleRating: "4",
            articleQuantity: "1 piece",
            articlePrice: "0.50",
            qtyInSc: 0,
        },
        {
            articleCategory: "Fruits",
            articleGroup: "Oranges",
            articleImage: "./img/Orange_Navel.jpg",
            articleName: "Navel Orange",
            articleRating: "5.0",
            articleQuantity: "1 piece",
            articlePrice: "0.50",
            qtyInSc: 0,
        },
        {
            articleCategory: "Fruits",
            articleGroup: "Oranges",
            articleImage: "./img/Orange_Bio.jpg",
            articleName: "Bio Orange",
            articleRating: "4.5",
            articleQuantity: "1 piece",
            articlePrice: "1.00",
            qtyInSc: 0,
        },
        {
            articleCategory: "Fruits",
            articleGroup: "Pineapples",
            articleImage: "./img/pineapple.jpg",
            articleName: "Sweet Pineapple",
            articleRating: "5.0",
            articleQuantity: "1 piece",
            articlePrice: "5.50",
            qtyInSc: 0,
        },
        {
            articleCategory: "Fruits",
            articleGroup: "Pineapples",
            articleImage: "./img/pineapple_bio.jpg",
            articleName: "Bio Pineapple",
            articleRating: "4.5",
            articleQuantity: "1 piece",
            articlePrice: "7.00",
            qtyInSc: 0,
        },
        {
            articleCategory: "Vegetables",
            articleGroup: "Onions",
            articleImage: "./img/white_onions.PNG",
            articleName: "White Onions",
            articleRating: "4.5",
            articleQuantity: "1 kg",
            articlePrice: "1.60",
            qtyInSc: 0,
        },
        {
            articleCategory: "Vegetables",
            articleGroup: "Cucumbers",
            articleImage: "./img/green_cucumber.PNG",
            articleName: "Green Cucumber",
            articleRating: "4.5",
            articleQuantity: "1 piece",
            articlePrice: "0.60",
            qtyInSc: 0,
        },
        {
            articleegory: "Vegetables",
            articleGroup: "BellPeppers",
            articleImage: "./img/Paprika.PNG",
            articleName: "Red Bell Pepper",
            articleRating: "4.5",
            articleQuantity: "1 piece",
            articlePrice: "0.60",
            qtyInSc: 0,
        },
        {
            articleegory: "Vegetables",
            articleGroup: "Potatoes",
            articleImage: "./img/potato.jpg",
            articleName: "Waxy Potatoes ",
            articleRating: "5",
            articleQuantity: "2 kg",
            articlePrice: "4.50",
            qtyInSc: 0,
        },
        {
            articleegory: "Vegetables",
            articleGroup: "Potatoes",
            articleImage: "./img/potato_bio.jpg",
            articleName: "UL Potatoes",
            articleRating: "4.5",
            articleQuantity: "2 kg",
            articlePrice: "5.50",
            qtyInSc: 0,
        },
        {
            articleegory: "Vegetables",
            articleGroup: "Potatoes",
            articleImage: "./img/sweet_potato.jpg",
            articleName: "Sweet Potatoes",
            articleRating: "4.0",
            articleQuantity: "1 kg",
            articlePrice: "2.50",
            qtyInSc: 0,
        },
        {
            articleegory: "Vegetables",
            articleGroup: "Zucchini",
            articleImage: "./img/zucchini.jpg",
            articleName: "Zucchini",
            articleRating: "4.0",
            articleQuantity: "1 piece",
            articlePrice: "1.20",
            qtyInSc: 0,
        },
        {
            articleegory: "Vegetables",
            articleGroup: "Zucchini",
            articleImage: "./img/zucchini_bio.jpeg",
            articleName: "Bio Zucchini",
            articleRating: "4.0",
            articleQuantity: "1 piece",
            articlePrice: "2.00",
            qtyInSc: 0,
        },
        {
            articleegory: "Vegetables",
            articleGroup: "Cabbage",
            articleImage: "./img/Cabbage.jpg",
            articleName: "Green Cabbage",
            articleRating: "4.5",
            articleQuantity: "1 piece",
            articlePrice: "1.50",
            qtyInSc: 0,
        },
        {
            articleegory: "Vegetables",
            articleGroup: "Cabbage",
            articleImage: "./img/Cabbage_red.jpg",
            articleName: "Red Cabbage",
            articleRating: "4.0",
            articleQuantity: "1 piece",
            articlePrice: "2.00",
            qtyInSc: 0,
        },
        
    ]
    };
  },


    

  methods: {

   },
        
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});
