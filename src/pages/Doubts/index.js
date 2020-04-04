import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';


export default function Doubts() {
  const navigation = useNavigation();

  function navigateToMainPage() {
    navigation.navigate('Main');
  }

  return (
<>
    <View style={styles.header}>
    <TouchableOpacity onPress={navigateToMainPage}>
        <View style={styles.headerContent}>
          <Icon name="chevron-left" size={35} color="#fff"/>
          <Text style={styles.headerText}>Voltar</Text>
        </View>
        </TouchableOpacity>
    </View>

    <View style={styles.container}>
      <View style={styles.doubtsContainer}>
<Collapse>

    <CollapseHeader style={styles.doubtsTitle}>
      <View>
        <Text style={styles.doubtTitle}>Click here</Text>
      </View>
    </CollapseHeader>

    <CollapseBody style={styles.doubtsDescription}>
      <Text style={styles.doubtDescription}>A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real. </Text>
    </CollapseBody>

</Collapse>
      </View>
    </View>
</>
  );
}
