import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Post } from '../types/post';
import { Avatar } from './Avatar';
import { Colors } from '../constants/Colors';
import { formatDate } from '../utils/formatDate';
import { Ionicons } from '@expo/vector-icons';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import { useAuthStore } from '../store/authStore';

interface PostCardProps {
  post: Post;
}

const { width } = Dimensions.get('window');

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const user = useAuthStore((state) => state.user);
  const toggleLike = useMutation(api.likes.toggleLike);
  
  const likeCount = useQuery(api.likes.getLikeCount, { postId: post._id });
  const hasLiked = useQuery(
    api.likes.hasUserLiked,
    user ? { postId: post._id, userId: user._id } : 'skip'
  );

  const [isLiked, setIsLiked] = useState(false);
  const [localLikeCount, setLocalLikeCount] = useState(0);

  useEffect(() => {
    if (hasLiked !== undefined) {
      setIsLiked(hasLiked);
    }
  }, [hasLiked]);

  useEffect(() => {
    if (likeCount !== undefined) {
      setLocalLikeCount(likeCount);
    }
  }, [likeCount]);

  const handleLike = async () => {
    if (!user) return;

    // Optimistic update
    setIsLiked(!isLiked);
    setLocalLikeCount(isLiked ? localLikeCount - 1 : localLikeCount + 1);

    try {
      await toggleLike({ postId: post._id, userId: user._id });
    } catch (error) {
      // Revert on error
      setIsLiked(isLiked);
      setLocalLikeCount(likeCount || 0);
      console.error('Error toggling like:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header - Author info */}
      <View style={styles.header}>
        <Avatar
          name={post.author?.name || 'Unknown'}
          avatarUrl={post.author?.avatarUrl}
          size={32}
        />
        <View style={styles.headerText}>
          <Text style={styles.authorName}>{post.author?.name || 'Unknown'}</Text>
          <Text style={styles.timestamp}>{formatDate(post.createdAt)}</Text>
        </View>
      </View>

      {/* Image */}
      {post.imageUrl && (
        <Image
          source={{ uri: post.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      {/* Actions - Like */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
          <Ionicons
            name={isLiked ? 'heart' : 'heart-outline'}
            size={28}
            color={isLiked ? Colors.error : Colors.text}
          />
        </TouchableOpacity>
        {localLikeCount > 0 && (
          <Text style={styles.likeCount}>
            {localLikeCount} {localLikeCount === 1 ? 'like' : 'likes'}
          </Text>
        )}
      </View>

      {/* Caption */}
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>
          <Text style={styles.authorNameInCaption}>{post.author?.name} </Text>
          {post.caption}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBackground,
    marginBottom: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.border,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  headerText: {
    marginLeft: 12,
    flex: 1,
  },
  authorName: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  timestamp: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  image: {
    width: width,
    height: width,
    backgroundColor: Colors.border,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  likeButton: {
    padding: 4,
    marginRight: 8,
  },
  likeCount: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  captionContainer: {
    padding: 12,
  },
  caption: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
  },
  authorNameInCaption: {
    fontWeight: '600',
  },
});