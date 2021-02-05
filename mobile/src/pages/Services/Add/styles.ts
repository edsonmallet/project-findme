import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import fonts from "../../../styles/fonts";
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
    top: 10,
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
    elevation: 0,
    backgroundColor: colors.primary,
    borderRadius: metrics.borderRadius,
    paddingVertical: metrics.padding,
  },
  buttonFloatText: {
    fontSize: fonts.big,
    color: colors.white,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  textAreaField:{
    borderRadius: metrics.borderRadius,
    borderColor: colors.black20,
    borderWidth: 1,
    marginVertical: 8,
    paddingHorizontal: metrics.padding
  },
  pickerField:{
    borderRadius: metrics.borderRadius,
    borderColor: colors.black20,
    borderWidth: 1,
    marginVertical: 8,
    paddingHorizontal: metrics.padding
  }
})

export default styles