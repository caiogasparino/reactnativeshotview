import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 10,
  },
  receipt_container: {
    color: 'black',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
  },
  bitText: {
    fontSize: 25,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginLeft: -15,
  },
  boldText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  boldText_: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 15,
    backgroundColor: 'gray',
  },
  trx_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  btn_container: {
    width: '100%',
    backgroundColor: 'cornflowerblue',
    padding: 20,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  capturedImage: {
    width: '100%',
    height: 227,
    borderWidth: 2,
    borderColor: 'white',
  },
});
