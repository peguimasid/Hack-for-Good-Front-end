import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image } from 'react-native';

import api from '../../../services/api';

import styles from './styles';

export default function News() {
  const [news, setNews] = useState([]);

  async function loadNews() {
    const response = await api.get('news');
    setNews(response.data);
  }

  useEffect(() => {
    loadNews();
  }, [])

  return (
    <View style={styles.container}>

      <FlatList
        data={news}
        keyExtractor={notice => String(notice.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: notice }) => (
          <View style={styles.notice}>
          <Image 
          style={styles.image} 
          source={{uri: notice.image}}
          />
          <View style={styles.informationContainer}>
            <Text style={styles.title}>{notice.title}</Text>
            <Text style={styles.description}>{notice.description}</Text>
          </View>
        </View>
        )}
      />
    </View>
  );
}
