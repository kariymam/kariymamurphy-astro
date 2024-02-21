module.exports = {
	theme: {
		fontFamily: {
			'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
		},
		fontSize: {
			xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      xl: '1.125rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
		extend: {
			colors: {
				'ws-blue': {
					100: '#E6F0FF',
					200: '#BFDAFF',
					300: '#99C3FF',
					400: '#4D97FE',
					500: '#006AFE',
					600: '#005FE5',
					700: '#004098',
					800: '#003072',
					900: '#00204C',
				},
				gray: {
					100: 'rgba(27, 27, 27, 1)',
					200: 'rgba(33 ,36, 35, 1)',
					300: 'rgba(51, 51, 51, 1',
					400: 'rgba(115, 115, 115, 1)',
					500: 'rgba(244,240,240,0.85)',
				},
			}
		},
	},
	plugins: [],
	content: ['./src/**/*.html', 'src/**/*.njk', 'src/**/*.js']
}
