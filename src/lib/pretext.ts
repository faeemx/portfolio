/**
 * Scramble-text animation utility.
 *
 * Given a target string and a progress value (0–1), returns a version of the
 * string where characters beyond the resolved portion are replaced with random
 * ASCII "noise" characters — producing a typewriter-scramble effect.
 *
 * @param text     - The target string to reveal.
 * @param progress - A value from 0 (fully scrambled) to 1 (fully revealed).
 * @returns        The partially-revealed, partially-scrambled string.
 */

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

function randomChar(): string {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export function scrambleText(text: string, progress: number): string {
  const resolvedCount = Math.floor(text.length * progress);

  return text
    .split('')
    .map((char, index) => {
      // Preserve whitespace characters as-is so layout doesn't shift
      if (char === ' ' || char === '\n' || char === '\t') return char;
      // Characters before the progress threshold are revealed as their real value
      if (index < resolvedCount) return char;
      // The rest are scrambled with random noise
      return randomChar();
    })
    .join('');
}
