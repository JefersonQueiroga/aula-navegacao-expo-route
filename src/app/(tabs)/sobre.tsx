import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SobreScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Biblioteca do Curso</Text>
        <Text style={styles.paragrafo}>
          Aplicativo didático construído na disciplina de Desenvolvimento de
          Dispositivos Móveis do IFRN.
        </Text>
        <Text style={styles.paragrafo}>
          Objetivo: demonstrar os conceitos principais de navegação com
          Expo Router (Stack, Tabs, rotas dinâmicas, modais e layouts
          aninhados) usando apenas dados estáticos e sem estado global.
        </Text>
        <Text style={styles.versao}>Expo SDK 55</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  conteudo: { padding: 24, gap: 12 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  paragrafo: { fontSize: 15, lineHeight: 22, color: '#333' },
  versao: { fontSize: 13, color: '#999', marginTop: 24 },
});
