'use client';

import React, { useState } from 'react';
import { useLanyard } from '@/lib/use-lanyard';
import { DEFAULT_DISCORD_USER_ID } from '@/lib/discord-config';

interface DiscordProfileProps {
  userId?: string;
}

export default function DiscordProfile({ userId = DEFAULT_DISCORD_USER_ID }: DiscordProfileProps) {
  const { data } = useLanyard(userId);
  const [showDetails, setShowDetails] = useState(false);

  // If no user ID configured, show sleek placeholder/mock profile
  const user = data?.discord_user;
  const status = data?.discord_status || 'offline';
  const isOnline = status !== 'offline';

  // Find priority activity: Spotify first, then custom/game/VSCode
  const spotify = data?.listening_to_spotify ? data.spotify : null;
  const nonCustomActivities = data?.activities?.filter((a) => a.type !== 4) || [];
  const customStatus = data?.activities?.find((a) => a.type === 4);
  const primaryActivity = nonCustomActivities[0];

  // Determine avatar URL
  const avatarUrl = user?.avatar
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=80`
    : 'https://cdn.discordapp.com/embed/avatars/0.png';

  const statusColor = {
    online: '#22c55e',
    idle: '#eab308',
    dnd: '#ef4444',
    offline: '#71717a',
  }[status];

  const statusLabel = {
    online: 'Online',
    idle: 'Away / Idle',
    dnd: 'Do Not Disturb',
    offline: 'Offline',
  }[status];

  // Activity brief text
  let activityBrief = '';
  let activityIcon = '●';

  if (spotify) {
    activityIcon = '♫';
    activityBrief = `${spotify.song} — ${spotify.artist}`;
  } else if (primaryActivity) {
    if (primaryActivity.name.toLowerCase().includes('visual studio code') || primaryActivity.name.toLowerCase().includes('code')) {
      activityIcon = '💻';
      activityBrief = primaryActivity.details ? `VS Code: ${primaryActivity.details}` : 'Coding in VS Code';
    } else {
      activityIcon = '🎮';
      activityBrief = primaryActivity.name;
    }
  } else if (customStatus?.state) {
    activityIcon = '💭';
    activityBrief = customStatus.state;
  } else {
    activityIcon = '●';
    activityBrief = statusLabel;
  }

  const username = user?.global_name || user?.display_name || user?.username || 'Mando';

  return (
    <div className="relative">
      <button
        onClick={() => setShowDetails(!showDetails)}
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/60 border border-[var(--text-dim)] hover:border-[var(--accent)] backdrop-blur-md transition-all duration-300 group cursor-pointer text-left"
        aria-label="Discord Status"
      >
        {/* Avatar with Status Dot */}
        <div className="relative w-6 h-6 shrink-0">
          <img
            src={avatarUrl}
            alt={username}
            className="w-full h-full rounded-full object-cover bg-neutral-900 border border-neutral-700"
          />
          <span
            className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[#0d0d0d]"
            style={{ backgroundColor: statusColor }}
          />
        </div>

        {/* User & Live Activity text */}
        <div className="flex flex-col text-xs font-mono max-w-[140px] sm:max-w-[200px] md:max-w-[240px]">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-white font-semibold truncate group-hover:text-[var(--accent)] transition-colors">
              {username}
            </span>
            <span className="text-[10px] text-[var(--text-dim)] hidden sm:inline">
              [discord]
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-[var(--text-dim)] truncate mt-0.5">
            <span style={{ color: spotify ? '#1db954' : statusColor }} className="shrink-0">
              {activityIcon}
            </span>
            <span className="truncate group-hover:text-[var(--text-primary)] transition-colors">
              {activityBrief}
            </span>
          </div>
        </div>
      </button>

      {/* Popover / Expanded Activity Modal on Hover */}
      {showDetails && (
        <div
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
          className="absolute right-0 top-full mt-2 w-80 p-4 bg-[#121214]/95 border border-[var(--text-dim)] rounded-xl shadow-2xl backdrop-blur-xl z-50 text-xs font-mono animate-in fade-in slide-in-from-top-1 duration-200"
        >
          {/* Header row */}
          <div className="flex items-center gap-3 pb-3 border-b border-white/10">
            <div className="relative w-12 h-12 shrink-0">
              <img
                src={avatarUrl}
                alt={username}
                className="w-full h-full rounded-full object-cover bg-neutral-900 border border-neutral-700"
              />
              <span
                className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-[#121214]"
                style={{ backgroundColor: statusColor }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-bold text-sm text-white truncate">{username}</p>
              <p className="text-[11px] text-[var(--text-dim)] truncate">@{user?.username || 'faeemaxn'}</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: statusColor }} />
                <span className="text-[10px] uppercase tracking-wider" style={{ color: statusColor }}>
                  {statusLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Activity Section */}
          <div className="py-3 space-y-2 border-b border-white/10">
            {spotify ? (
              <div className="p-2.5 rounded-lg bg-[#1db954]/10 border border-[#1db954]/20 space-y-1">
                <div className="flex items-center gap-1.5 text-[#1db954] text-[11px] font-semibold">
                  <span>♫</span>
                  <span>LISTENING TO SPOTIFY</span>
                </div>
                <p className="text-white font-medium truncate">{spotify.song}</p>
                <p className="text-[var(--text-dim)] text-[11px] truncate">by {spotify.artist}</p>
              </div>
            ) : primaryActivity ? (
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1">
                <p className="text-[10px] text-[var(--accent)] font-semibold uppercase tracking-wider">
                  ACTIVE NOW
                </p>
                <p className="text-white font-medium truncate">{primaryActivity.name}</p>
                {primaryActivity.details && (
                  <p className="text-[var(--text-dim)] text-[11px] truncate">{primaryActivity.details}</p>
                )}
                {primaryActivity.state && (
                  <p className="text-[var(--text-dim)] text-[11px] truncate">{primaryActivity.state}</p>
                )}
              </div>
            ) : customStatus?.state ? (
              <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                <p className="text-[10px] text-[var(--text-dim)] uppercase">STATUS</p>
                <p className="text-white mt-0.5">{customStatus.state}</p>
              </div>
            ) : (
              <div className="p-2 text-center text-[var(--text-dim)] text-[11px]">
                {isOnline ? 'Currently active without public rich presence' : 'Currently offline on Discord'}
              </div>
            )}
          </div>

          {/* Footer action */}
          <div className="pt-2.5 flex items-center justify-between text-[11px]">
            <span className="text-[var(--text-dim)]">Lanyard Realtime</span>
            <a
              href={`https://discord.com/users/${userId || '1409447267290714222'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline flex items-center gap-1"
            >
              Open Discord ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
