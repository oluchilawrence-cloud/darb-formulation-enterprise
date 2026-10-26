import { LocationIcon } from './Icons.jsx'
import { businessInfo } from '../data/businessInfo.js'
import '../styles/sections.css'

export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-container">
          <div className="about-content">
            <div className="section-title">
              <span className="overline">About Us</span>
              <h2>DARB Formulation Enterprise</h2>
            </div>

            <h3>Quality Cleaning Solutions Based in Owerri</h3>

            <p>{businessInfo.description}</p>

            <p style={{ marginTop: 'var(--space-sm)' }}>
              {businessInfo.mission}
            </p>

            <div className="about-location" style={{ marginTop: 'var(--space-md)' }}>
              <LocationIcon />
              <span>
                {businessInfo.location.address}, {businessInfo.location.city},
                {businessInfo.location.state}, {businessInfo.location.country}
              </span>
            </div>
          </div>

          <div className="about-image" aria-hidden="true">
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
                opacity="0.3"
              />
              <path
                d="M20 24l8 8 16-16"
                strokeWidth="2"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.4"
              />
              <path
                d="M44 40l-8-8-8 8"
                strokeWidth="2"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.4"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
