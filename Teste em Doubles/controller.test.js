const { UsuariosController } = require('./controller')
const { Database } = require('./database')
const { spy, assert, stub } = require('sinon')

describe('Controle de usuarios', () => {

  it('Fake', () => {
    const resultadoEsperado = [
      {
        id: 100,
        nome: "Test",
        email: "test@test.com"
      }
    ]

    const fakeDataBase = {
      findAll() {
        return resultadoEsperado
      }
    }

    const controller = new UsuariosController(fakeDataBase)
    const response = controller.getAll()

    expect(response).toBe(resultadoEsperado)
  });

  it('spy', () => {
    const findAll = spy(Database, 'findAll')
    const controller = new UsuariosController(Database)
    controller.getAll()

    assert.calledWith(findAll, 'usuarios')
    findAll.restore()

  });

  it('stub', () => {
    const resutaldoEsperado = [
      {
        id: 10,
        nome: "test",
        email: "test@test.com"
      }
    ]

    const findAll = stub(Database, 'findAll')
    findAll.withArgs('usuarios').returns(resutaldoEsperado)
    findAll.restore()
  });


});