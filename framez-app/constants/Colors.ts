export const Colors = {
  primary: '#00897B', // Teal green
  secondary: '#26A69A',
  accent: '#4DB6AC',
  background: '#F1F8F6',
  cardBackground: '#FFFFFF',
  text: '#1B3A34',
  textSecondary: '#5F8A82',
  border: '#CDE5E0',
  error: '#E57373',
  success: '#2E7D32',

  // Dark mode
  dark: {
    background: '#0D1F1B',
    cardBackground: '#1B2B28',
    text: '#E0F2F1',
    textSecondary: '#A7C9C3',
    border: '#2E4B45',
  },
} as const;

export type ColorsType = typeof Colors;
