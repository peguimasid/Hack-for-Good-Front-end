import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01ACEC',
    paddingHorizontal: 32,
    paddingTop:  hp('8%'),
  },

  title: {
    fontSize: hp('7%'),
    color: '#fff',
    fontWeight:'bold',
  },

  input: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: hp('13%'),
    fontSize: hp('4%'),
    color: '#fff',
  },

  borderBottomInput: {
    borderTopColor: '#EEE',
    borderTopWidth: 1,
    marginHorizontal: wp('8%')
  },

  button: {
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 22,
    marginTop: hp('22.5%'),
    borderRadius: 5,
  },

  textButton: {
    fontSize: 15,
    color: '#595959'
  },

  backButton: {
    alignSelf: 'center',
    paddingTop: hp('5%'),
  },

  textButtonBack: {
    color: '#eee',
    fontSize: 20
  },
})