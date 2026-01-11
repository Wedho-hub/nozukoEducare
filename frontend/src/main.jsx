import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AppProvider } from './context/AppContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import './styles/global.css'
import App from './App'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Entry point: wrap with router and helmet provider for page titles/meta
createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<AppProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AppProvider>
		</HelmetProvider>
	</React.StrictMode>
)

// Initialize AOS (Animate On Scroll) after DOM is ready
function initAOS() {
	AOS.init({ duration: 700, once: true })
}

// Trigger AOS init on load
if (typeof window !== 'undefined') {
	window.addEventListener('load', initAOS)
}