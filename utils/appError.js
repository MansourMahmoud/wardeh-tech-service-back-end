class AppError extends Error {
  constructor() {
    super();
  }

  create(message, code, statusText) {
    this.message = message;
    this.code = code;
    this.statusText = statusText;
    return this;
  }
}
module.exports = new AppError();
