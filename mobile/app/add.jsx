import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function AddPlat() {
  const [disponible, setDisponible] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ajouter un plat</Text>

     

      <Text style={styles.label}>Nom du plat</Text>
      <TextInput
        placeholder="Ex : Tacos"
        
        style={styles.input}
      />

      <Text style={styles.label}>Prix</Text>
      <TextInput
        placeholder="Ex : 35"
        keyboardType="numeric"
        style={styles.input}
      />
      <Text style={styles.description}>Description</Text>
   <TextInput
        placeholder="Ex : tajine est un plat ....."
        keyboardType="description"
        style={styles.input}
      />
      <Text style={styles.label}>Catégorie</Text>
   

      <TouchableOpacity style={styles.select}>
        <Text style={{ color: "#666" }}>Choisir une catégorie</Text>
        <Ionicons name="chevron-down" size={20} color="#666" />
      </TouchableOpacity>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Disponible</Text>
        <Switch
          value={disponible}
          onValueChange={setDisponible}
          trackColor={{ true: "#FF6B35" }}
        />
      </View>

      <TouchableOpacity style={styles.saveBtn}>
        <Text style={styles.saveText}>Enregistrer le plat</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.cancel}>Annuler</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    marginBottom: 25,
  },

  label: {
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 12,
    color: "#333",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  select: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    height: 50,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  switchContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  saveBtn: {
    backgroundColor: "#FF6B35",
    padding: 16,
    borderRadius: 12,
    marginTop: 35,
  },

  saveText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },

  cancel: {
    textAlign: "center",
    marginTop: 18,
    color: "#666",
    fontSize: 15,
  },
});