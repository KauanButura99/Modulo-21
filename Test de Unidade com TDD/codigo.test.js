const { soma, dobro } = require('./codigo')

describe('funções matematicas ', () => {

  beforeAll(() => {
    console.log('Antes de tudo')
  })

  beforeEach(() => {
    console.log('Antes de cada')
  });

  afterEach(() => {
    console.log('depois de cada')
  })

  afterAll(() => {
    console.log('depois de tudo')
  })

  it('soma de dois valores', () => {
    expect(soma(2, 5)).toBe(7)
    expect(soma(2, 6)).toBe(8)
    expect(soma(21, 44)).toBe(65)
  });

  it('dobro de um valor', () => {
    expect(dobro(2)).toBe(4)
  });
});