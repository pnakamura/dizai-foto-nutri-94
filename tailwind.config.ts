
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Novas cores baseadas no logo DizAi
				dizai: {
					'dark-blue': '#1A1F2C',
					'deep-purple': '#2D1E4F',
					'light-purple': '#9b87f5',
					'brand-green': '#22C55E',      // Verde vibrante do logo
					'brand-orange': '#F97316',     // Laranja do logo
					'brand-red': '#EF4444',        // Vermelho do logo
					'neon-green': '#22C55E',       // Verde principal
					'neon-orange': '#F97316',      // Laranja vibrante
					'accent-pink': '#D946EF',
					'whatsapp': '#25D366',
					'whatsapp-dark': '#128C7E',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px rgba(76, 250, 123, 0.6), 0 0 10px rgba(76, 250, 123, 0.4)'
					},
					'50%': {
						boxShadow: '0 0 15px rgba(76, 250, 123, 0.8), 0 0 20px rgba(76, 250, 123, 0.6)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'pulse-subtle': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-right': 'fade-in-right 0.5s ease-out',
				'fade-in-left': 'fade-in-left 0.5s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 3s infinite ease-in-out'
			},
			backgroundImage: {
				'gradient-futuristic': 'linear-gradient(180deg, #1A1F2C 0%, #2D1E4F 100%)',
				'gradient-neon': 'linear-gradient(90deg, #22C55E 0%, #F97316 100%)',
				'gradient-brand': 'linear-gradient(135deg, #22C55E 0%, #F97316 50%, #EF4444 100%)',
				'gradient-button': 'linear-gradient(90deg, #22C55E 0%, #F97316 100%)',
				'gradient-whatsapp': 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)'
			},
			boxShadow: {
				'neon': '0 0 5px rgba(34, 197, 94, 0.6), 0 0 10px rgba(34, 197, 94, 0.4)',
				'neon-hover': '0 0 15px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6)',
				'brand': '0 0 10px rgba(249, 115, 22, 0.5)',
				'whatsapp': '0 0 10px rgba(37, 211, 102, 0.5)',
				'card': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
