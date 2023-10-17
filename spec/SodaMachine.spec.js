const { Soda } = require('../Soda.js');
const { SodaMachine } = require('../SodaMachine.js');

describe('Создает автомат по продаже газировки', () => {
  let pepsi;
  let mountainDew;
  let cokeZero;
  let secondPepsi;
  let sodaMachine;
  let secondMachine;
  let cokeZeroSecond;
  beforeEach(() => {
    pepsi = new Soda({ brand: 'Pepsi', price: 0.65 });
    mountainDew = new Soda({ brand: 'Mountain Dew', price: 0.75 });
    cokeZero = new Soda({ brand: 'Coke Zero', price: 1.0 });
    cokeZeroSecond = new Soda({ brand: 'Coke Zero', price: 1.0 });
    secondPepsi = new Soda({ brand: 'Pepsi', price: 0.65 });
    sodaMachine = new SodaMachine({
      sodas: [pepsi, mountainDew, cokeZero, secondPepsi, cokeZeroSecond],
      cash: 1.0,
    });
    secondMachine = new SodaMachine({
      sodas: [cokeZero, secondPepsi, cokeZeroSecond],
      cash: 1.0,
    });
  });
  describe('Проверка функции currentInventoryCount', () => {
    it('Возвращает число равное количству газировки в автомате', () => {
      expect(sodaMachine.currentInventoryCount()).toEqual(5);
    });
  });

  describe('Проверка функции totalSodaCost', () => {
    it('Возвращает правильную сумму стоимости газировки в автомате', () => {
      expect(sodaMachine.totalSodaCost).toEqual(4.05);
      expect(secondMachine.totalSodaCost).toEqual(2.65);
    });
  });

  describe('Проверка функции findSoda', () => {
    describe('Когда требуемая газировка имеется в автомате', () => {
      it('Возвращает экземпляр газировки по названию бренда', () => {
        expect(sodaMachine.findSoda('Pepsi')).toEqual(pepsi);
      });
    });

    describe('Когда требуемая газировка отсутствует в автомате', () => {
      it('Возвращает undefined', () => {
        expect(sodaMachine.findSoda('Surge')).toBeUndefined();
      });
    });
  });

  describe('Проверка функции  sell', () => {
    it('Всегда возвращает undefined', () => {
      expect(sodaMachine.sell('Surge')).toBeUndefined();
    });

    describe('Когда бренд газировки отсутствует для продажи в автомате', () => {
      it('работает верно', () => {
        expect(() => sodaMachine.sell('Surge')).not.toThrow();
      });
    });

    describe('Когда бренд газировки доступен для продажи в автомате', () => {
      beforeEach(() => {
        sodaMachine.sell('Coke Zero');
      });

      it('Свойство cash автомата пополняется на сумму цены газировки', () => {
        expect(sodaMachine.cash).toEqual(2.0);
      });
      it('Удаляет проданную газировку из свойства sodas', () => {
        expect(sodaMachine.sodas).not.toContain(cokeZero);
      });
      it('Не удаляет все бренды газировки при продаже', () => {
        expect(sodaMachine.sodas).toContain(cokeZeroSecond);
      });
      it('Не удаляет остальные виды газировок из свойства sodas', () => {
        expect(sodaMachine.sodas.length).toEqual(4);
      });
    });
  });
});
