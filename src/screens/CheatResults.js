// src/screens/CheatResults.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import { fetchGameCheats } from '../api/chatgpt';
import styles from '../styles/CheatResults.styles';

const CheatResults = () => {
  const search = useSelector((state) => state.search.searchQuery);
  const platforms = useSelector((state) => state.search.selectedPlatforms);
  const [loading, setLoading] = useState(true);
  const [cheats, setCheats] = useState('');
  const [error, setError] = useState(null);

  const getCheats = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchGameCheats(search, platforms);
      setCheats(result);
    } catch (err) {
      setError('Failed to fetch cheat codes. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search && platforms.length > 0) {
      getCheats();
    }
  }, [search, platforms]);

  const renderCheats = () => {
    return cheats.split('\n').map((line, index) => {
      if (line.startsWith('###')) {
        return (
          <Text key={index} style={styles.sectionTitle}>
            {line.replace(/^###\s*/, '')}
          </Text>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <Text key={index} style={styles.cheatHeader}>
            {line.replace(/\*\*/g, '')}
          </Text>
        );
      } else {
        return (
          <Text key={index} style={styles.cheatText}>
            {line}
          </Text>
        );
      }
    });
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#00FFAA" />
        <Text style={styles.loadingText}>Fetching cheats...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={getCheats}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Cheat Codes for {search}</Text>
      {renderCheats()}
    </ScrollView>
  );
};

export default CheatResults;
