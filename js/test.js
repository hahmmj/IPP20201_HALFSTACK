// test.js
console.log("testjs")

      //sayhello
    // //   function sayhello() {
    // //     console.log("hello!")
    // // }

    // display apples in article elements  
function displayApples() {
  const articleList = document.getElementsByClassName('articleList')
  mockArticles.forEach(element => {
  if(element.articleGroup === "Apples"){            
 Apples.push(element);
  }
}
    );
  Apples.forEach(element => {
      const articleElement = `  <div class="article-element">
                  <div class="picture_article-element">
                      <img src="` + Apples.element.path + `" alt="article" class="article_img">
                  </div>
                  <div class="text_article-element">
                      <p class="name_info">` + Apples.element.articleName + `
                          <a href="/info" class="button button-small"><i class="material-icons button-color">info</i></a>
                      </p>
                      <div class="rating_comments">
                          <a href="/comment_page" class="button button-small"><i class="material-icons rating">star_rate</i></a>
                          <a href="/comment_page">` + Apples.element.articleRating + ` / 5</a>
                      </div>
                      <div class="piece_price">
                          <p>` + Apples.element.articleQuantity + `</p>
                          <p class="price">` + Apples.element.articlePrice + `</p>
                      </div>
                  </div>
                  <div class="addtocart_article-element button">
                      <i class="material-icons">add_shopping_cart</i>
                  </div>
              </div>`
      articleList.innerHTML += articleElement;
  })
}


//_______________________________________________________________________________________________________________________________________________________________________________
// Ab hier nur noch Versuche & Notizen




// let articleGroups = [];
// let articles = [];
 

// function getArticleGroups() {
//     articleGroups = mockArticleGroups;
// }

// function getArticles() {
//     articles = mockArticles;
// }


// load articles into correct Article Group

/*
function loadArticlesIntoArticleGroup() {
    articleGroups.forEach(articleGroup => {
        articles.forEach(article => {
            if (article.articleGroup === articleGroup.id) {
                articleGroup.articles.push(article)
            }
        })
    })
}
*/



// load articles with ag-value banana into Banana[]

// function loadBananas() {
//     mockArticles.forEach(element => {
//     if(element.articleGroup === "Bananas"){            
//    Bananas.push(element);
//     }
//  }
//       );
//  Bananas.forEach(element => console.log(element.articleName));
// }




/*
/**
 * Article Constructor Function
 * @param {string} articleCategory - Name of category.
 * @param {string} articleImage - Image path.
 * @param {string} articleName - Name of article.
 * @param {string} articleRating - Rating of the article.
 * @param {string} articleQuantity - Quantity and uit of the article.
 * @param {string} articlePrice - Price of the article.
 */

 /*
function Article(articleCategory, articleImage, articleName, articleRating, articleQuantity, articlePrice) {
    this.articleCategory = articleCategory;
    this.oarticleImage = articleImage;
    this.articleName = articleName;
    this.articleRating = articleRating;
    this.articleQuantity = articleQuantity;
    this.articlePrice = article.Price;
}
*/


//Data

// const mockArticleGroups = [{   
//     id: "Fruits",
//     articleGroup: "Bananas",
//     path: "'/article_overview_bananas'",
//     articles: [],
//     latestArticle () {
//         if (!!this.articles.length < 1){
//             return "No Articles"
//         } else {
//             loadArticlesIntoArticleGroup()
//         }
//     }
// },
// {   
//     id: "Fruits",
//     articleGroup: "Apples",
//     path: "'/article_overview_apples'",
//     articles: [],
//     latestArticle () {
//         if (!!this.articles.length < 1){
//             return "No Articles"
//         } else {
//             loadArticlesIntoArticleGroup()
//         }
//     }
// },
// {   
//     id: "Fruits",
//     articleGroup: "Oranges",
//     path: "'/article_overview_oranges'",
//     articles: [],
//     latestArticle () {
//         if (!!this.articles.length < 1){
//             return "No Articles"
//         } else {
//             loadArticlesIntoArticleGroup()
//         }
//     }
// },
// {   
//     id: "Vegetables",
//     articleGroup: "Onions",
//     path: "'/article_overview_onions'",
//     articles: [],
//     latestArticle () {
//         if (!!this.articles.length < 1){
//             return "No Articles"
//         } else {
//             loadArticlesIntoArticleGroup()
//         }
//     }
// },
// {   
//     id: "Vegetables",
//     articleGroup: "Cucumbers",
//     path: "'/article_overview_cucumbers'",
//     articles: [],
//     latestArticle () {
//         if (!!this.articles.length < 1){
//             return "No Articles"
//         } else {
//             loadArticlesIntoArticleGroup()
//         }
//     }
// },
// {   
//     id: "Vegetables",
//     articleGroup: "Bell Peppers",
//     path: "'/article_overview_bell_peppers'",
//     articles: [],
//     latestArticle () {
//         if (!!this.articles.length < 1){
//             return "No Articles"
//         } else {
//             loadArticlesIntoArticleGroup()
//         }
//     }
// },
// ],



// mockArticles = [
//     {
//         articleCategory: "Fruits",
//         articleGroup: "Bananas",
//         articleImage: "static/img/Chiquita_banana.PNG",
//         articleName: "Chiquita Banana",
//         articleRating: "4.5",
//         articleQuantity: "1 piece",
//         articlePrice: "0,50",
//     },
//     {
//         articleCategory: "Fruits",
//         articleGroup: "Bananas",
//         articleImage: "static/img/Bio banana.PNG",
//         articleName: "Bio Banana",
//         articleRating: "4.5",
//         articleQuantity: "1 piece",
//         articlePrice: "0,75",
//     },
//     {
//         articleCategory: "Fruits",
//         articleGroup: "Bananas",
//         articleImage: "static/img/snack banana.PNG",
//         articleName: "Snack Banana",
//         articleRating: "4.5",
//         articleQuantity: "1 piece",
//         articlePrice: "0,40",
//     },
//     {
//         articleCategory: "Fruits",
//         articleGroup: "Bananas",
//         articleImage: "static/img/Lancatan banana.PNG",
//         articleName: "Lancatan Banana",
//         articleRating: "4.5",
//         articleQuantity: "1 piece",
//         articlePrice: "0,70",
//     },
//     {
//         articleCategory: "Fruits",
//         articleGroup: "Bananas",
//         articleImage: "static/img/Dole_banana.PNG",
//         articleName: "Dole Banana",
//         articleRating: "4.5",
//         articleQuantity: "1 piece",
//         articlePrice: "0,60",
//     },
//     {
//         articleCategory: "Fruits",
//         articleGroup: "Apples",
//         articleImage: "static/img/pink_lady_apple.PNG",
//         articleName: "Pink Lady Apple",
//         articleRating: "4.5",
//         articleQuantity: "1 piece",
//         articlePrice: "0,60",
//     },
//     {
//         articleCategory: "Fruits",
//         articleGroup: "Oranges",
//         articleImage: "static/img/sanlucar_orange.PNG",
//         articleName: "Sanlucar Orange",
//         articleRating: "4.5",
//         articleQuantity: "1 piece",
//         articlePrice: "0,60",
//     },
//     {
//         articleCategory: "Vegetables",
//         articleGroup: "Onions",
//         articleImage: "static/img/white_onions.PNG",
//         articleName: "White Onions",
//         articleRating: "4.5",
//         articleQuantity: "1 kg",
//         articlePrice: "1,60",
//     },
//     {
//         articleCategory: "Vegetables",
//         articleGroup: "Cucumbers",
//         articleImage: "static/img/green_cucumber.PNG",
//         articleName: "Green Cucumber",
//         articleRating: "4.5",
//         articleQuantity: "1 piece",
//         articlePrice: "0,60",
//     },
//     {
//         articleegory: "Vegetables",
//         articleGroup: "Bell Peppers",
//         articleImage: "static/img/red_bell_pepper.PNG",
//         articleName: "Red Bell Pepper",
//         articleRating: "4.5",
//         articleQuantity: "1 piece",
//         articlePrice: "0,60",
//     },
    
// ]



/*method: 
{
    scList = [],

    const scList = document.getElementsByClassName("articleList")
    app.data.mockArticles.forEach(element => {
    if(element.qtyInSc !== "0"){            
    app.data.SC.push(element);
      }
    }
         )
      app.data.SC.forEach(element => {
        const scElementHTMLString = `  <div class="article-element">
        <div class="picture_article-element_sc">
            <img src=` + element.articleImage + `alt="article" class="article_img">
        </div>
        <div class="text_article-element_sc">
            <p class="name_info">` + element.articleImage + `</p>
            <div class="add_remove">
                <a href="/remove" class="button button-small"><i class="material-icons remove">remove</i></a>
                <div class="border_around_number"><p class="number_of_articles_sc">` + element.articleImage + `</p></div>
                <a href="/add" class="button button-small"><i class="material-icons add">add</i></a>
            </div>
            <div class="piece_price">
                <p class="price_pp">` + element.articleImage + `€/p</p>
            </div>
        </div>
        <div class="total_price_article">
            <p class="total">Total:</p>
            <p class="price">` + element.articleImage*element.articleImage + `€</p>
        </div>
    </div>`
          scList.innerHTML += scElementHTMLString;
      })
    }
}
*/