class Article {
    id;
    title;
    description;
    
    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
        if (!id) {
            throw new RequireFieldError(id);
        }
        if (!title) {
            throw new RequireFieldError(title);
        }
        if (!description) {
            throw new RequireFieldError(description);
        }
    }
}