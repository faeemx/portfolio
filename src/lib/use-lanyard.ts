'use client';

import { useEffect, useState } from 'react';

export interface Activity {
  id: string;
  name: string;
  type: number; // 0: Playing, 1: Streaming, 2: Listening, 3: Watching, 4: Custom, 5: Competing
  state?: string;
  details?: string;
  timestamps?: {
    start?: number;
    end?: number;
  };
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
}

export interface SpotifyData {
  track_id: string;
  song: string;
  artist: string;
  album: string;
  album_art_url: string;
}

export interface LanyardData {
  discord_user: {
    id: string;
    username: string;
    discriminator: string;
    avatar: string | null;
    global_name?: string | null;
  };
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  activities: Activity[];
  listening_to_spotify: boolean;
  spotify: SpotifyData | null;
  active_on_discord_web: boolean;
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
}

export function useLanyard(userId: string) {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId || userId === 'DISCORD_USER_ID') {
      setLoading(false);
      return;
    }

    let socket: WebSocket | null = null;
    let heartbeatInterval: NodeJS.Timeout | null = null;
    let isSubscribed = true;

    // 1. Initial REST fetch for instant display
    fetch(`https://api.lanyard.rest/v1/users/${userId}`)
      .then((res) => res.json())
      .then((res) => {
        if (isSubscribed && res.success) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isSubscribed) {
          setError(err.message);
          setLoading(false);
        }
      });

    // 2. WebSocket for real-time live activity & presence push
    function connectSocket() {
      try {
        socket = new WebSocket('wss://api.lanyard.rest/socket');

        socket.onmessage = (event) => {
          try {
            const message = JSON.parse(event.data);
            const { op, t, d } = message;

            if (op === 1) {
              // Hello packet: start heartbeat
              const heartbeatMs = d.heartbeat_interval;
              heartbeatInterval = setInterval(() => {
                if (socket?.readyState === WebSocket.OPEN) {
                  socket.send(JSON.stringify({ op: 3 }));
                }
              }, heartbeatMs);

              // Subscribe to user presence
              if (socket && socket.readyState === WebSocket.OPEN) {
                socket.send(
                  JSON.stringify({
                    op: 2,
                    d: {
                      subscribe_to_id: userId,
                    },
                  })
                );
              }
            } else if (t === 'INIT_STATE' || t === 'PRESENCE_UPDATE') {
              if (isSubscribed && d) {
                setData(d);
                setLoading(false);
              }
            }
          } catch (e) {
            console.error('Lanyard socket message parse error:', e);
          }
        };

        socket.onerror = () => {
          // Socket error, fallback to REST
        };

        socket.onclose = () => {
          if (heartbeatInterval) clearInterval(heartbeatInterval);
        };
      } catch (err) {
        console.error('Failed to connect to Lanyard socket:', err);
      }
    }

    connectSocket();

    return () => {
      isSubscribed = false;
      if (heartbeatInterval) clearInterval(heartbeatInterval);
      if (socket) {
        socket.close();
      }
    };
  }, [userId]);

  return { data, loading, error };
}
