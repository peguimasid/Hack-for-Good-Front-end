import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 32,
    paddingTop: hp('8%'),
  },

  title: {
    fontSize: hp('6%'),
    color: '#4f4f4f',
    fontWeight:'bold', 
  },

  input: {
    alignSelf: 'stretch',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(160, 160, 160, 0.9)',
    paddingTop: hp('13%'),
    fontSize: 32,
  },

  button: {
    backgroundColor: '#00F781',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 22,
    marginTop: hp('20%'),
    borderRadius: 5,
  },

  textButton: {
    fontSize: 15,
    color: '#595959'
  }
})