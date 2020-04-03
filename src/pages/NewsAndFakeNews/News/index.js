import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image } from 'react-native';

import api from '../../../services/api';

import styles from './styles';

export default function News() {
  const [news, setNews] = useState([]);
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingPages, setLoadingPages] = useState(false);

  async function loadNews() {
    if(loadingPages) {
      return;
    }

    setLoadingPages(true)

    const response = await api.get('news', {
      params: { page }
    });

    setNews([...news, ...response.data]);
    setLoad(false);
    setPage(page + 1);
    setLoadingPages(false);
  }

  useEffect(() => {
    loadNews();
  }, [])

  if (load) {
    return <View style={styles.loading}><Text style={styles.loadingText}>Carregando</Text></View>
  }

  return (

    <View style={styles.container}>

      <FlatList
        data={news}
        keyExtractor={notice => String(notice.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadNews}
        onEndReachedThreshold={0.2}
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
