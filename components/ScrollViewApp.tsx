import { Image, ScrollView, StyleSheet, Text } from "react-native";

type LogoSource = {
  uri: string;
  width: number;
  height: number;
};

const LOGO: LogoSource = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

export function ScrollViewApp() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.largeText}>Scroll me plz</Text>
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Text style={styles.largeText}>If you like</Text>
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Text style={styles.largeText}>Scrolling down</Text>
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Text style={styles.largeText}>What&apos;s the best</Text>
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Text style={styles.largeText}>Framework around?</Text>
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Image source={LOGO} />
      <Text style={styles.titleText}>React Native</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  largeText: {
    fontSize: 96,
  },
  titleText: {
    fontSize: 80,
  },
});
