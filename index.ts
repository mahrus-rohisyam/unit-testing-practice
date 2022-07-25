import {divide, multiply, substract, sum} from './src/commands'

const main = async (fparam: number, sparam:number) => {
  let multiplying = multiply(fparam, sparam)
  let dividing = divide(fparam, sparam)
  let substracting = substract(fparam, sparam)
  let adding = sum(fparam, sparam)

  console.log('Multiplying', multiplying)
  console.log('Dividing', dividing)
  console.log('Substacting', substracting)
  console.log('Adding', adding)
}

main(10, 5)