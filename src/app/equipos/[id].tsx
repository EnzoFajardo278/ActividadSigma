import {useLocalSearchParams} from 'expo-router';
import{ ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function DetalleEquipo(){
    const {id} = useLocalSearchParams<{id: string}>();

    return(
        <ThemedView style={{flex:1,padding:24}}>
            <ThemedText type="title">Detalle del Equipo </ThemedText>
            <ThemedText>ID del Equipo: {id}</ThemedText>
        </ThemedView>

    )
} 
