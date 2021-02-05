import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import metrics from "../../styles/metrics";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.black20,
    padding: metrics.padding
  },
  rightCard:{
    flex:1
  },
  leftCard:{
    flex:2
  }
})

export default styles