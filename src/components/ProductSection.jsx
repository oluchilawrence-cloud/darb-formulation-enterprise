import ProductCard from './ProductCard.jsx'
import { products } from '../data/products.js'
import '../styles/products.css'

export default function ProductSection() {
  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-title">
          <span className="overline">Our Products</span>
          <h2>Cleaning Solutions You Can Trust</h2>
          <p style={{ marginTop: 'var(--space-sm)', color: 'var(--color-text-muted)', maxWidth: '42rem', margin: '0 auto' }}>
            {products.every((p) => p.isPlaceholder)
              ? 'Product catalogue is being updated. Please check back soon or enquire on WhatsApp.'
              : 'Browse our range of quality cleaning products suitable for homes and businesses.'}
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
