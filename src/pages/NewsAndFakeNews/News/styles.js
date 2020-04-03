import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: hp('2%'),
  },

  informationContainer: {
    backgroundColor: '#fff',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    borderBottomStartRadius: 9,
    borderBottomEndRadius: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 0
    },
    marginBottom: hp('4%')
  },

  title: {
    fontSize: hp('3%'),
    fontWeight:'bold',
    color: '#4f4f4f'
  },

  description:{
    fontSize: hp('1.9%'),
    paddingVertical: hp('1.8%'),
  },

  image: {
    width: '100%',
    height: 160,
    resizeMode: 'stretch',
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('20%')
  },

  loadingText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: '#4f4f4f',
  }
})