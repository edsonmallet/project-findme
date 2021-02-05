import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import metrics from '../../../styles/metrics'

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
  },
  containerMap: {
    position:'relative',
    marginHorizontal: 0,
  },
  containerForm: {
    position:'absolute',
    width: '90%',
    bottom: 90,
    zIndex:9999,
    backgroundColor: "#fff",
    borderColor: colors.black20,
    borderWidth: 1,
    marginHorizontal: metrics.margin,
    padding: metrics.padding,
    borderRadius: metrics.borderRadius
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttonFloatBottom:{
    padding: metrics.padding,
    margin: metrics.margin,
    backgroundColor: 'red',
  }
})

export default styles