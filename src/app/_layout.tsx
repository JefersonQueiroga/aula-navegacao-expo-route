import { Stack } from 'expo-router';

// Stack raiz: engloba o grupo (tabs) e as telas que abrem "por cima" das tabs
// (detalhe de livro, categoria, modal de busca). O grupo (tabs) entra sem
// cabeçalho porque as próprias tabs já cuidam disso.
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="livro/[id]" options={{ title: 'Livro' }} />
      <Stack.Screen name="categoria/[slug]" options={{ title: 'Categoria' }} />
      <Stack.Screen
        name="buscar"
        options={{ presentation: 'modal', title: 'Buscar' }}
      />
    </Stack>
  );
}
