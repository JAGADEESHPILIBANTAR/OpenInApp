import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    // backgroundColor:'blue',
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical:20
  },
  title: {
    color: '#101010',
    fontSize: 16,
    fontFamily: 'Urbanist-SemiBold',
    fontWeight: '600',
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailsTitle: {
    fontSize: 16,
    color: '#101010',
    fontFamily: 'Urbanist-Semibold',
    fontWeight: '700',
    marginVertical: 20,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 10,
    alignItems: 'center',
  },
  detailsText: {
    color: '#101010',
    fontSize: 14,
    fontFamily: 'Urbanist-Semibold',
    fontWeight: '800',
    marginBottom: 10,
  },
  ordertype:{
    color: '#E63946',
    fontSize: 14,
    fontFamily: 'Urbanist-Semibold',
    fontWeight: '800',
    marginBottom: 10,
  },
  profileUpdate: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  }
})
export default styles;