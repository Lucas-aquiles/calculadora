import React, {useRef, useState, useEffect} from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

const useCalculatorButton = () => {
  const [formula, setFormula] = useState('');
  const [reset, setReset] = useState(false);
  const [dataSaveA, setDataSaveA] = useState('0');
  const [dataSaveB, setDataSaveB] = useState('0');
  const [dataSaveC, setDataSaveC] = useState('0');
  const [dataSaveD, setDataSaveD] = useState('0');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);
  useEffect(() => {
    setFormula('0');
  }, [reset]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  const clean = () => {
    if (number !== '0') {
      setNumber('0');
      lastOperation.current = undefined;
      setFormula('');
      setPrevNumber('0');
    }
    setPrevNumber('0');
    lastOperation.current = undefined;
    setReset(!reset);
  };
  const saveDataA = () => {
    if (
      !formula.includes('+') &&
      !formula.includes('-') &&
      !formula.includes('x') &&
      !formula.includes('÷') &&
      !formula.includes(' ')
    ) {
      setDataSaveA(formula);
    }
  };
  const useDataA = () => {
    setNumber(dataSaveA);
  };
  const useDataB = () => {
    setNumber(dataSaveB);
  };
  const useDataC = () => {
    setNumber(dataSaveC);
  };
  const useDataD = () => {
    setNumber(dataSaveD);
  };
  const saveDataB = () => {
    if (
      !formula.includes('+') &&
      !formula.includes('-') &&
      !formula.includes('x') &&
      !formula.includes('÷') &&
      !formula.includes(' ')
    ) {
      setDataSaveB(formula);
    }
  };
  const saveDataC = () => {
    if (
      !formula.includes('+') &&
      !formula.includes('-') &&
      !formula.includes('x') &&
      !formula.includes('÷') &&
      !formula.includes(' ')
    ) {
      setDataSaveC(formula);
    }
  };
  const saveDataD = () => {
    if (
      !formula.includes('+') &&
      !formula.includes('-') &&
      !formula.includes('x') &&
      !formula.includes('÷') &&
      !formula.includes(' ')
    ) {
      setDataSaveD(formula);
    }
  };

  const deleteOperation = () => {
    if (number !== '0') {
      let newnumber = number.slice(0, -1);
      setNumber(newnumber);
    }
    if (number.length === 1) {
      setNumber('0');
    }
    if (number.length === 2 && number.includes('-')) {
      setNumber('0');
    }
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // poner un punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      //Evitar 000.000
      if (numberString === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    calculateResult();

    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);
    lastOperation.current = undefined;
    setPrevNumber('0');
  };

  const calculateSubResult = (): number => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error('Operation not implemented');
    }
  };

  return {
    //Properties
    number,
    prevNumber,
    formula,
    dataSaveA,
    dataSaveB,
    dataSaveC,
    dataSaveD,

    //Methods
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    addOperation,
    substractOperation,
    calculateResult,
    saveDataA,
    saveDataB,
    saveDataC,
    saveDataD,
    useDataA,
    useDataB,
    useDataC,
    useDataD,
  };
};

export default useCalculatorButton;
