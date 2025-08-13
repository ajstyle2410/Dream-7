// src/screens/HomeScreen.tsx
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView, RefreshControl, View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing } from '../theme/tokens';
import { Game } from '../types';
import AppHeader from '../components/AppHeader';
import TopTabs, { TopTabKey } from '../components/TopTabs';
import QuickActions from '../components/QuickActions';
import GamesGrid from '../components/GamesGrid';
import CategoryRow from '../components/CategoryRow';
import BottomBar from '../components/BottomBar';
import QuickPlaySheet from '../components/QuickPlaySheet';

export default function HomeScreen() {
  const [tab, setTab] = useState<TopTabKey>('WINZOMANIA');
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [quickPlayVisible, setQuickPlayVisible] = useState(false);

  const load = useCallback(async () => {
    setErr(null);
    setLoading(true);
    try {
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 600));
      const data = require('../data/games.json') as Game[];
      setGames(data);
    } catch {
      setErr('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  }, [load]);

  const featured = useMemo(() => games.filter((g) => g.category === 'featured'), [games]);
  const cricket = useMemo(() => games.filter((g) => g.category === 'cricket'), [games]);
  const sports = useMemo(() => games.filter((g) => g.category === 'sports'), [games]);

  const onFavorite = (g: Game) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(g.id) ? next.delete(g.id) : next.add(g.id);
      return next;
    });
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={Colors.text} />}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <AppHeader />
        <TopTabs value={tab} onChange={setTab} />
        {tab === 'WINZOMANIA' ? (
          <>
            <QuickActions />
            {loading ? (
              <View style={{ paddingHorizontal: Spacing.xl }}>
                <Skeleton height={180} />
                <View style={{ height: Spacing.lg }} />
                <Skeleton height={180} />
              </View>
            ) : err ? (
              <Text style={styles.error}>{err}</Text>
            ) : games.length === 0 ? (
              <Text style={styles.empty}>No games found.</Text>
            ) : (
              <>
                <GamesGrid featured={featured} onFavorite={onFavorite} favorites={favorites} />
                <View style={styles.divider} />
                <CategoryRow label="Cricket Games" icon="🏏" items={cricket} category="cricket" onFavorite={onFavorite} favorites={favorites} />
                <CategoryRow label="Sports" icon="🏅" items={sports} category="sports" onFavorite={onFavorite} favorites={favorites} />
              </>
            )}
          </>
        ) : (
          <View style={{ paddingHorizontal: Spacing.xl }}>
            <Text style={styles.empty}>Tab content coming soon.</Text>
          </View>
        )}
      </ScrollView>
      <BottomBar onOpenQuickPlay={() => setQuickPlayVisible(true)} />
      <QuickPlaySheet visible={quickPlayVisible} onClose={() => setQuickPlayVisible(false)} />
    </View>
  );
}

function Skeleton({ height }: { height: number }) {
  return <View style={{ height, width: '100%', backgroundColor: Colors.card, borderRadius: 16 }} />;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background },
  error: { color: '#FFBABA', textAlign: 'center', padding: Spacing.lg },
  empty: { color: Colors.textMuted, textAlign: 'center', padding: Spacing.lg },
  divider: { height: 1, backgroundColor: Colors.divider, marginVertical: Spacing.lg, marginHorizontal: Spacing.xl },
});
