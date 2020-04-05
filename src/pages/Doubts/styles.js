import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: wp('4'),
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

  collapse: {
    paddingTop: 10
  },

  doubtsContainer: {
    paddingHorizontal: wp('3'),
    paddingVertical: hp('2.5'),
  },

  doubtsTitle: {
    backgroundColor: '#fff',
    paddingHorizontal: wp('4.5'),
    paddingVertical: hp('1.6'),
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    borderBottomEndRadius: 5,
    borderBottomStartRadius:5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },

  viewTitle: {
    flexDirection: 'row',
  },

  doubtsDescription: {
    backgroundColor: '#fff',
    marginTop: 3,
    paddingHorizontal: wp('5'),
    paddingVertical: hp('2'),
    borderRadius: 5
  },

  doubtTitle: {
    fontSize: hp('2'),
    fontWeight: 'bold',
    color: '#4f4f4f',
  },

  doubtDescription:{
    fontSize: hp('1.8'),
    fontWeight: '200',
    color: '#6f6f6f'
  }
})