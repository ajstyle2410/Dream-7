
import React from 'react';
import { View, Text } from 'react-native';
import { Game } from '../types';

interface Props {
  label: string;
  icon: string;
  category: string;
  items: Game[];
  favorites: Set<string>;
  onFavorite: (game: Game) => void;
}

export default function CategoryRow({ label, icon, category, items, favorites, onFavorite }: Props) {
  return (
    <View>
      <Text>{icon} {label}</Text>
      {items.map((game) => (
        <Text key={game.id} onPress={() => onFavorite(game)}>
          {game.name} {favorites.has(game.id) ? '⭐' : '-'}
        </Text>
      ))}
    </View>
  );
}
