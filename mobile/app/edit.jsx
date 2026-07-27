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
import { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PlatService from "../src/services/platService.js";

export default function EditPlat() {
  // katrecupiri lina id 
  const { id } = useLocalSearchParams();
  console.log("ID reçu :", id)
  const queryClient = useQueryClient();

  // les champs du formulaire
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [categorie, setCategorie] = useState("");
  const [disponible, setDisponible] = useState(true);

  // kt9leb 3la les plas
  const { data: plat } = useQuery({
    queryKey: ["plat", id],
    queryFn: () => PlatService.getPlatById(id),
    enabled: !!id,
   
  });

   console.log("Plat reçu :", plat);
  useEffect(() => {
    if (plat) {
      setNom(plat.data.nom);
      setPrix(String(plat.data.prix));
      setCategorie(plat.data.categorie);
      setDisponible(plat.data.disponible);
    }
  }, [plat]);

  // modifier le plat
  const updateMutation = useMutation({
    mutationFn: (data) => PlatService.updatePlat(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["plats"] });
      Alert.alert("Succès", "Plat modifié");
      router.back();
    },
  });

  // supprimer le plat
  const deleteMutation = useMutation({
    mutationFn: () => PlatService.deletePlat(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["plats"] });
      Alert.alert("Succès", "Plat supprimé");
      router.back();
    },
  });

  const handleSubmit = () => {
    updateMutation.mutate({
      nom,
      prix: Number(prix),
      categorie,
      disponible,
    });
  };

  const handleDelete = () => {
    Alert.alert("Confirmation", "Supprimer ce plat ?", [
      { text: "Annuler", style: "cancel" },
      { text: "Supprimer", onPress: () => deleteMutation.mutate() },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Modifier le plat</Text>

      <Text style={styles.label}>Nom du plat</Text>
      <TextInput value={nom} onChangeText={setNom} style={styles.input} />

      <Text style={styles.label}>Prix</Text>
      <TextInput
        value={prix}
        onChangeText={setPrix}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={styles.label}>Catégorie</Text>
      <TextInput
        value={categorie}
        onChangeText={setCategorie}
        style={styles.input}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Disponible</Text>
        <Switch value={disponible} onValueChange={setDisponible} />
      </View>

      <TouchableOpacity style={styles.saveBtn} onPress={handleSubmit}>
        <Text style={styles.saveText}>Enregistrer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
        <Text style={styles.deleteText}>Supprimer</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.cancel}>Annuler</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FA", padding: 20 },
  title: { fontSize: 24, fontWeight: "700", marginVertical: 20, textAlign: "center" },
  label: { fontWeight: "600", marginBottom: 8, marginTop: 12, color: "#333" },
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
  saveBtn: { backgroundColor: "#FF6B35", padding: 16, borderRadius: 12, marginTop: 35 },
  saveText: { color: "#fff", textAlign: "center", fontWeight: "700", fontSize: 16 },
  deleteBtn: {
    backgroundColor: "#FFE8E8",
    padding: 16,
    borderRadius: 12,
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#FF4D4D",
  },
  deleteText: { color: "#FF4D4D", textAlign: "center", fontWeight: "700", fontSize: 16 },
  cancel: { textAlign: "center", marginTop: 18, color: "#666", fontSize: 15 },
});