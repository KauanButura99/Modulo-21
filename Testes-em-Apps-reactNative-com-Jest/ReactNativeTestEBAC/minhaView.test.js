import React from "react";
import rederer from 'react-test-renderer'
import MinhaView from "./minhaView";
import { cliqueAqui } from "./minhaView";
import { expect } from "@jest/globals";

test('verificar a renderização', () => {
  const tree = rederer.create(<MinhaView />).toJSON
  expect(tree).toMatchSnapshot()
})

test('vereficar o Botão cliqueAqui', () => {
  expect(cliqueAqui).toBeTruthy()
})