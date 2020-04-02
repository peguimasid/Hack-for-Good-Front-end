import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01ACEC',
    paddingHorizontal: 32,
    paddingTop: wp('27%'),
  },

  title: {
    fontSize: hp('8%'),
    color: '#fff',
    fontWeight:'bold'
  },

  button: {
    backgroundColor: '#FCFF53',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 22,
    marginTop: hp('5%'),
    borderRadius: 5,
  },

  textButton: {
    fontSize: 15,
    color: '#595959'
  }
})