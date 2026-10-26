import { WhatsAppIcon } from './Icons.jsx'
import { buildWhatsAppUrl } from '../utils/whatsapp.js'
import { businessInfo } from '../data/businessInfo.js'
import '../styles/products.css'

export default function ProductCard({ product }) {
  const whatsappUrl = buildWhatsAppUrl(
    businessInfo.whatsappNumber,
    `${businessInfo.whatsappMessage}\n\nProduct enquiry: ${product.name}`,
  )

  return (
    <article className="product-card" data-placeholder={product.isPlaceholder}>
      <div className="product-image-wrapper">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        ) : (
          <div className="product-image" role="presentation">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M8 12a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v24H8V12z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.3"
              />
              <path
                d="M16 24l16 16 16-16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.3"
              />
            </svg>
          </div>
        )}
        {product.isPlaceholder && <span className="product-badge">Development</span>}
      </div>

      <div className="product-content">
        <div className="product-header">
          <div>
            <h3 className="product-name">{product.name}</h3>
            {product.category && (
              <p className="product-category">{product.category}</p>
            )}
          </div>
          {product.size && <span className="product-size">{product.size}</span>}
        </div>

        {product.description && (
          <p className="product-description">{product.description}</p>
        )}

        <div className="product-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
          >
            <WhatsAppIcon size={16} />
            Enquire Now
          </a>
        </div>
      </div>
    </article>
  )
}
