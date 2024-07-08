"use client"

// components/CalendlyInline.js
import { useEffect } from 'react';

const CalendlyInline = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget mt-10 bg-black"
      data-url="https://calendly.com/alexlotkov/discovery?hide_gdpr_banner=1"
      style={{ minWidth: '320px', height: '750px', backgroundColor: "#0F0F0F"}}
    >
    </div>
  );
};

export default CalendlyInline;