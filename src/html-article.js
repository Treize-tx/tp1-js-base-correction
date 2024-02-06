/*1 fonction qui récupère le nombre d'article (les articles sont identifiés par la classe article et présents
 *dans la div ayant l'id newsList) sur la page et l'affiche dans la balise h3
 */
function displayArticleCount() { //pour déclarer une fonction on utilise le mot clé function, suivi du nom puis des paramètres entre parenthèses
    const newsList = document.querySelector('#newsList');
    const articles = newsList.querySelectorAll('.article'); //Permet de récupérer les enfants de l'élément newsList ayant la classe article
    
    //l'équivalent en 1 ligne
    //const articles = document.querySelectorAll('#newsList .article');

    updateArticleCount(articles.length)
}

function updateArticleCount(count){
    const h3 = document.querySelector('h3');

    if (count) {
        h3.innerText = `There are ${count} articles`;
    }
    else {
        h3.innerText = `There is ${count} article`;
    }
}

function createArticle(title, description) {
    const article = document.createElement('article');
    const span = document.createElement('span');
    const p = document.createElement('p');

    span.innerText = title;
    p.innerText = description;
    article.appendChild(span);
    article.appendChild(p);
    article.classList.add('article');
    return article;
}