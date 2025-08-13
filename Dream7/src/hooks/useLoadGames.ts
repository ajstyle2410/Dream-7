import { useCallback, useEffect, useState } from 'react';
import type { Game } from '../data';
import { loadLocalGames } from '../data';

type Status = 'idle' | 'loading' | 'ready' | 'error';

export function useLoadGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setStatus('loading');
    setError(null);
    try {
      const data = await loadLocalGames();
      setGames(data);
      setStatus('ready');
    } catch (e) {
      setError('Failed to load games');
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { games, status, loading: status === 'loading', error, reload: load };
}
