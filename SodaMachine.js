// SodaMachine.js
class SodaMachine {
  constructor({ sodas, cash }) {
    this.sodas = sodas;
    this.cash = cash;
  }

  get totalSodaCost() {
    return this.sodas.reduce((total, soda) => total + soda.price, 0);
  }

  currentInventoryCount() {
    return this.sodas.length;
  }

  findSoda(brand) {
    return this.sodas.find((soda) => soda.brand === brand);
  }

  sell(brand) {
    const sodaToSell = this.findSoda(brand);

    if (sodaToSell) {
      this.cash += sodaToSell.price;
      this.sodas = this.sodas.filter((soda) => soda !== sodaToSell);
    }
  }
}

module.exports = { SodaMachine };
