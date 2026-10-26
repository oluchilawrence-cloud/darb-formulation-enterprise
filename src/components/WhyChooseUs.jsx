import { QualityIcon, ServiceIcon, LocalIcon, EnquiryIcon } from './Icons.jsx'
import '../styles/sections.css'

const benefits = [
  {
    id: 'quality',
    title: 'Commitment to Quality',
    description: 'We are committed to providing cleaning products that meet high quality standards for effective results.',
    icon: <QualityIcon />,
  },
  {
    id: 'service',
    title: 'Customer-Focused Service',
    description: 'We prioritise your satisfaction with responsive, helpful service from enquiry to delivery.',
    icon: <ServiceIcon />,
  },
  {
    id: 'local',
    title: 'Serving Owerri & Imo State',
    description: 'Based in Owerri, Imo State, we understand the local market and serve customers across the region.',
    icon: <LocalIcon />,
  },
  {
    id: 'enquiry',
    title: 'Convenient Enquiries',
    description: 'Get in touch easily via WhatsApp and phone for quick product enquiries and support.',
    icon: <EnquiryIcon />,
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="why-choose section">
      <div className="container">
        <div className="section-title">
          <span className="overline">Why Choose Us</span>
          <h2>Delivering Value You Can Trust</h2>
        </div>

        <div className="why-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="why-item">
              <div className="why-icon">{benefit.icon}</div>
              <h3 className="why-title">{benefit.title}</h3>
              <p className="why-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
