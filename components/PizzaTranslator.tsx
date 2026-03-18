import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export function PizzaTranslator() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here to translate!"
        onChangeText={setText}
        defaultValue={text}
      />
      <Text style={styles.output}>
        {text
          .split(" ")
          .map((word) => (word ? "🍕" : ""))
          .join(" ")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    padding: 5,
  },
  output: {
    padding: 10,
    fontSize: 42,
  },
});
