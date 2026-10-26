import { WhatsAppIcon } from './Icons.jsx'
import { buildWhatsAppUrl } from '../utils/whatsapp.js'
import { businessInfo } from '../data/businessInfo.js'
import '../styles/sections.css'

/**
 * Floating WhatsApp contact button.
 * Stays visible on all pages and opens the verified business WhatsApp number.
 */
export default function WhatsAppButton() {
  const whatsappUrl = buildWhatsAppUrl(
    businessInfo.whatsappNumber,
    businessInfo.whatsappMessage,
  )

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={24} />
      <span className="btn-label">Chat on WhatsApp</span>
    </a>
  )
}
