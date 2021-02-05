import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  fab: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: colors.secondary,
    borderRadius: 100,
    color: colors.white
  },
  icon: {
    color: colors.white
  }
})

export default styles