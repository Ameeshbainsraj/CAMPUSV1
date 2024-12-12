import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles, colors } from './style/GlobalStyles';

const MyFeed = () => {
  const [posts, setPosts] = useState([
    { id: '1', content: 'Welcome to My Campus!', likes: 5 },
    { id: '2', content: 'Don’t forget to check your timetable.', likes: 3 },
  ]);
  const [comment, setComment] = useState('');

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => post.id === id ? { ...post, likes: post.likes + 1 } : post)
    );
  };

  const handleShare = (content) => {
    // Placeholder for sharing logic
    console.log(`Shared: ${content}`);
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.header}>My Feed</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postText}>{item.content}</Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => handleLike(item.id)}>
                <Text style={styles.actionText}>👍 {item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('Comment')}>
                <Text style={styles.actionText}>💬 Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleShare(item.content)}>
                <Text style={styles.actionText}>🔗 Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  postText: {
    fontSize: 16,
    color: colors.text,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default MyFeed;
