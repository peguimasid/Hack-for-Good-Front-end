import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  containerAll: {
    backgroundColor: '#eee',
    paddingVertical: hp('4%')
  },

  container: {
    backgroundColor: '#eee',
    paddingHorizontal: wp('10%'),
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

  comumTitleOne: {
    color: '#4f4f4f',
    fontSize: hp('3%'),
    fontWeight: 'bold',
    paddingHorizontal: wp('4%'),
  },

  comumTitle: {
    color: '#4f4f4f',
    fontSize: hp('3%'),
    fontWeight: 'bold',
    marginTop: hp('3%'),
    paddingHorizontal: wp('4%'),
  },

  comumDescription: {
    color: '#2f2f2f',
    fontSize: hp('2.5%'),
    fontWeight: '200',
    marginTop: hp('3%'),
    paddingHorizontal: wp('4%'),
    marginLeft: wp('10%')
  },

  comum: {
    paddingTop: hp('2%'),
    paddingHorizontal: wp('6%'),
    marginTop: hp('2.5%'),
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems:'center',
    flexDirection: 'row',
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 3,
    }
  },

  dangerRed:{
    backgroundColor: '#f00',
    width: 14,
    height: 14,
    marginBottom: hp('2%'),
    borderRadius: 10
  },

  dangerYellow:{
    backgroundColor: '#fdd842',
    width: 14,
    height: 14,
    marginBottom: hp('2%'),
    borderRadius: 10
  },

  symptom: {
    fontSize: hp('3%'),
    marginBottom: hp('2%'),
    fontWeight: '300',
    color: '#4f4f4f'
  }
})