/* ==========================================================================
   utils/whatsapp.js — WhatsApp click-to-chat helper
   ========================================================================== */

/**
 * Build a WhatsApp click-to-chat URL for the verified business number.
 *
 * @param {string} phoneNumber  International format WITHOUT "+" (e.g. "2348012345678")
 * @param {string} message      Pre-filled message text
 * @returns {string}            Valid wa.me URL with URL-encoded message
 */
export function buildWhatsAppUrl(phoneNumber, message) {
  if (!phoneNumber) return '#'
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${encodeURIComponent(phoneNumber)}?text=${encodedMessage}`
}
