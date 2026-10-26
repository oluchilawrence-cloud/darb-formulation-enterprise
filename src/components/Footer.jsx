import { LogoIcon, FacebookIcon, InstagramIcon, TwitterIcon } from './Icons.jsx'
import { businessInfo } from '../data/businessInfo.js'
import '../styles/footer.css'

const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'Facebook', icon: <FacebookIcon />, href: businessInfo.social.facebook },
  { name: 'Instagram', icon: <InstagramIcon />, href: businessInfo.social.instagram },
  { name: 'Twitter', icon: <TwitterIcon />, href: businessInfo.social.twitter },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-container">
            {/* Brand column */}
            <div className="footer-column footer-brand">
              <a href="#home" className="brand-name">
                <LogoIcon />
                <span>
                  DARB <span className="logo-dot">F</span>ormulation
                </span>
              </a>
              <p className="footer-description">
                {businessInfo.description}
              </p>
              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.name}`}
                    title={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links column */}
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div className="footer-column">
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <p style={{ color: 'var(--color-text-muted)' }}>
                    {businessInfo.location.address === 'PLACEHOLDER — business address to be supplied'
                      ? `${businessInfo.location.city}, ${businessInfo.location.state}, ${businessInfo.location.country}`
                      : `${businessInfo.location.address}, ${businessInfo.location.city}, ${businessInfo.location.state}`}
                  </p>
                </li>
                {businessInfo.phone !== 'PLACEHOLDER — business phone number to be supplied' && (
                  <li>
                    <p>{businessInfo.phone}</p>
                  </li>
                )}
                {businessInfo.email !== 'PLACEHOLDER — business email address to be supplied' && (
                  <li>
                    <p>{businessInfo.email}</p>
                  </li>
                )}
              </ul>
            </div>

            {/* Service area column */}
            <div className="footer-column">
              <h3>Service Area</h3>
              <ul>
                <li>
                  <p>Owerri, Imo State, Nigeria</p>
                </li>
                <li>
                  <p>Available for delivery and pickup</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {currentYear} DARB Formulation Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
