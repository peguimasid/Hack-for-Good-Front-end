import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 0,
  },

  header: {
    backgroundColor: '#01ACEC',
    width: wp('100%'),
    height: hp('12%')
  },

  headerContent: {
    flexDirection: 'row',
    marginTop: hp('6%'),
    paddingHorizontal: wp('3%')
  },

  headerText: {
    marginTop: hp('1%'),
    marginLeft: wp('1%'),
    color: '#fff'
  },
})