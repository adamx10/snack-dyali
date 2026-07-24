
   import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

const colors = {
  primary: '#FF6B35',
  primaryLight: '#FFE3D6',
  secondary: '#2EC4B6',
  secondaryLight: '#D8F6F3',
  background: '#F8F9FA',
  card: '#FFFFFF',
  text: '#222222',
  textMuted: '#6B7280',
  textLight: '#9CA3AF',
  border: '#EEEEEE',
  success: '#2ECC71',
  successLight: '#E6F9EE',
};



const foods = [
  {
    id: '1',
    nom: 'Tajine Kefta',
    description: 'Plat traditionnel marocain',
    prix: '35 DH',
    disponible: true,
    icon: 'restaurant-outline',
  },
  {
    id: '2',
    nom: 'Thé à la Menthe',
    description: 'Boisson chaude',
    prix: '8 DH',
    disponible: true,
    icon: 'cafe-outline',
  },
  {
    id: '3',
    nom: 'Brochettes Mixte',
    description: 'Viande grillée',
    prix: '30 DH',
    disponible: false,
    icon: 'flame-outline',
  },
  {
    id: '4',
    nom: 'Jus d\'Avocat',
    description: 'Boisson fraîche',
    prix: '12 DH',
    disponible: true,
    icon: 'wine-outline',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          {/* <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Ionicons name="menu-outline" size={22} color={colors.text} />
          </TouchableOpacity> */}

          <View style={styles.headerTitleWrap}>
            <Text style={styles.headerTitle}>Menu de Hamid</Text>
            <Text style={styles.headerSubtitle}>Aujourd'hui, 24 juillet</Text>
          </View>

          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Ionicons name="create-outline" size={20} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.syncBadge}>
          <View style={styles.syncDot} />
          <Text style={styles.syncText}>Panier synchronisé</Text>
        </View>

      

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.chipsRow}
        >
          
        </ScrollView>

        <View style={styles.list}>
          {foods.map((food) => (
            <View key={food.id} style={styles.card}>
              <View style={styles.cardIconWrap}>
                <Ionicons name={food.icon} size={22} color={colors.primary} />
              </View>

              <View style={styles.cardInfo}>
                <Text style={styles.cardName}>{food.nom}</Text>
                <Text style={styles.cardDescription}>{food.description}</Text>
                <View style={styles.cardBottomRow}>
                  <Text style={styles.cardPrice}>{food.prix}</Text>
                  <View   //disponible
                    style={[
                      styles.badge,
                      {
                        backgroundColor: food.disponible
                          ? colors.successLight
                          : '#FFE8E8',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.badgeText,
                        {
                          color: food.disponible ? colors.success : '#FF4D4D',
                        },
                      ]}
                    >
                      {food.disponible ? 'Disponible' : 'Indisponible'}
                    </Text>
                  </View>
                </View>
              </View>

             
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab} activeOpacity={0.85} onPress={()=>router.push("/add")}>
        <Ionicons name="add" size={26} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 12,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  headerTitleWrap: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    justifyContent:"center",
    alignItems:"center"
  },
  headerSubtitle: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  syncBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: colors.successLight,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
    marginBottom: 12,
  },
  syncDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.success,
    marginRight: 6,
  },
  syncText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.success,
  },
  
 
  chipsRow: {
    marginTop: 16,
    marginBottom: 8,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 8,
  },
  chipSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textMuted,
  },
  chipTextSelected: {
    color: '#FFFFFF',
  },
  list: {
    marginTop: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  cardIconWrap: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  cardDescription: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
    marginBottom: 8,
  },
  cardBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  badge: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
});
  

