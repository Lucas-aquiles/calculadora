import {PixelRatio, StyleSheet, Dimensions} from 'react-native';

export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',

  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000000',
};
const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla
const isSpecialResolution = width === 360;
export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    flex: 1,
    padding: 3 * PixelRatio.get(),
    justifyContent: 'flex-end',
  },

  mainResult: {
    color: colors.textPrimary,
    fontSize: width * 0.1,
    textAlign: 'right',
    marginBottom: 0,
    fontWeight: isSpecialResolution ? '300' : '300',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: isSpecialResolution
      ? 14 * PixelRatio.get()
      : 18 * PixelRatio.get(),
    textAlign: 'right',
    fontWeight: '300',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 1 * PixelRatio.get(),
    paddingHorizontal: 1,
  },
  button: {
    height: height * 0.1,
    backgroundColor: 'colors.darkGray',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: width * 0.03,
    marginVertical: height * 0.002,
  },
  buttonAux: {
    height: height * 0.2,
    width: width * 0.2,

    backgroundColor: 'colors.darkGray',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: width * 0.02,
  },

  buttonText: {
    textAlign: 'center',
    padding: 2 * PixelRatio.get(),
    fontSize: width * 0.08,
    color: 'white',
    fontWeight: '300',
  },
});
