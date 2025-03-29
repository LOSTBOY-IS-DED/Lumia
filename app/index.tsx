import {Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Hello subh</Text>
      <TouchableOpacity onPress={() => alert("Pressed")}>
          <Text>
            Press me
          </Text>
      </TouchableOpacity>
      <Pressable onPress={() => {
        alert("Pressed TouchableOpacity");
      }}>
          <Text>Press me - Pressable</Text>
      </Pressable>  
    </View>
  );
}

