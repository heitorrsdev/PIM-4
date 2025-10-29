const typography = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: {
    small: 12,
    normal: 14,
    large: 18,
    title: 24,
  },
  fontWeight: {
    bold: '700',
    medium: '500',
    regular: '400',
  } as const, // Transforma fontWeight em um tipo literal ao invés de string genérica
};

export default typography;
