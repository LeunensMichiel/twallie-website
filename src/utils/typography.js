import Typography from 'typography'
const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['Cardo', 'serif'],
  headerColor: '#161919',
  bodyColor: '#161919',
  includeNormalize: false,
  googleFonts: [
    {
      name: 'Oswald',
      styles: ['400'],
    },
    {
      name: 'Cardo',
      styles: ['400'],
    },
  ],
})

typography.injectStyles()

export default typography
