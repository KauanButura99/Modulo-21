import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'
import { expect } from '@jest/globals'

test('tela é renderizada corretamente', () => {
  const tree = renderer.create(<App />).toJSON
  expect(tree).toMatchSnapshot()
})