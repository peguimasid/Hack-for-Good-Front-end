import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01ACEC',
    paddingHorizontal: 32,
    paddingTop: hp('10%'),
  },

  title: {
    fontSize: hp('6%'),
    color: '#fff',
    fontWeight:'bold',
    paddingHorizontal: 10,
  },

  input: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: hp('17%'),
    fontSize: 32,
    color: '#fff',
  },

  borderBottomInput: {
    borderTopColor: '#EEE',
    borderTopWidth: 1,
    marginHorizontal: 40
  },

  button: {
    backgroundColor: '#00F781',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 22,
    marginTop: hp('23%'),
    borderRadius: 5,
  },

  textButton: {
    fontSize: 15,
    color: '#595959'
  },

  backButton: {
    alignSelf: 'center',
    paddingTop: 50,
  },

  textButtonBack: {
    color: '#eee',
    fontSize: 20
  },
})