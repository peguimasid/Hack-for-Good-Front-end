import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01ACEC',
    paddingHorizontal: 32,
    paddingTop: Constants.statusBarHeight + 150,
  },

  title: {
    fontSize: 70,
    color: '#fff',
    fontWeight:'bold'
  },

  button: {
    backgroundColor: '#FCFF53',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 22,
    marginTop: 50,
    borderRadius: 5,
  },

  textButton: {
    fontSize: 15,
    color: '#595959'
  }
})