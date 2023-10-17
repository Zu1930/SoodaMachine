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

  set dateOfDefault(data) {
    // сделать проверку на дату

    if (data instanceof Date) {
      
      this.#dateOfDefault = data;
    }
  }

  #checkTheExpirationDate() {
    const now = new Date();
    if (now > this.#dateOfDefault) {
      return `Газировка ${this.brand} просрочена`;
    }
    return `Газировка ${this.brand} еще свежая`;
  }

  getInfo() {
    const result = this.#checkTheExpirationDate();
    return `Бренд: ${this.brand}, Цена: ${this.price}\n${result}`;
  }
}

module.exports = { Soda };
