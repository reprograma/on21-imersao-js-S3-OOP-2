class Author {
  #nameAuthor;
  #email;
  #birthdate;
  constructor(nameAuthor, email, birthdate) {
    this.#nameAuthor = nameAuthor;
    this.#email = email;
    this.#birthdate = birthdate;
  }

  start() {
    this.#nameAuthor = nameAuthor;
    this.#email = email;
    this.#birthdate = birthdate;
  }

  get nameAuthor() {
    return this.#nameAuthor;
  }

  set nameAuthor(newAuthor) {
    this.#nameAuthor = newAuthor;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  get birthdate() {
    return this.#birthdate;
  }

  set birthdate(newBirthdate) {
    this.#birthdate = newBirthdate;
  }
}

module.exports = Author;
