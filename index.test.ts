import {divide, multiply, substract, sum} from './src/commands'

describe('Testing all function', () => {
  let fparam = 10
  let sparam = 5

  let multiplying = multiply(fparam, sparam)
  let dividing = divide(fparam, sparam)
  let substracting = substract(fparam, sparam)
  let adding = sum(fparam, sparam)

  test('Multiplying', () => {
    expect(multiplying).toBe(50)
  })
  test('Dividing', () => {
    expect(dividing).toBe(2)
  })
  test('Substracting', () => {
    expect(substracting).toBe(5)
  })
  test('Adding', () => {
    expect(adding).toBe(15)
  })
})