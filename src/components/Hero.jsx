import { ArrowRightIcon, WhatsAppIcon } from './Icons.jsx'
import { buildWhatsAppUrl } from '../utils/whatsapp.js'
import { businessInfo } from '../data/businessInfo.js'
import '../styles/hero.css'

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl(
    businessInfo.whatsappNumber,
    businessInfo.whatsappMessage,
  )

  return (
    <section id="home" className="hero">
      <div className="hero-container container">
        <div className="hero-text">
          <span className="hero-badge" aria-label="Trusted local business">
            {businessInfo.location.city} &middot; {businessInfo.location.state}
          </span>

          <h1 className="hero-title">A Cleaner Space Starts Here</h1>

          <p className="hero-description">
            {businessInfo.description}
          </p>

          <div className="hero-cta">
            <a href="#products" className="btn btn--primary">
              Explore Products
              <ArrowRightIcon />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
              aria-label="Chat with us on WhatsApp"
            >
              <WhatsAppIcon size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-image" aria-hidden="true">
          <div className="hero-image-inner">
            <div className="hero-image-placeholder">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48 8a8 8 0 0 1 8 8v28a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V16a8 8 0 0 1 8-8h32z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 24l8 8 16-16"
                  strokeWidth="2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M44 40l-8-8-8 8"
                  strokeWidth="2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.6 }}>
                Product visual to be supplied
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
