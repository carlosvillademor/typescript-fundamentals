//TODO: Implement hexToRgb
export function hexToRgb (hex: string): {r: number, g: number, b: number} {
  if (hex.length === 3) {
    return hexToRgb(Array.from(hex).map((character) => `${character}${character}`).join(''));
  }

  const [r, g, b] = [0, 2, 4]
    .map((offset) => hex.substr(offset, 2))
    .map((hex) => parseInt(hex, 16));

  return {r, g, b};
};

//TODO: Implement rgbToHex
export function rgbToHex (r: number, g: number, b: number): string {
  return [r, g, b]
    .map((dec) => Math.max(0, Math.min(255, dec)).toString(16))
    .map((hex) => hex.length === 1 ? `0${hex}` : hex)
    .join('');
};