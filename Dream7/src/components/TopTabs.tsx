import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Colors, Radius, Spacing } from '../theme/tokens';

export type TopTabKey = 'WINZOMANIA' | 'WORLD WAR' | 'PLAYER XCHANGE';

export default function TopTabs({ value, onChange }: { value: TopTabKey; onChange: (v: TopTabKey) => void }) {
  const tabs: TopTabKey[] = ['WINZOMANIA', 'WORLD WAR', 'PLAYER XCHANGE'];
  return (
    <View style={styles.container}>
      <View style={styles.segment}>
        {tabs.map((t) => {
          const active = t === value;
          return (
            <Pressable key={t} onPress={() => onChange(t)} style={[styles.tab, active && styles.tabActive]}>
              <Text style={[styles.tabText, active && styles.tabTextActive]}>{t}</Text>
            </Pressable>
          );
        })}
      </View>
      {value !== 'WINZOMANIA' && <Text style={styles.stub}>Coming soon…</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: Spacing.xl, paddingBottom: Spacing.lg },
  segment: { backgroundColor: Colors.card, borderRadius: Radius.pill, padding: 4, flexDirection: 'row' },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, borderRadius: Radius.pill },
  tabActive: { backgroundColor: Colors.primary },
  tabText: { color: Colors.text, fontWeight: '700', fontSize: 12 },
  tabTextActive: { color: '#2A0E47' },
  stub: { color: Colors.textMuted, fontSize: 12, paddingTop: Spacing.sm, paddingLeft: 4 },
});
