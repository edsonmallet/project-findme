import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import metrics from "../../styles/metrics";

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.silver,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  title:{
    color: colors.primary,
    fontSize: 48,
    marginBottom: metrics.margin
  },
  inputView: {
    backgroundColor: colors.silver,
    borderRadius: metrics.borderRadius,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    width:'70%',
    borderColor: colors.black20,
    borderWidth: 1
  },
  TextInput: {
    height: 50,
    flex: 1,
  },
  buttonFloatBottom:{
    elevation: 0,
    backgroundColor: colors.primary,
    borderRadius: metrics.borderRadius,
    paddingVertical: metrics.padding,
    width:'70%'
  },
  buttonFloatText: {
    fontSize: fonts.big,
    color: colors.white,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
})

export default styles