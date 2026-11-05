/**
 * Discord User configuration
 * 
 * Replace this with your 17-19 digit Discord User ID.
 * You can also set NEXT_PUBLIC_DISCORD_USER_ID in your environment (.env.local).
 * 
 * To enable Discord presence via Lanyard:
 * 1. Join the Lanyard Discord server once: https://discord.gg/lanyard
 * 2. Get your User ID: Discord Settings -> Advanced -> Turn on Developer Mode -> Right click your profile -> Copy User ID
 */
export const DEFAULT_DISCORD_USER_ID = process.env.NEXT_PUBLIC_DISCORD_USER_ID || '';
