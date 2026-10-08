import * as Device from 'expo-device';
import { Link } from 'expo-router';
import { Platform, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            SIGMA
          </ThemedText>
        </ThemedView>

        <ThemedText type="code" style={styles.code}>
          Selecciona una de las opciones del menu para continuar
        </ThemedText>

        <ThemedView type="backgroundElement" style={styles.stepContainer}>
        <Link href="/equipos" asChild>
          <Pressable style={styles.menuButton}>
            <ThemedText type="smallBold" style={styles.menuButtonText}>
              Equipos
            </ThemedText>
          </Pressable>
        </Link>
        <Link href="/tareas" asChild>
          <Pressable style={styles.menuButton}>
            <ThemedText type="smallBold" style={styles.menuButtonText}>
              Tareas
            </ThemedText>
          </Pressable>
        </Link>
        <Link href="/nuevatarea" asChild>
          <Pressable style={styles.menuButton}>
            <ThemedText type="smallBold" style={styles.menuButtonText}>
              Nueva Tarea
            </ThemedText>
          </Pressable>
        </Link>
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
 
  menuButton: {
  backgroundColor: '#1E3A8A',
  borderRadius: 16,
  paddingVertical: 18,
  paddingHorizontal: 24,
  alignItems: 'center',
  alignSelf: 'stretch',
  elevation: 4,
},
menuButtonText: {
  color: '#FFFFFF',
  fontSize: 16,
},
});
