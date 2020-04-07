import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 15,
    paddingTop: hp('13%'),
    paddingVertical: 80,
  },

  helloText: {
    fontSize: hp('5%'),
    fontWeight: '200',
    color: '#4F4F4F',
    marginBottom: hp('2%')
  },

  title: {
    fontSize: hp('5%'),
    fontWeight: 'bold',
    color: '#4F4F4F'
  },

  containerLine1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp('4%'),
  },

  containerLine2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // Texts Styles
  symptomsTexts:{
    flexDirection: 'column',
    alignItems: 'center',
  },

  quarantineTexts:{
    flexDirection: 'column',
    alignItems: 'center',
  },

  paperTexts:{
    flexDirection: 'column',
    alignItems: 'center',
  },

  // Texts
  symptomsTitle:{
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#4f4f4f',
    marginTop: hp('0.5%'),
  },
  
  quarantineTitle:{
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#fff',
    marginTop: hp('0.5%'),
  },

  doubtTitle:{
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#fff',
    marginTop: hp('0.5%'),
  },

  paperTitle:{
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: '#4f4f4f',
    marginTop: hp('0.5%'),
  },

  paperTitle2:{
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: '#4f4f4f',
  },

  symptomsDescription: {
    fontSize: hp('1.9%'),
    fontWeight: '400',
    marginTop: hp('0.7%'),
    color: '#4f4f4f'
  },

  quarantineDescription: {
    fontSize: hp('2%'),
    fontWeight: '400',
    marginTop: hp('0.9%'),
    color: '#fff'
  },

  doubtDescription: {
    fontSize: hp('1.7%'),
    fontWeight: '400',
    marginTop: hp('1.2%'),
    color: '#fff'
  },


  // Boxes
  box1: {
    backgroundColor: '#fff',
    marginTop: hp('2%'),
    width: wp('44%'),
    height: hp('25%'),
    paddingVertical: hp('2.5%'),
    paddingHorizontal: hp('1.2%'),
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 3,
      height: 3
    },
  },

  box2: {
    backgroundColor: '#00F788',
    marginTop: hp('2%'),
    width: wp('44%'),
    height: hp('25%'),
    paddingVertical: hp('2.5%'),
    paddingHorizontal: hp('1.2%'),
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 3,
      height: 3
    },
  },

  box3: {
    backgroundColor: '#01A4FF',
    marginTop: hp('2%'),
    width: wp('44%'),
    height: hp('25%'),
    paddingVertical: hp('2.5%'),
    paddingHorizontal: hp('1.2%'),
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 3,
      height: 3
    },
  },

  box4: {
    backgroundColor: '#fff',
    marginTop: hp('2%'),
    width: wp('44%'),
    height: hp('25%'),
    paddingVertical: hp('2.5%'),
    paddingHorizontal: hp('1.2%'),
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 3,
      height: 3
    },
  },

  // Images
  medicalImg: {
    width: hp('7%'),
    height: hp('11%'),
    alignSelf: 'center',
    marginBottom: hp('2%')
  },

  doubtImg: {
    width: hp('10%'),
    height: hp('10%'),
    alignSelf: 'center',
    marginLeft: wp('7%'),
    marginBottom: hp('2.6%')
  },

  fishImg: {
    width: hp('10%'),
    height: hp('10%'),
    alignSelf: 'center',
    marginBottom: hp('2.5%')
  },

  paperImg: {
    width: hp('10%'),
    height: hp('10%'),
    alignSelf: 'center',
    marginBottom: hp('2.5%')
  },

  action: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp('2'),
  },

  actionText: {
    color: '#9e9e9e'
  }
})
