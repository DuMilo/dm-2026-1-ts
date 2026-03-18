import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
  SafeAreaView,
} from "react-native";

const NEWS_DATA = [
  { id: "1", icon: "📢", title: "Campanha de Verão", description: "Nova propaganda no elevador 3.", timestamp: "Há 5 min" },
  { id: "2", icon: "🌥️", title: "Notícias e Clima", description: "Previsão do tempo atualizada.", timestamp: "Há 15 min" },
  { id: "3", icon: "⚠️", title: "Manutenção", description: "Elevador de serviço em parada programada.", timestamp: "Ontem" },
];

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);


  const currentTheme = isDarkMode ? styles.darkTheme : styles.lightTheme;
  const currentTextColor = isDarkMode ? "#FFFFFF" : "#333333";
  

  const buggedTextColor = isDarkMode ? "#333333" : "#333333"; 
  const currentNewsBackground = isDarkMode ? "#555555" : "#F0F0F0";

  return (
    <SafeAreaView style={[styles.container, currentTheme]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: currentTextColor }]}>
          Notícias do Elevador
        </Text>
        <View style={styles.switchContainer}>
          <Text style={{ color: currentTextColor, marginRight: 8 }}>
            {isDarkMode ? "Modo Escuro" : "Modo Claro"}
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleTheme}
            value={isDarkMode}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {NEWS_DATA.map((news) => (
          <View key={news.id} style={[styles.newsItem, { backgroundColor: currentNewsBackground }]}>
            <Text style={styles.newsIcon}>{news.icon}</Text>
            <View style={styles.newsTextContainer}>
              {/* O texto está usando a variável bugada */}
              <Text style={[styles.newsTitle, { color: buggedTextColor }]}>{news.title}</Text>
              <Text style={[styles.newsDescription, { color: buggedTextColor }]}>{news.description}</Text>
              <Text style={[styles.newsTimestamp, { color: buggedTextColor }]}>{news.timestamp}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  lightTheme: { backgroundColor: "#FFFFFF" },
  darkTheme: { backgroundColor: "#121212" },
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: "#CCCCCC", alignItems: "center", marginTop: 20 },
  headerTitle: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  switchContainer: { flexDirection: "row", alignItems: "center" },
  scrollContainer: { padding: 15 },
  newsItem: { flexDirection: "row", padding: 15, marginBottom: 10, borderRadius: 8 },
  newsIcon: { fontSize: 24, marginRight: 15 },
  newsTextContainer: { flex: 1 },
  newsTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  newsDescription: { fontSize: 14, marginBottom: 6 },
  newsTimestamp: { fontSize: 11, fontStyle: "italic" },
});
