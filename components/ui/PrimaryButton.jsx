import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";


function PrimaryButton({children, onPress}) {

  return (
    <View style={styles.buttonOuter}>
      <Pressable
        android_ripple={{ color: Colors.primary600 }}
        onPress={onPress}
        style={({ pressed }) => pressed? [styles.buttonInner, styles.pressed] : styles.buttonInner}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 30,
    margin: 4,
    overflow: "hidden",
  },
  buttonInner: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
