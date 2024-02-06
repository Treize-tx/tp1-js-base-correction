class RequireFieldError extends Error {
  constructor(field) {
    super(`${field} is required`);
    this.name = this.constructor.name;
  }
}