/**
 * Discord User configuration
 * 
 * Your Discord User ID: 1409447267290714222 (Mando / @faeemaxn)
 */
export const DEFAULT_DISCORD_USER_ID = process.env.NEXT_PUBLIC_DISCORD_USER_ID || '1409447267290714222';
export const DISCORD_PROFILE_URL = `https://discord.com/users/${DEFAULT_DISCORD_USER_ID}`;
export const LANYARD_REST_ENDPOINT = `https://api.lanyard.rest/v1/users/${DEFAULT_DISCORD_USER_ID}`;
