
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
  Alert,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PlatService from "../src/services/platService.js"; 

export default function AddPlat() {
  const queryClient = useQueryClient();

  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [categorie, setCategorie] = useState("");
  const [disponible, setDisponible] = useState(true);

  const mutation = useMutation({
    mutationFn: (newPlat) => PlatService.createPlat(newPlat),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["plats"],
      });

      Alert.alert("Succès", "Plat ajouté avec succès");

      router.back();
    },

    onError: () => {
      Alert.alert("Erreur", "Impossible d'ajouter le plat");
    },
  });

  const handleSubmit = () => {
    if (!nom || !prix || !categorie) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs");
      return;
    }

    mutation.mutate({
      nom,
      prix: Number(prix),
      categorie,
      disponible,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ajouter un plat</Text>

      <Text style={styles.label}>Nom du plat</Text>
      <TextInput
        placeholder="Ex : Tacos"
        value={nom}
        onChangeText={setNom}
        style={styles.input}
      />

      <Text style={styles.label}>Prix</Text>
      <TextInput
        placeholder="Ex : 35"
        keyboardType="numeric"
        value={prix}
        onChangeText={setPrix}
        style={styles.input}
      />

      <Text style={styles.label}>Catégorie</Text>
      <TextInput
        placeholder="Ex : Fast Food"
        value={categorie}
        onChangeText={setCategorie}
        style={styles.input}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Disponible</Text>

        <Switch
          value={disponible}
          onValueChange={setDisponible}
          trackColor={{ true: "#FF6B35" }}
        />
      </View>

      <TouchableOpacity
        style={styles.saveBtn}
        onPress={handleSubmit}
        disabled={mutation.isPending}
      >
        <Text style={styles.saveText}>
          {mutation.isPending
            ? "Enregistrement..."
            : "Enregistrer le plat"}
        </Text>
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