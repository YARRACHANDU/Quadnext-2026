import React from 'react';

function Howtoreach() {
  const features = [
    'Authentic Cliche Forage',
    'Kinfolk Chips Snackwave',
    'Coloring Book Ethical',
    'Typewriter Polaroid Cray',
    'Pack Truffaut Blue',
    'The Catcher In The Rye',
  ];

  return (
   <section className="text-secondary py-5">
  <div className="container py-5">
    {/* Header */}
    <div className="text-center mb-5">
      <h1 className="h2 fw-medium mb-3">How to Reach</h1>
      <p className="lead mx-auto" style={{ maxWidth: 700 }}>
        Vijayawada is well connected to the rest of India by rail, road, and air. Vijayawada International Airport, 13.5 km from the city center, connects the city to major destinations such as New Delhi, Mumbai, Hyderabad, Chennai, Bengaluru, Visakhapatnam, Tirupati, and more. Airlines like Air India, SpiceJet, TrueJet, and Indigo operate regular flights.  

        Vijayawada Railway Junction lies on the Chennai-Howrah and Chennai-Delhi routes, making it accessible by train from all parts of India. Regular bus services, both private and government-operated, connect Vijayawada with major cities.
      </p>
    </div>

    {/* Features Grid */}
    <div className="row g-4 justify-content-center">
      {features.map((feature, index) => (
        <div key={index} className="col-sm-6 col-md-4">
          <div className="d-flex align-items-center p-3 rounded h-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary me-3"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            <span className="fw-medium">{feature}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Button */}
    <div className="text-center mt-5">
      <button className="btn btn-primary btn-lg px-5" aria-label="Learn more about reaching Vijayawada">
        Learn More
      </button>
    </div>
  </div>
</section>

  );
}

export default Howtoreach;
