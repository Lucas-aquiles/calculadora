import React, { useRef, useState } from 'react'

enum Operator{
  add,
  subtract,
  multiply,
  divide,
}



const useCalculatorButton = () => {

  const [number,setNumber] = useState("0");
  const [prevNumber,setPrevNumber] = useState("0")


const lastOperation = useRef<Operator>();

  const clean =() => {
if (number !== "0"){
  setNumber("0")
}  setPrevNumber("0")

  }

  const deleteOperation = () =>{
if(number !== "0"){
    let newnumber = number.slice(0,-1);
    setNumber(newnumber)
}
if (number.length === 1){
  setNumber("0")
}
if (number.length === 2 && number.includes("-")){
  setNumber("0")
}
  }

  const toggleSign = () =>{
 if (number.includes("-")){
  return setNumber(number.replace("-",""))
 }
setNumber("-"+ number)

  }


  const buildNumber = (numberString : string)=>{

    if(number.includes(".") && numberString === ".") return

    if(number.startsWith("0") || number.startsWith("-0")){
// poner un punto decimal
      if( numberString === "."){
        return setNumber(number + numberString)
      }

      if(numberString === "0" && number.includes(".")){
        return setNumber (number + numberString )
      }
      if(numberString !== "0" && !number.includes(".")){
        return setNumber( numberString)
      }

      //Evitar 000.000
      if (numberString ==="0" &&   !number.includes(".") ){
        return
      }

      return  setNumber(number + numberString);


    }

    setNumber ( number + numberString)
  }




const setLastNumber = () =>{
  if(number.endsWith(".")){
    setPrevNumber(number.slice(0,-1));
  }else{
    setPrevNumber(number)
  }

  setNumber("0")
}

const divideOperation  = ()=>{
  setLastNumber();
  lastOperation.current = Operator.divide;
}


const multiplyOperation  = ()=>{
  setLastNumber();
  lastOperation.current = Operator.multiply;
}


const substractOperation  = ()=>{
  setLastNumber();
  lastOperation.current = Operator.subtract;
}


const addOperation  = ()=>{
  setLastNumber();
  lastOperation.current = Operator.add;
}

const calculateResult = () =>{
const num1 = Number(number);
const num2= Number(prevNumber);

switch(lastOperation.current){
  case Operator.add:
    setNumber(  `${num1 + num2}`)
    break;

    case Operator.subtract:
    setNumber(  `${num2 - num1}`)
    break;

    case Operator.multiply:
    setNumber(  `${num1 *  num2}`)
    break;

    case Operator.divide:
    setNumber(  `${num2 / num1}`)
    break;



  default:
  throw new Error ("Operation not implemented");
}

setPrevNumber("0")
}


return {
//Properties
number,
prevNumber,



//Methods
buildNumber,
toggleSign,
clean,
deleteOperation,
divideOperation,
multiplyOperation,
addOperation,
substractOperation,
calculateResult

}


}

export default useCalculatorButton
