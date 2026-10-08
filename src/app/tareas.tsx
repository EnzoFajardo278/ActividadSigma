import { ThemedText } from '@/components/themed-text';
import{ ThemedView } from '@/components/themed-view';
import { Pressable } from 'react-native';

export default function Tareas() {
  return (
    <ThemedView style={{ flex: 1, padding: 24 }}>
      <ThemedText type="title">Tareas</ThemedText>
      <ThemedText>Esta es la pantalla de Tareas</ThemedText>
    </ThemedView>
  );
}   