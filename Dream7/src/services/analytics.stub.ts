
type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

let currentUserId: string | undefined;
const queue: { name: string; params?: AnalyticsParams; ts: number }[] = [];

export const Analytics = {
  setUserId(id?: string) {
    currentUserId = id;
    console.log('[analytics] setUserId:', id);
  },

  setUserProperty(key: string, value: string | number | boolean | null) {
    console.log('[analytics] setUserProperty:', { key, value });
  },

  track(name: string, params?: AnalyticsParams) {
    const event = { name, params, ts: Date.now() };
    queue.push(event);
    console.log('[analytics] event:', { userId: currentUserId, ...event });
  },

  timeStart(name: string) {
    this.track(`timer_start:${name}`);
  },

  timeEnd(name: string, params?: AnalyticsParams) {
    this.track(`timer_end:${name}`, params);
  },

  flush() {
    const copied = [...queue];
    queue.length = 0;
    console.log('[analytics] flush', { count: copied.length });
    return copied;
  },
};

export type { AnalyticsParams };
