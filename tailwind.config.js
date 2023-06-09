const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "media",
	theme: {
		screens: {
			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }

			xs: { max: "475px" },
			// => @media (max-width: 475px) { ... }

			xxs: { max: "320px" },
			// => @media (max-width: 320px) { ... }
		},
		extend: {
			screens: {
				tall: { raw: "(max-height: 830px)" },
				"less-tall": { raw: "(max-height: 730px)" },
				small: { raw: "(max-height: 630px)" },
				smaller: { raw: "(max-height: 550px)" },
				smallest: { raw: "(max-height: 430px)" },
				"tall-h-w": { raw: "(max-height: 830px) and (max-width: 475px)" },
				"less-tall-h-w": { raw: "(max-height: 730px) and (max-width: 475px)" },
				"small-h-w": { raw: "(max-height: 630px) and (max-width: 475px)" },
				"smaller-h-w": { raw: "(max-height: 530px) and (max-width: 475px)" },
				"smallest-h-w": { raw: "(max-height: 430px) and (max-width: 475px)" },
			},
			colors: {
				"main-color": "#F8F6F6",
				"btn-color": "#2568f8",
				"header-color": "#9BC6C4",
				"footer-color": "#007677",
				"advance-level-color": "#D84141",
				"admin-nav-color": "#2B499B",
				"delete-color": "#9B2B2B",
				"eye-color": "#46954E",
				"paypal-color": "#3b7bbf",
				"payment-bg-color": "#F0FAFF",
				"payment-btn-color": "#00ff84",
				"background-color": "#C7D6FE",
				"green-color": "#4FC171",
				"red-color": "#DE373E",
				// 'portfolio-color-1': '#6d7b83',
				// 'portfolio-color-2': '#dfd2c3',
				// 'portfolio-color-3': '#dad8d7',
				// 'portfolio-color-4': '#4e5254',
				// 'portfolio-color-5': '#4c5356',
				// 'portfolio-color-6': '#dcdcdc',
				// 'portfolio-color-7': '#e8dccc',
				// 'portfolio-color-8': '#bcc4c4',
				// 'portfolio-color-9': '#f8f0ec',
			},
			backgroundImage: {
				"header-gradient":
					"radial-gradient(circle, #051937, #113358, #1a4f7b, #206ea0, #228ec4, #17a3d7, #08b8e8, #00cdf8, #06d9f9, #27e5f7, #43f0f5, #5ffbf1)",
				"home-image": "linear-gradient(to bottom, rgba(0,0,0,.70), rgba(46, 4, 5,.70)), url('/image/home-1.jpg')",
				"home-image-2": "url('/image/home-2.jpg')",
				"home-image-3": "linear-gradient(to bottom, rgba(46, 4, 5,.8), rgba(5, 38, 47, .8)), url('/image/home-3.jpg')",
				"home-image-4": "linear-gradient(to bottom, rgba(5, 38, 47, .6), rgba(113, 8, 29,.6)), url('/image/home-4.jpg')",
				"home-image-5": "linear-gradient(to bottom, rgba(0,0,0,.70), rgba(46, 4, 5,.70)), url('/image/home-5.jpg')",
				"home-image-6": "linear-gradient(to bottom, rgba(0,0,0,.70), rgba(46, 4, 5,.70)), url('/image/home-6.jpg')",
				"home-image-7": "linear-gradient(to bottom, rgba(0,0,0,.70), rgba(46, 4, 5,.70)), url('/image/home-7.jpg')",
				"home-bg": "linear-gradient(to bottom, rgba(46, 4, 5,1), rgba(5, 38, 47, 1))",
				"home-bg-2": "linear-gradient(to bottom, rgba(5, 38, 47,1), rgba(113, 8, 29,1))",
				"home-bg-3": "linear-gradient(to top, rgba(5, 38, 47,1), rgba(112, 9, 30,1))",
				paypal: "linear-gradient(-30deg, #009cde, #003087)",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			outline: {
				black: "1px solid #000000",
			},
			height: {
				18: "4.5rem",
				65: "16.25rem",
				66: "16.5rem",
				67: "16.75rem",
				68: "17rem",
				69: "17.25rem",
				70: "17.5rem",
				71: "17.75rem",
				97: "26rem",
				98: "27rem",
				84: "21rem",
				88: "22rem",
				89: "22.25rem",
				90: "22.5rem",
				91: "22.75rem",
				92: "23rem",
				93: "23.25rem",
				94: "23.5rem",
				95: "23.75rem",
				99: "1px",
				100: "2px",
				101: "3px",
				114: "31rem",
				"80vh": "80vh",
				"50vh": "50vh",
				102: "25rem",
				103: "30rem",
				104: "35rem",
				105: "40rem",
				106: "45rem",
				107: "50rem",
				108: "55rem",
				109: "60rem",
				110: "65rem",
				111: "70rem",
				112: "75rem",
				113: "80rem",
				114: "36rem",
				115: "37rem",
				116: "38rem",
				117: "39rem",
				118: "31rem",
				119: "32rem",
				120: "33rem",
				121: "34rem",
				122: "24.25rem",
				123: "24.5rem",
				124: "24.75rem",
				125: "28rem",
				126: "29rem",
				127: "82%",
				128: "51%",
				129: "52%",
				130: "53%",
				131: "54%",
				132: "55%",
				133: "56%",
				134: "57%",
				135: "58%",
				136: "59%",
				137: "24.25rem",
				138: "24.5rem",
				139: "24.5rem",
				140: "85rem",
				141: "90rem",
				142: "95rem",
				143: "100rem",
				144: "31.25rem",
				145: "31.5rem",
				146: "31.75rem",
				147: "26rem",
				148: "27rem",
				149: "7%",
			},
			width: {
				68: "17rem",
				84: "21rem",
				88: "22rem",
				92: "23rem",
				99: "305px",
				100: "652px",
				101: "42.3%",
				102: "43.4%",
				103: "40.9%",
				104: "43%",
				105: "42.6%",
				106: "43.7%",
				107: "44.7%",
				108: "44.3%",
				109: "44%",
				110: "39%",
				111: "42.1%",
				112: "70%",
				113: "41.5%",
				114: "41.1%",
				115: "37.5%",
				116: "35.8%",
				117: "30%",
				118: "25rem",
				119: "30rem",
				120: "35rem",
				121: "40rem",
				122: "34.5rem",
				123: "45rem",
				124: "50rem",
				125: "55rem",
				126: "60rem",
				127: "65rem",
				128: "70rem",
				129: "51%",
				130: "52%",
				131: "53%",
				132: "54%",
				133: "55%",
				134: "56%",
				135: "57%",
				136: "58%",
				137: "59%",
				138: "41%",
				139: "42%",
				140: "45%",
				141: "46%",
				142: "47%",
				143: "48%",
				144: "49%",
				145: "70%",
				146: "65%",
				147: "38%",
				148: "118rem",
				149: "32%",
				150: "35%",
				151: "100rem",
				"14%": "14%",
				"13%": "13%",
				// '92%': '92%',
				// '93%': '93%',
				// '94%': '94%',
				// '95%': '95%',
				// '96%': '96%',
				// '97%': '97%',
				// '98%': '98%',
				// '99%': '99%',
				fit: "fit-content",
			},
			boxShadow: {
				btn: "6px 6px 5px 0px rgba(0,0,0,0.15)",
				box: "1px 1px 7px 1px rgba(0,0,0,0.15)",
				white: "6px 6px 8px 2px rgba(255,255,255,0.15)",
				blue: "4px 4px 35px 8px rgba(43,73,155,0.75)",
				black: "2px 2px 8px 0px rgba(0,0,0,0.15)",
				"admin-img": "0 0 0 3px #2B499B",
				subjects: "0 1px 8px rgba(0,0,0,0.10);",
				active: "0px 1px 2px rgba(0, 0, 0, 0.5)",
			},
			fontFamily: {
				title: "Roboto",
				body: "Roboto",
				certificate: ["Satisfy", "cursive"],
			},
			translate: {
				41: "10.3rem",
			},
			inset: {
				13: "3.25rem",
				17: "4.25rem",
				18: "4.5rem",
				19: "4.75rem",
				21: "5.25rem",
				22: "5.5rem",
				23: "5.75rem",
				29: "7.25rem",
				30: "7.5rem",
				31: "7.75rem",
				41: "10.25rem",
				42: "10.5rem",
				43: "10.75rem",
				73: "18.25rem",
				74: "18.5rem",
				75: "18.75rem",
				76: "19rem",
				77: "19.25rem",
				78: "19.5rem",
				79: "19.75rem",
				84: "21rem",
				88: "22rem",
				92: "23rem",
				97: "1%",
				98: "2%",
				99: "3%",
				100: "4%",
				101: "62%",
				102: "17.9%",
				21: "5.25rem",
				55: "13.75rem",
				27: "6.75rem",
				31: "7.75rem",
				104: "26rem",
				105: "-25rem",
				106: "27rem",
				107: "28rem",
				108: "29rem",
				109: "30rem",
				110: "25rem",
				111: "31rem",
				112: "32rem",
				113: "33rem",
				114: "34rem",
				115: "35rem",
				116: "31%",
				117: "32%",
				118: "33%",
				119: "34%",
				120: "35%",
				"1/5": "20%",
				"2/5": "40%",
				"3/5": "60%",
				"4/5": "80%",
			},
			fontSize: {
				xxs: ".5rem",
				xxxs: ".6rem",
				xxxxs: ".4rem",
			},
			padding: {
				"-1": "-.25rem",
				"-2": "-.5rem",
				"-3": "-.75rem",
				"-4": "-1rem",
				19: "4.75rem",
				21: "5.25rem",
				22: "5.5rem",
				23: "5.75rem",
				25: "6.25rem",
				26: "6.5rem",
				27: "6.75rem",
				88: "22rem",
				100: "25rem",
				104: "26rem",
				108: "27rem",
				112: "28rem",
				116: "29rem",
				120: "30rem",
				124: "31rem",
				128: "32rem",
				132: "33rem",
				136: "34rem",
				140: "35rem",
				148: "37rem",
				200: "50rem",
				204: "51rem",
				208: "52rem",
				212: "53rem",
				216: "54rem",
				220: "55rem",
			},
			backdropBlur: {
				xxxs: "1px",
				xxs: "2px",
				xs: "3px",
			},
			brightness: {
				15: ".15",
				25: ".25",
			},
			borderWidth: {
				1: "1px",
				3: "3px",
			},
			margin: {
				21: "5.25rem",
				22: "5.5rem",
				23: "5.75rem",
			},
			translate: {
				"1/5": "20%",
				"2/5": "40%",
				"3/5": "60%",
				"4/5": "80%",
			},
		},
	},
	variants: {
		extend: {
			opacity: ["disabled"],
			backgroundColor: ["active"],
			borderColor: ["active"],
		},
	},
};
