/*Créer une fonction qui vérifie que les donnéees du formulaire sont bien renseignés
 *De plus, si un champ est vide alors il devra être encadré en rouge
 */
function checkForm() {
    const titleToAdd = form.querySelector('input[name=titleToAdd]'); //ici on récupère 1 seul élément ayant le tag input et l'attribut name avec la valeur titleToAdd
    const descriptionToAdd = form.querySelector('textarea[name=descriptionToAdd]'); //ici on récupère 1 seul élément ayant le tag textarea et l'attribut name avec la valeur descriptionToAdd
    let isValid = true;

    titleToAdd.setAttribute('style', 'border-color: inherit');
    descriptionToAdd.setAttribute('style', 'border-color: inherit');

    if (titleToAdd.value === '') {
        console.error('Le champ titleToAdd n\'a pas été renseigné'); //console.error permet de mettre en avant (en rouge) un message dans la console
        titleToAdd.setAttribute('style', 'border-color: red'); //la méthode setAttribute permet de définir la valeur d'un attribut HTML de l'élément
        isValid = false;
    }

    if (descriptionToAdd.value === '') {
        console.error('Le champ descriptionToAdd n\'a pas été renseigné'); //console.error permet de mettre en avant (en rouge) un message dans la console
        descriptionToAdd.setAttribute('style', 'border-color: red'); //la méthode setAttribute permet de définir la valeur d'un attribut HTML de l'élément
        isValid = false;
    }

    return isValid;
}

/*A la validation du formulaire, on récupère la valeur des 2 champs 
 *et on va créer un article 
 *(<article class="article"><span>$TITLE</span><p>$DESCRIPTION</p></article>)
 *et on l'insert dans la div ayant l'id newsList
 *Pour sélectionner un input on peut faire 'input[name=titleToAdd]'
 */
function submitForm(event) {
    event.preventDefault(); //permet de bloquer le rechargement de la page à la validation du formulaire
    if (!checkForm()) {
        return false;
    }

    const titleToAdd = form.querySelector('input[name=titleToAdd]');
    const descriptionToAdd = form.querySelector('textarea[name=descriptionToAdd]');

    const title = titleToAdd.value;
    const description = descriptionToAdd.value;

    const article = document.createElement('article');
    const span = document.createElement('span');
    const p = document.createElement('p');

    span.innerText = title;
    p.innerText = description;
    article.appendChild(span);
    article.appendChild(p);
    article.classList.add('article'); //article.setAttribute('class', 'article');
    document.querySelector('#newsList').appendChild(article);

    displayArticleCount();

    titleToAdd.value = '';
    descriptionToAdd.value = '';

    return false; //permet de bloquer le rechargement de la page à la validation du formulaire
}