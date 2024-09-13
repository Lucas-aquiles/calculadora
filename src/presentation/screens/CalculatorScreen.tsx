import {Pressable, Text, View, StatusBar} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import CalculatorBottom from '../components/CalculatorBottom';
import useCalculatorButton from '../hooks/useCalculatorButton';
import SaveResult from '../components/SaveResults';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../components/PrimaryButton';

const CalculatorScreen = () => {
  const {
    formula,
    number,
    prevNumber,
    dataSaveA,
    dataSaveB,
    dataSaveC,
    dataSaveD,

    buildNumber,
    toggleSign,
    clean,
    saveDataA,
    useDataA,
    useDataB,
    useDataC,
    useDataD,
    saveDataB,
    saveDataC,
    saveDataD,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    addOperation,
    substractOperation,
    calculateResult,
  } = useCalculatorButton();
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
        }}>
        <PrimaryButton
          onPress={() => navigation.navigate('Setting' as never)}
          label="Config"
        />
      </View>

      <View style={styles.calculatorContainer}>
        <View
          style={{
            position: 'absolute',
            width: 'auto',
            top: 0,
            right: 0,
            left: 0,
            height: 200,
          }}>
          <Text
            style={{
              color: colors.lightGray,
              marginHorizontal: 'auto',
              marginVertical: 'auto',
              fontSize: 18,
            }}>
            Guarda tus resultados
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginHorizontal: 'auto',
              marginVertical: 'auto',
            }}>
            <SaveResult
              onPress={saveDataA}
              useDataSave={useDataA}
              resultSave={dataSaveA}
              label="A"
            />
            <SaveResult
              onPress={saveDataB}
              useDataSave={useDataB}
              resultSave={dataSaveB}
              label="B"
            />
            <SaveResult
              onPress={saveDataC}
              useDataSave={useDataC}
              resultSave={dataSaveC}
              label="C"
            />
            <SaveResult
              onPress={saveDataD}
              useDataSave={useDataD}
              resultSave={dataSaveD}
              label="D"
            />
          </View>
        </View>

        <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={styles.mainResult}>
            {formula}
          </Text>
          {formula === prevNumber ? (
            <Text style={styles.subResult}> </Text>
          ) : (
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={styles.subResult}>
              {' '}
              {prevNumber}
            </Text>
          )}
        </View>

        <View style={styles.row}>
          <CalculatorBottom
            onPress={clean}
            label="C"
            color={colors.lightGray}
            blackText
          />
          <CalculatorBottom
            onPress={toggleSign}
            label="+/-"
            color={colors.lightGray}
            blackText
          />
          <CalculatorBottom
            onPress={deleteOperation}
            label="del"
            color={colors.lightGray}
            blackText
          />
          <CalculatorBottom
            onPress={divideOperation}
            label="/"
            color={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <CalculatorBottom onPress={() => buildNumber('7')} label="7" />
          <CalculatorBottom onPress={() => buildNumber('8')} label="8" />
          <CalculatorBottom onPress={() => buildNumber('9')} label="9" />
          <CalculatorBottom
            onPress={multiplyOperation}
            label="x"
            color={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <CalculatorBottom onPress={() => buildNumber('4')} label="4" />
          <CalculatorBottom onPress={() => buildNumber('5')} label="5" />
          <CalculatorBottom onPress={() => buildNumber('6')} label="6" />
          <CalculatorBottom
            onPress={substractOperation}
            label="-"
            color={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <CalculatorBottom onPress={() => buildNumber('1')} label="1" />
          <CalculatorBottom onPress={() => buildNumber('2')} label="2" />
          <CalculatorBottom onPress={() => buildNumber('3')} label="3" />
          <CalculatorBottom
            onPress={addOperation}
            label="+"
            color={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <CalculatorBottom
            onPress={() => buildNumber('0')}
            label="0"
            doubleSize
          />
          <CalculatorBottom onPress={() => buildNumber('.')} label="." />
          <CalculatorBottom
            onPress={calculateResult}
            label="="
            color={colors.orange}
          />
        </View>
      </View>
    </View>
  );
};

export default CalculatorScreen;
