import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getLivroById, getNomeCategoria } from '../../data/livros';

export default function LivroDetalheScreen() {
  // useLocalSearchParams pega os parâmetros da URL.
  // Aqui o segmento é [id], então recebemos { id: '3' } por exemplo.
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const livro = getLivroById(id);

  if (!livro) {
    return (
      <View style={styles.containerVazio}>
        <Text>Livro não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Stack.Screen aqui dentro permite SOBRESCREVER opções do cabeçalho
          dinamicamente para esta tela específica (título = nome do livro). */}
      <Stack.Screen options={{ title: livro.titulo }} />

      <Text style={styles.capa}>{livro.capa}</Text>
      <Text style={styles.titulo}>{livro.titulo}</Text>
      <Text style={styles.autor}>{livro.autor} • {livro.ano}</Text>

      <View style={styles.linhaInfos}>
        <Text style={styles.info}>{livro.paginas} páginas</Text>
        {/* Link cruzado: detalhe -> categoria. Demonstra navegar entre
            diferentes ramos do app a partir de um detalhe. */}
        <Link href={`/categoria/${livro.categoria}`} style={styles.linkCategoria}>
          {getNomeCategoria(livro.categoria)}
        </Link>
      </View>

      <Text style={styles.subtitulo}>Ementa</Text>
      <Text style={styles.ementa}>{livro.ementa}</Text>

      <Pressable style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.botaoVoltarTexto}>Voltar</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerVazio: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  container: { padding: 16, gap: 8 },
  capa: { fontSize: 80, textAlign: 'center', marginVertical: 16 },
  titulo: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  autor: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 8 },
  linhaInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  info: { fontSize: 14, color: '#444' },
  linkCategoria: { fontSize: 14, color: '#0a7ea4', fontWeight: '600' },
  subtitulo: { fontSize: 18, fontWeight: '600', marginTop: 16 },
  ementa: { fontSize: 15, lineHeight: 22, color: '#333' },
  botaoVoltar: {
    marginTop: 24,
    backgroundColor: '#e5e7eb',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoVoltarTexto: { fontSize: 16, fontWeight: '600' },
});
