import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


export default function NuevaTarea() {
    return (
        <ThemedView style={{ flex: 1, padding: 24 }}>
            <ThemedText type="title">Nueva Tarea</ThemedText>
            <ThemedText>Esta es la pantalla para crear una nueva tarea</ThemedText>
        </ThemedView>
    );
}