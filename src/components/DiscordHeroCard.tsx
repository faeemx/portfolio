'use client';

import React from 'react';
import { useLanyard } from '@/lib/use-lanyard';
import { DEFAULT_DISCORD_USER_ID } from '@/lib/discord-config';

export default function DiscordHeroCard() {
  const { data } = useLanyard(DEFAULT_DISCORD_USER_ID);

  const user = data?.discord_user;
  const status = data?.discord_status || 'offline';
  const isOnline = status !== 'offline';

  // Find priority activity: Spotify first, then non-custom (e.g. VS Code, Game), then custom status
  const spotify = data?.listening_to_spotify ? data.spotify : null;
  const nonCustomActivities = data?.activities?.filter((a) => a.type !== 4) || [];
  const customStatus = data?.activities?.find((a) => a.type === 4);
  const primaryActivity = nonCustomActivities[0];

  const avatarUrl = user?.avatar
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=128`
    : 'https://cdn.discordapp.com/embed/avatars/0.png';

  const statusColor = {
    online: '#22c55e',
    idle: '#eab308',
    dnd: '#ef4444',
    offline: '#71717a',
  }[status];

  const statusText = {
    online: 'Online',
    idle: 'Idle',
    dnd: 'Do Not Disturb',
    offline: 'Offline',
  }[status];

  const displayName = user?.global_name || user?.display_name || 'Mando';
  const username = user?.username || 'faeemaxn';

  return (
    <div className="w-full max-w-md bg-black/60 border border-white/10 rounded-2xl p-5 backdrop-blur-xl font-mono text-xs shadow-2xl relative overflow-hidden group hover:border-[var(--accent)]/50 transition-all duration-300">
      {/* Background glow based on status or spotify */}
      <div
        className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: spotify ? '#1db954' : statusColor }}
      />

      {/* Top row: Avatar + User Info + Status */}
      <div className="flex items-center gap-4 pb-4 border-b border-white/10">
        <div className="relative shrink-0">
          <img
            src={avatarUrl}
            alt={displayName}
            className="w-14 h-14 rounded-2xl object-cover bg-neutral-900 border border-white/10 shadow-lg"
          />
          {/* Live pulsing status badge */}
          <span
            className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#0d0d0d] flex items-center justify-center"
            style={{ backgroundColor: statusColor }}
          >
            {isOnline && (
              <span
                className="w-full h-full rounded-full animate-ping opacity-75"
                style={{ backgroundColor: statusColor }}
              />
            )}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-base font-bold text-white truncate group-hover:text-[var(--accent)] transition-colors">
              {displayName}
            </h2>
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border shrink-0"
              style={{
                borderColor: `${statusColor}40`,
                backgroundColor: `${statusColor}15`,
                color: statusColor,
              }}
            >
              {statusText}
            </span>
          </div>

          <p className="text-[var(--text-dim)] text-xs mt-0.5">@{username}</p>

          <p className="text-[10px] text-white/40 mt-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: statusColor }} />
            <span>
              {data?.active_on_discord_desktop
                ? 'Desktop Discord'
                : data?.active_on_discord_mobile
                ? 'Mobile Discord'
                : data?.active_on_discord_web
                ? 'Web Discord'
                : 'Discord Presence'}
            </span>
          </p>
        </div>
      </div>

      {/* Activity Box */}
      <div className="pt-4 space-y-3">
        <div className="text-[10px] uppercase tracking-wider text-[var(--text-dim)] flex items-center justify-between">
          <span>Live Activity</span>
          {isOnline && <span className="text-[var(--accent)] animate-pulse">● realtime</span>}
        </div>

        {spotify ? (
          /* Spotify rich presence */
          <div className="p-3 rounded-xl bg-[#1db954]/10 border border-[#1db954]/20 flex items-center gap-3">
            {spotify.album_art_url ? (
              <img
                src={spotify.album_art_url}
                alt={spotify.album}
                className="w-11 h-11 rounded-lg object-cover shadow"
              />
            ) : (
              <div className="w-11 h-11 rounded-lg bg-[#1db954]/20 flex items-center justify-center text-[#1db954] text-lg">
                ♫
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-[#1db954] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span>Listening to Spotify</span>
                <span className="inline-block animate-pulse">♪</span>
              </p>
              <p className="text-white font-medium text-xs truncate mt-0.5">{spotify.song}</p>
              <p className="text-[var(--text-dim)] text-[11px] truncate">{spotify.artist}</p>
            </div>
          </div>
        ) : primaryActivity ? (
          /* VS Code / Game / App presence */
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <div className="flex items-center gap-1.5 text-[var(--accent)] font-semibold text-[10px] uppercase tracking-wider">
              <span>
                {primaryActivity.name.toLowerCase().includes('code')
                  ? '💻 CODING'
                  : '🎮 PLAYING'}
              </span>
              <span>— {primaryActivity.name}</span>
            </div>
            {primaryActivity.details && (
              <p className="text-white text-xs truncate font-medium">{primaryActivity.details}</p>
            )}
            {primaryActivity.state && (
              <p className="text-[var(--text-dim)] text-[11px] truncate">{primaryActivity.state}</p>
            )}
          </div>
        ) : customStatus?.state ? (
          /* Custom Status */
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
            <span className="text-base">💭</span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-[var(--text-dim)] uppercase">Custom Status</p>
              <p className="text-white text-xs truncate mt-0.5">{customStatus.state}</p>
            </div>
          </div>
        ) : (
          /* Idle / No active game */
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center text-[var(--text-dim)] text-xs">
            {isOnline ? 'Active on Discord (No rich presence active)' : 'Currently offline on Discord'}
          </div>
        )}

        {/* Footer Link */}
        <div className="pt-1 flex items-center justify-between text-[11px]">
          <span className="text-[var(--text-dim)] text-[10px]">ID: 1409447267290714222</span>
          <a
            href="https://discord.com/users/1409447267290714222"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline flex items-center gap-1 font-medium"
          >
            Open in Discord ↗
          </a>
        </div>
      </div>
    </div>
  );
}
