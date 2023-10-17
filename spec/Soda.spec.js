const { EOL } = require('os');
const { Soda } = require('../Soda');

describe('Можно создать газировку', () => {
  let pepsi;
  beforeEach(() => {
    pepsi = new Soda({
      brand: 'Pepsi',
      price: 0.65,
    });
  });

  it('Имеет свойство бренда', () => {
    expect(pepsi.brand).toEqual('Pepsi');
  });

  it('Имеет свойство цены', () => {
    expect(pepsi.price).toEqual(0.65);
  });

  describe('Метод dateOfDefault', () => {
    it('Возвращает null', () => {
      expect(pepsi.dateOfDefault).toBeNull();
    });

    it('Метод должен устанавливает значение приватного поля #dateOfDefault', () => {
      const date = new Date('2023-12-31');
      pepsi.dateOfDefault = date;
      expect(pepsi.dateOfDefault).toEqual(date);
    });
  });

  describe('Метод dateOfDefault', () => {
    it('метод getInfo должен правильно выводить информацию о газировке', () => {
      expect(pepsi.getInfo()).toBe(
        `Бренд: Pepsi, Цена: 0.65${EOL}Газировка Pepsi просрочена`
      );
    });

    it('Содержит в себе приватным метод', () => {
      expect(pepsi.getInfo.toString()).toContain('#checkTheExpirationDate');
    });
  });
});
