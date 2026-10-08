import { ThemedText } from "@/components/themed-text";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function Equipos() {
    return (
    <View>      
        <Link
            href={{ pathname: "/equipos/[id]", params: { id: "1" } }}
            asChild>
            <Pressable>
            <ThemedText>
            Equipo 1
            </ThemedText>
            </Pressable>
        </Link>

         <Link
            href={{ pathname: "/equipos/[id]", params: { id: "2" } }}
            asChild>
            <Pressable>
            <ThemedText>
            Equipo 2
            </ThemedText>
            </Pressable>
        </Link>
</View>  
    )
}