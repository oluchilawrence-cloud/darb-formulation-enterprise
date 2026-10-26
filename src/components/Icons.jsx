/* ==========================================================================
   Icons.jsx — Reusable SVG icon components
   All icons are inline SVG for zero external dependencies and accessibility.
   ========================================================================== */

export function LogoIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 2 C16 2 2 9 2 16 C2 23 16 30 16 30 C16 30 30 23 30 16 C30 9 16 2 16 2 Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M16 8 C16 8 9 11 9 16 C9 21 16 24 16 24 C16 24 23 21 23 16 C23 11 16 8 16 8 Z"
        fill="currentColor"
        opacity="0.6"
      />
      <circle cx="16" cy="16" r="4" fill="currentColor" />
    </svg>
  )
}

export function LogoDot() {
  return (
    <span aria-hidden="true">&#8226;</span>
  )
}

export function MenuIcon({ isOpen }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {!isOpen ? (
        <>
          <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" stroke="currentColor" />
          <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" stroke="currentColor" />
          <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" stroke="currentColor" />
        </>
      ) : (
        <>
          <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" stroke="currentColor" />
          <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" stroke="currentColor" />
        </>
      )}
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" stroke="currentColor" />
      <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" stroke="currentColor" />
    </svg>
  )
}

export function ArrowRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 12 H19"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5 L19 12 L12 19"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2C9.373 2 4 6.582 4 12.147c0 2.796 1.214 5.314 3.195 7.143L6 29h12c7.732 0 14-5.448 14-12 0-3.195-1.34-6.09-3.56-8.137A13.937 13.937 0 0016 2zm-1.78 18.35c-2.844-.843-4.865-3.295-5.353-6.185a10.92 10.92 0 01-.086-.818c0-5.484 4.657-9.947 10.4-9.947a10.34 10.34 0 0110.2 9.38h.005c.005.085.005.17.005.254 0 5.517-4.716 10-10.53 10l-3.306 2.36zm5.653-6.454c-.116-.296-1.066-.843-1.54-.894-.38-.05-.65-.086-.946-.086-.297 0-.79.086-1.18.456-.377.357-.1.678-.14.718-.04.04-.11.1-.226.034-.115-.04-.79-.456-1.18-1.683-.04-.116-.11-.297-.227-.413-.116-.117-.412-.398-.26-.778.137-.337.497-.733 1.02-.987.12-.05 1.066-.843 1.466-2.35.04-.154.08-.28.08-.412.007-.23-.013-.28-.034-.337-.02-.057-.398-.007-.51-.014-.115-.007-.367-.034-.564.164-.196.198-.432.528-.432.933 0 .337.137.618.312.843.14.164.197.215.197.318 0 .115 0 .23-.034.337.02.337.227.559.297.678.398.678 1.27.946 1.874 1.894 2.4.412.312.26.412.26.528 0 .116 0 .297-.04 3.056-.04 2.43 1.28 3.47 1.914 4.41 1.132.164-.007.527.007.1.06 1.066.412 1.466.778 1.687 1.05.12.134.014.254.014.278 0 0 .007.02.014.026-1.624 1.046-2.22.987-2.683 1.086z"
            fill="currentColor"
        />
    </svg>
  )
}

export function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 16.92V16C22 14.62 21.17 13.38 20 12.83C19.4 12.5 18.69 12.33 17.96 12.33C17.6 12.33 17.25 12.41 16.92 12.57L14.52 13.77C14.1 13.97 13.61 14.06 13.1 14.06C12.75 14.06 12.41 13.97 12.05 13.81L10.92 13.24C10.34 12.95 9.69 12.99 9.13 13.41L6.62 15.29C5.28 16.32 4.37 17.79 4 19.46C3.71 20.63 4.66 21.72 5.83 21.72C8.47 21.99 11.23 21.99 14.03 21.56C16.09 21.27 17.95 20.12 19.16 18.44C20.25 16.9 21 15.29 21 13.59L20.95 13.45"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V4C12 2.89 12.89 2 14 2C14.39 2 14.76 2.15 15.07 2.41L16.53 3.41C17.25 3.94 17.69 4.72 17.69 5.59C17.69 6.47 17.25 7.25 16.53 7.79L15.41 8.58C14.75 9.04 14 9.29 13.24 9.29C12.76 9.29 12.3 9.15 11.9 8.91C11.96 8.64 12 8.37 12 8Z"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM20 8L12 13L4 8V18H20V8Z"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LocationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9C5 12.5 9.26 16.58 11.25 18.73C11.57 19.07 12.09 19.19 12.54 18.98C13.29 18.64 14 17.77 14 16.69C14 15.83 13.31 15 12.33 15H11.5C10.67 15 10 14.33 10 13.5C10 12.67 10.67 12 11.5 12H13.5C14.33 12 15 12.67 15 13.5V14.5C15 14.5 15 14.5 15 14.5"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="9"
        r="2.5"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2C8.13 2 5 5.13 5 9C5 12.5 9.26 16.58 11.25 18.73C11.57 19.07 12.09 19.19 12.54 18.98C13.29 18.64 14 17.77 14 16.69"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FacebookIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 2H15C13.62 2 13 2.67 13 4.08V7H10V11H13V18H17V11H20L19.93 7.08C19.93 2.67 19.4 2 18 2Z"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="5" strokeWidth="2" stroke="currentColor" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  )
}

export function TwitterIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 2L21 9C21.5 10 21.5 11 21 12L16 22L10 22L5 12C4.5 11 4.5 10 5 9L8 2L10 2L13 2L18 2Z"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function QualityIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2L15 8H21L16 12L18 18L12 15L6 18L8 12L3 8H9L12 2Z"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ServiceIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2C7.58 2 4 5.58 4 10C4 13.86 7.05 16.96 11 17.81V20C11 20.55 11.45 21 12 21H13C13.55 21 14 20.55 14 20V17.81C17.94 16.96 21 13.86 21 10C21 5.58 17.41 2 12 2Z"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LocalIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 12L10 19L21 6L19 4L10 13L5 8L3 12Z"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function EnquiryIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M21 11.5C21 17.2 16.7 21 11.5 21C9.5 21 7.5 20.2 6 18.8C6 19.4 5.4 20 4.7 20C3.2 20 2 18.8 2 17.3V11.5C2 7.4 5.4 4 10 4C14.6 4 18 7.4 18 11.5Z"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11V9C9 7.9 9.9 7 11 7V11H9Z"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ErrorIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" />
      <line x1="15" y1="9" x2="9" y2="15" strokeWidth="2" stroke="currentColor" />
      <line x1="9" y1="9" x2="15" y2="15" strokeWidth="2" stroke="currentColor" />
    </svg>
  )
}

export function SuccessIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17L4 12"
        strokeWidth="2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
