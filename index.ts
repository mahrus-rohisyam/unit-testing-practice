import { Calculator } from "./commands"


const main = async (fparam: number, sparam: number) => {
  let multiply = Calculator.add(fparam, sparam)
  let divid = Calculator.divide(fparam, sparam)
  let substract = Calculator.subtract(fparam, sparam)
  let add = Calculator.add(fparam, sparam)

  console.log('Multiply', multiply)
  console.log('Divid', divid)
  console.log('Substact', substract)
  console.log('Add', add)
}

main(10, 5)