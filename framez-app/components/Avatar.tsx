import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

interface AvatarProps {
  name: string;
  avatarUrl?: string;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ name, avatarUrl, size = 40 }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Use DiceBear API for cool avatars based on name
  const generatedAvatar = `https://api.dicebear.com/7.x/initials/png?seed=${encodeURIComponent(name)}&backgroundColor=405DE6,5B51D8,833AB4`;

  const imageSource = avatarUrl || generatedAvatar;

  return (
    <Image
      source={{ uri: imageSource }}
      style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: Colors.border,
  },
});