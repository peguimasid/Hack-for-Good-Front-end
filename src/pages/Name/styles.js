import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 32,
    paddingTop: Constants.statusBarHeight + 60,
  },

  title: {
    fontSize: 50,
    color: '#4f4f4f',
    fontWeight:'bold', 
  },

  input: {
    alignSelf: 'stretch',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(160, 160, 160, 0.9)',
    paddingTop: 110,
    fontSize: 32,
  },

  button: {
    backgroundColor: '#00F781',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 22,
    marginTop: 200,
    borderRadius: 5,
  },

  textButton: {
    fontSize: 15,
    color: '#595959'
  }
})