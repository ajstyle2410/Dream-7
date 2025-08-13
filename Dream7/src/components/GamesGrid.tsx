
import React from 'react';
import { View, Text } from 'react-native';
import { Game } from '../types';

interface Props {
  featured: Game[];
  favorites: Set<string>;
  onFavorite: (game: Game) => void;
}

export default function GamesGrid({ featured, favorites, onFavorite }: Props) {
  // Render your grid here...
  return (
    <View>
      {featured.map((game) => (
        <Text key={game.id}>
          {game.name} {favorites.has(game.id) ? '❤️' : '🤍'}
        </Text>
      ))}
    </View>
  );
}
