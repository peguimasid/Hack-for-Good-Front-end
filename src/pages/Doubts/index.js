import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
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
<ScrollView>
      <View style={styles.doubtsContainer}>
<Collapse style={styles.collapse}> 

    <CollapseHeader style={styles.doubtsTitle}>
      <View style={styles.viewTitle}>
      <Icon 
          name="chevron-right"
          size={15} 
          color="#4f4f4f"
          style={{ marginTop: 2, paddingRight: 5}}
      />
        <Text style={styles.doubtTitle}>O que é coronavírus?</Text>
      </View>
    </CollapseHeader>

    <CollapseBody style={styles.doubtsDescription}>
      <Text style={styles.doubtDescription}>Limpe regularmente e cuidadosamente as mãos com um  à base de álcool ou lave-as com água e sabão.
      Por quê? Lavar as mãos com água e sabão ou usar álcool nas mãos mata vírus que podem estar nas suas mãos.
      Mantenha pelo menos 1 metro de distância entre você e qualquer pessoa que esteja tossindo ou espirrando.</Text>
    </CollapseBody>

</Collapse>

<Collapse style={styles.collapse}> 

    <CollapseHeader style={styles.doubtsTitle}>
      <View style={styles.viewTitle}>
      <Icon 
          name="chevron-right"
          size={15} 
          color="#4f4f4f"
          style={{ marginTop: 2, paddingRight: 5}}
      />
        <Text style={styles.doubtTitle}>O que é COVID-19?</Text>
      </View>
    </CollapseHeader>

    <CollapseBody style={styles.doubtsDescription}>
      <Text style={styles.doubtDescription}>Limpe regularmente e cuidadosamente as mãos com um  à base de álcool ou lave-as com água e sabão.
      Por quê? Lavar as mãos com água e sabão ou usar álcool nas mãos mata vírus que podem estar nas suas mãos.
      Mantenha pelo menos 1 metro de distância entre você e qualquer pessoa que esteja tossindo ou espirrando.</Text>
    </CollapseBody>

</Collapse>

<Collapse style={styles.collapse}> 

    <CollapseHeader style={styles.doubtsTitle}>
      <View style={styles.viewTitle}>
      <Icon 
          name="chevron-right"
          size={15} 
          color="#4f4f4f"
          style={{ marginTop: 2, paddingRight: 5}}
      />
        <Text style={styles.doubtTitle}>Como o COVID-19 se espalha?</Text>
      </View>
    </CollapseHeader>

    <CollapseBody style={styles.doubtsDescription}>
      <Text style={styles.doubtDescription}>Limpe regularmente e cuidadosamente as mãos com um  à base de álcool ou lave-as com água e sabão.
      Por quê? Lavar as mãos com água e sabão ou usar álcool nas mãos mata vírus que podem estar nas suas mãos.
      Mantenha pelo menos 1 metro de distância entre você e qualquer pessoa que esteja tossindo ou espirrando.</Text>
    </CollapseBody>

</Collapse>

<Collapse style={styles.collapse}> 

    <CollapseHeader style={styles.doubtsTitle}>
      <View style={styles.viewTitle}>
      <Icon 
          name="chevron-right"
          size={15} 
          color="#4f4f4f"
          style={{ marginTop: 2, paddingRight: 5}}
      />
        <Text style={styles.doubtTitle}>O que fazer para nāo propagar da doença?</Text>
      </View>
    </CollapseHeader>

    <CollapseBody style={styles.doubtsDescription}>
      <Text style={styles.doubtDescription}>Limpe regularmente e cuidadosamente as mãos com um  à base de álcool ou lave-as com água e sabão.
      Por quê? Lavar as mãos com água e sabão ou usar álcool nas mãos mata vírus que podem estar nas suas mãos.
      Mantenha pelo menos 1 metro de distância entre você e qualquer pessoa que esteja tossindo ou espirrando.</Text>
    </CollapseBody>

</Collapse>

<Collapse style={styles.collapse}> 

    <CollapseHeader style={styles.doubtsTitle}>
      <View style={styles.viewTitle}>
      <Icon 
          name="chevron-right"
          size={15} 
          color="#4f4f4f"
          style={{ marginTop: 2, paddingRight: 5}}
      />
        <Text style={styles.doubtTitle}>Qual a probabilidade de eu pegar COVID-19?</Text>
      </View>
    </CollapseHeader>

    <CollapseBody style={styles.doubtsDescription}>
      <Text style={styles.doubtDescription}>Limpe regularmente e cuidadosamente as mãos com um  à base de álcool ou lave-as com água e sabão.
      Por quê? Lavar as mãos com água e sabão ou usar álcool nas mãos mata vírus que podem estar nas suas mãos.
      Mantenha pelo menos 1 metro de distância entre você e qualquer pessoa que esteja tossindo ou espirrando.</Text>
    </CollapseBody>

</Collapse>

<Collapse style={styles.collapse}> 

    <CollapseHeader style={styles.doubtsTitle}>
      <View style={styles.viewTitle}>
      <Icon 
          name="chevron-right"
          size={15} 
          color="#4f4f4f"
          style={{ marginTop: 2, paddingRight: 5}}
      />
        <Text style={styles.doubtTitle}>Devo me preocupar com COVID-19?</Text>
      </View>
    </CollapseHeader>

    <CollapseBody style={styles.doubtsDescription}>
      <Text style={styles.doubtDescription}>Limpe regularmente e cuidadosamente as mãos com um  à base de álcool ou lave-as com água e sabão.
      Por quê? Lavar as mãos com água e sabão ou usar álcool nas mãos mata vírus que podem estar nas suas mãos.
      Mantenha pelo menos 1 metro de distância entre você e qualquer pessoa que esteja tossindo ou espirrando.</Text>
    </CollapseBody>

</Collapse>

<Collapse style={styles.collapse}> 

    <CollapseHeader style={styles.doubtsTitle}>
      <View style={styles.viewTitle}>
      <Icon 
          name="chevron-right"
          size={15} 
          color="#4f4f4f"
          style={{ marginTop: 2, paddingRight: 5}}
      />
        <Text style={styles.doubtTitle}>Como me prevenir do Coronavirus?</Text>
      </View>
    </CollapseHeader>

    <CollapseBody style={styles.doubtsDescription}>
      <Text style={styles.doubtDescription}>Limpe regularmente e cuidadosamente as mãos com um  à base de álcool ou lave-as com água e sabão.
      Por quê? Lavar as mãos com água e sabão ou usar álcool nas mãos mata vírus que podem estar nas suas mãos.
      Mantenha pelo menos 1 metro de distância entre você e qualquer pessoa que esteja tossindo ou espirrando.</Text>
    </CollapseBody>

</Collapse>

<Collapse style={styles.collapse}> 

    <CollapseHeader style={styles.doubtsTitle}>
      <View style={styles.viewTitle}>
      <Icon 
          name="chevron-right"
          size={15} 
          color="#4f4f4f"
          style={{ marginTop: 2, paddingRight: 5}}
      />
        <Text style={styles.doubtTitle}>Quem corre risco de ter doenças graves?</Text>
      </View>
    </CollapseHeader>

    <CollapseBody style={styles.doubtsDescription}>
      <Text style={styles.doubtDescription}>Limpe regularmente e cuidadosamente as mãos com um  à base de álcool ou lave-as com água e sabão.
      Por quê? Lavar as mãos com água e sabão ou usar álcool nas mãos mata vírus que podem estar nas suas mãos.
      Mantenha pelo menos 1 metro de distância entre você e qualquer pessoa que esteja tossindo ou espirrando.</Text>
    </CollapseBody>

</Collapse>
      </View>
  </ScrollView>
    </View>
</>
  );
}
