import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image } from 'react-native';

import api from '../../../services/api';

import styles from './styles';

export default function News() {
  const [fakeNews, setFakeNews] = useState([]);
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingPages, setLoadingPages] = useState(false);

  async function loadFakeNews() {
    if(loadingPages) {
      return;
    }

    setLoadingPages(true)

    const response = await api.get('fakenews', {
      params: { page }
    });

    setFakeNews([...fakeNews, ...response.data]);
    setPage(page + 1);
    setLoad(false);
    setLoadingPages(false);
  }

  useEffect(() => {
    loadFakeNews();
  }, [])

  if (load) {
    return <View style={styles.loading}><Text style={styles.loadingText}>Carregando</Text></View>
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={fakeNews}
        keyExtractor={notice => String(notice.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadFakeNews}
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
