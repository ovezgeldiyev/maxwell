import React from 'react'

export default function Map() {
  return (
    <div className="alerts__map">
    <img src="/images/map.png" alt="" />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876204.0939631034!2d-77.6827115814385!3d41.68578120162952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882d80261e32e589%3A0xc24621475022b43d!2sPennsylvania%2C%20USA!5e0!3m2!1sen!2sfr!4v1723375713046!5m2!1sen!2sfr"
      width="600"
      height="450"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  )
}
