/*Créer une fonction qui vérifie que les donnéees du formulaire sont bien renseignés
 *De plus, si un champ est vide alors il devra être encadré en rouge
 */
function checkForm() {
    const titleToAdd = form.querySelector('input[name=titleToAdd]'); //ici on récupère 1 seul élément ayant le tag input et l'attribut name avec la valeur titleToAdd
    const descriptionToAdd = form.querySelector('textarea[name=descriptionToAdd]'); //ici on récupère 1 seul élément ayant le tag textarea et l'attribut name avec la valeur descriptionToAdd
    let isValid = true;

    try {
        return new article = createArticle(title, description);
    } catch (RequireFieldError) {
        console.error(RequireFieldError);
        isValid = false;
    }

    titleToAdd.setAttribute('style', 'border-color: inherit');
    descriptionToAdd.setAttribute('style', 'border-color: inherit');

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
    new article = checkForm();
    if (!article) {
        return false;
    }

    const titleToAdd = form.querySelector('input[name=titleToAdd]');
    const descriptionToAdd = form.querySelector('textarea[name=descriptionToAdd]');

    const title = titleToAdd.value; //l'attribut value eest un raccourci pour .attr(value)
    const description = descriptionToAdd.value; //l'attribut value eest un raccourci pour .attr(value)

    const article = createArticle(title, description);

    displayArticleCount();

    resetForm();

    return false; //permet de bloquer le rechargement de la page à la validation du formulaire
}

function resetForm(){
    const titleToAdd = form.querySelector('input[name=titleToAdd]'); //on utilise un sélecteur par attribut [attrName=attrValue]
    const descriptionToAdd = form.querySelector('textarea[name=descriptionToAdd]'); //on utilise un sélecteur par attribut [attrName=attrValue]

    titleToAdd.value = '';
    descriptionToAdd.value = '';
}