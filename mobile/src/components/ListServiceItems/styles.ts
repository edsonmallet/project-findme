import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import metrics from "../../styles/metrics";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.black5,
    padding: metrics.padding,
    flexDirection: "row",
    alignItems:"center"
  },
  rightCard:{
    flex:1,
    alignItems: 'flex-end'
  },
  leftCard:{
    flex:8
  },
  nameServiceOrder:{
    fontSize: fonts.bigger
  },
  timeServiceOrder:{
    color: colors.black50
  },
  arrowDetails: {
    fontSize: 40,
    color: colors.secondary
  }
})

export default styles