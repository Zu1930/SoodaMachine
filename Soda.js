class Soda {
  #dateOfDefault;
  constructor({ brand, price }) {
    this.brand = brand;
    this.price = price;
    this.#dateOfDefault = null;
  }
  
  get dateOfDefault() {
    return this.#dateOfDefault;
  }

  set dateOfDefault(value) {
    this.#dateOfDefault = value;
  }


  #checkTheExpirationDate() {
    const now = new Date();
    if (now > this.#dateOfDefault) {
      return `Газировка ${this.brand} просрочена`;
    } else {
      return `Газировка ${this.brand} еще свежая`;
    }
  }

  getInfo() {
    const result = this.#checkTheExpirationDate();
    return `Бренд: ${this.brand}, Цена: ${this.price}\n${result}`;
  }
}

module.exports = { Soda };
