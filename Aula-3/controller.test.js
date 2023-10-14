const { spy, assert } = require('sinon')
const { Database } = require('./database')
const { UsuariosController } = require('./controller')

describe('Controle de usuarios', () => {
  it('Fake', () => {
    const resultadoEsperado = [
      {
        id: 10,
        nome: 'Test',
        email: 'test@tes.com'
      }
    ]

    const fakeDataBase = {
      findAll() {
        return resultadoEsperado
      }
    }

    const controle = new UsuariosController(fakeDataBase)
    const response = controle.getAll()

    expect(response).toBe(resultadoEsperado)
  });

  it('Spy', () => {
    const findAll = spy(Database, 'findAll')
    const controller = new UsuariosController(Database)
    controller.getAll()

    assert.calledWith(findAll, 'usuarios')
  })

});