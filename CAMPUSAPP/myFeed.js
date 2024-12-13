import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles, colors } from './style/GlobalStyles';

const MyFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      type: 'image',
      likes: 0,
      comments: ['Great post!', 'Love this!'],
    },
    {
      id: '2',
      type: 'video',
      likes: 0,
      comments: ['Amazing video!', 'Cool!'],
    },
  ]);
  const [currentComments, setCurrentComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const openComments = (comments) => {
    setCurrentComments(comments);
    setModalVisible(true);
  };

  const addComment = () => {
    setCurrentComments((prev) => [...prev, commentText]);
    setCommentText('');
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.header}>My Feed</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <View style={[styles.media, styles.placeholder]}>
              <Text style={styles.placeholderText}>
                {item.type === 'image' ? 'Image' : 'Video'}
              </Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => handleLike(item.id)}>
                <Icon
                  name={item.likes > 0 ? 'heart' : 'heart-outline'}
                  size={24}
                  color={item.likes > 0 ? 'red' : colors.primary}
                />
              </TouchableOpacity>
              <Text style={styles.likeCount}>{item.likes} Likes</Text>
              <TouchableOpacity onPress={() => openComments(item.comments)}>
                <Icon name="chatbubble-outline" size={24} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.commentsBox}>
            <FlatList
              data={currentComments}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <Text style={styles.comment}>{item}</Text>
              )}
            />
            <View style={styles.commentInputContainer}>
              <TextInput
                style={styles.commentInput}
                placeholder="Add a comment..."
                value={commentText}
                onChangeText={setCommentText}
              />
              <TouchableOpacity onPress={addComment}>
                <Icon name="send" size={24} color={colors.primary} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.closeModal}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  media: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0', // Light gray background
  },
  placeholderText: {
    color: '#888',
    fontSize: 18,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  likeCount: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.text,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentsBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxHeight: '80%',
  },
  comment: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 5,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  closeModal: {
    marginTop: 10,
    alignItems: 'center',
  },
  closeModalText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default MyFeed;
