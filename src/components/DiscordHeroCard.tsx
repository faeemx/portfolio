'use client';

import React from 'react';
import { useLanyard } from '@/lib/use-lanyard';
import { DEFAULT_DISCORD_USER_ID } from '@/lib/discord-config';

export default function DiscordHeroCard() {
  const { data } = useLanyard(DEFAULT_DISCORD_USER_ID);

  const user = data?.discord_user;
  const status = data?.discord_status || 'offline';
  const isOnline = status !== 'offline';

  const spotify = data?.listening_to_spotify ? data.spotify : null;
  const nonCustomActivities = data?.activities?.filter((a) => a.type !== 4) || [];
  const customStatus = data?.activities?.find((a) => a.type === 4);
  const primaryActivity = nonCustomActivities[0];

  const avatarUrl = user?.avatar
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=160`
    : 'https://cdn.discordapp.com/embed/avatars/0.png';

  const statusColor = {
    online: '#22c55e',
    idle: '#eab308',
    dnd: '#ef4444',
    offline: '#71717a',
  }[status];

  // Determine minimal activity string
  let activityText = 'Online';
  let activityIcon = '●';
  let iconColor = statusColor;

  if (spotify) {
    activityIcon = '♫';
    iconColor = '#1db954';
    activityText = `${spotify.song} — ${spotify.artist}`;
  } else if (primaryActivity) {
    if (primaryActivity.name.toLowerCase().includes('code')) {
      activityIcon = '💻';
      activityText = primaryActivity.details ? `VS Code: ${primaryActivity.details}` : 'Coding in VS Code';
    } else {
      activityIcon = '🎮';
      activityText = primaryActivity.name;
    }
  } else if (customStatus?.state) {
    activityIcon = '💭';
    activityText = customStatus.state;
  } else {
    activityIcon = '●';
    activityText = isOnline ? 'Online on Discord' : 'Offline';
  }

  return (
    <div className="flex flex-col items-center sm:items-start gap-2.5 font-mono text-xs">
      {/* Discord PFP with live status dot */}
      <a
        href="https://discord.com/users/1409447267290714222"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group block"
        title="Open Discord Profile"
      >
        <img
          src={avatarUrl}
          alt={user?.global_name || 'Mando'}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover bg-neutral-900 border border-white/10 shadow-xl group-hover:border-[var(--accent)] transition-all duration-300 group-hover:scale-[1.02]"
        />
        {/* Status dot */}
        <span
          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#0d0d0d] shadow-sm"
          style={{ backgroundColor: statusColor }}
        />
      </a>

      {/* Minimal Activity Below PFP */}
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] text-[var(--text-dim)] backdrop-blur-md max-w-[220px] sm:max-w-[280px]">
        <span style={{ color: iconColor }} className="shrink-0 text-xs">
          {activityIcon}
        </span>
        <span className="truncate text-white/80" title={activityText}>
          {activityText}
        </span>
      </div>
    </div>
  );
}
