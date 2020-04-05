import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp('5'),
    marginVertical: hp('20'),
    marginHorizontal: wp('5'),
    backgroundColor: '#fff',
    borderRadius: 5
  },

  postTitle: {
    paddingHorizontal: wp('5')
  },

  postDescription: {
    marginTop: hp('3'),
    paddingHorizontal: wp('5')
  },

  title: {
    fontSize: hp('2'),
    fontWeight: 'bold',
    color: '#4f4f4f',
  },

  input: {
    borderColor: '#9f9f9f',
    borderWidth: 0.2,
    borderRadius: 5,
    height: hp('6'),
    marginTop: hp('2'),
    fontSize: 15,
    color: '#4f4f4f',
    paddingRight: 20,
    paddingLeft: 15
  },

  inputDescription: {
    borderColor: '#9f9f9f',
    borderWidth: 0.2,
    borderRadius: 5,
    height: hp('15'),
    marginTop: hp('2'),
    paddingBottom: hp('9'),
    fontSize: 15,
    color: '#4f4f4f',
    paddingRight: 20,
    paddingLeft: 15
  },

  button: {
    justifyContent: 'center',
    backgroundColor: '#01A4FF',
    marginHorizontal: wp('20'),
    paddingVertical: hp('2'),
    marginTop: hp('4'),
    borderRadius: 5,
    alignItems: 'center'
  },

  buttonBack: {
    justifyContent: 'center',
    marginHorizontal: wp('20'),
    paddingVertical: hp('2'),
    marginTop: hp('2'),
    borderRadius: 5,
    alignItems: 'center'
  },

  buttonTextSend: {
    color: '#fff'
  }
})