import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('4')
  },

  header: {
    backgroundColor: '#01ACEC',
    width: wp('100%'),
    height: hp('12%')
  },

  headerText: {
    marginTop: hp('1%'),
    marginLeft: wp('1%'),
    color: '#fff'
  },

  headerContent: {
    flexDirection: 'row',
    marginTop: hp('6%'),
    paddingHorizontal: wp('3%')
  },

  doubtsContainer: {
    paddingHorizontal: wp('3'),
    paddingVertical: hp('2.5'),
    borderRadius: 5
  },

  doubtsTitle: {
    backgroundColor: '#fff',
    paddingHorizontal: wp('4.5'),
    paddingVertical: hp('1.6')
  },

  doubtsDescription: {
    backgroundColor: 'rgba(50, 153, 204, 0.8)'
  },

  doubtTitle: {
    fontSize: hp('3')
  }
})