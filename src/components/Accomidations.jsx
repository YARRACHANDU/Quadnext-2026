import React from "react";

export default function HotelsStatsSection() {
  const hotels = [
    {
      name: "Novotel Vijayawada Varun",
      image: "./Novotel.webp",
      description:
        "Luxury 5-star hotel with rooftop pool, spa, and fine-dining restaurants.",
      rating: "4.5 / 5",
      reviews: "2,317 reviews",
      link: "https://novotel.accor.com/gb/city/hotels-vijayawada-v5676.shtml",
    },
    {
      name: "Lemon Tree Premier",
      image: "./lemon.webp",
      description:
        "Elegant rooms, fitness centre, and outdoor pool. Centrally located.",
      rating: "4.4 / 5",
      reviews: "1,876 reviews",
      link: "https://www.lemontreehotels.com/lemon-tree-premier/vijayawada/hotel-vijayawada",
    },
    {
      name: "Fortune Murali Park",
      image: "./murali.webp",
      description:
        "Popular business hotel with conference halls and multi-cuisine restaurant.",
      rating: "4.3 / 5",
      reviews: "1,120 reviews",
      link: "https://www.fortunehotels.in/vijayawada-fortune-murali-park.dh.14",
    },
    {
      name: "Minerva Grand ",
      image: "./minverva.webp", // add minerva.webp to your project
      description:
        "Popular upscale hotel located in the city centre. Offers stylish rooms, multi-cuisine restaurant, banquet facilities, gym and close access to MG Road and railway station.",
      rating: "4.2 / 5",
      reviews: "1,420 reviews",
      link: "https://minervahotels.in/",
    },

    {
      name: "Quality Hotel DV Manor",
      image: "./dv.webp",
      description:
        "Excellent mid-range hotel with great dining and central location.",
      rating: "4.2 / 5",
      reviews: "925 reviews",
      link: "http://www.hoteldvmanor.com",
    },
    {
      name: "Hotel Manorama",
      image: "./manorama.webp", // add manorama.webp image in your project
      description:
        "Well-known 3-star hotel located near the railway station in Vijayawada. Offers comfortable rooms, multi-cuisine restaurant, banquet halls and easy access to MG Road & Durga Temple.",
      rating: "4.1 / 5",
      reviews: "1,230 reviews",
      link: "https://www.hotelmanorama.com/",
    },

    {
      name: "Swarna Palace",
      image: "./swarna.webp", // add swarna.webp in your public/assets folder
      description:
        "Well-known 3-star hotel located in the heart of Vijayawada. Offers modern rooms, in-house restaurant, banquet halls and easy access to MG Road and railway station.",
      rating: "4.1 / 5",
      reviews: "1,150 reviews",
      link: "https://www.hotelswarnapalace.com/",
    },

    {
      name: "Vivanta Vijayawada",
      image: "./vivanta.webp", // make sure to add this image in your project
      description:
        "Modern 5-star hotel located on MG Road. Features spacious rooms, rooftop restaurant, fitness centre and excellent connectivity to all major city locations.",
      rating: "4.3 / 5",
      reviews: "1,560 reviews",
      link: "https://www.tajhotels.com/en-in/gateway/mg-road-vijayawada/",
    },

    {
      name: "Hotel Ilapuram",
      image: "./ilapuram.webp",
      description:
        "A 3-star boutique hotel blending classic heritage with contemporary elegance. Offers comfortable stay with modern amenities, in-house vegetarian restaurant, conference facilities, and complimentary breakfast.",
      rating: "3.9 / 5",
      reviews: "950 reviews",
      link: "https://www.goibibo.com/hotels/ilapuram-hotel-in-vijayawada-5715766181567320738",
    },
    {
      name: "Hotel Sannidhi (The Boutique Hotel)",
      image: "./sannidhi.webp", // you can replace with actual image path or filename
      description:
        "A 3-star boutique property located in Gandhi Nagar, blending modest comforts with functional value. Offers clean, well-maintained rooms, on-site restaurant, banquet hall for events, free parking, air-conditioning, Wi-Fi, 24-hour front desk, and daily breakfast.",
      rating: "3.8 / 5",
      reviews: "114 reviews (MMT) + 531 ratings (Justdial)",
      link: "https://www.hotelsannidhi.com/",
    },

    {
      name: "Hotel Capital Luxury Suites",
      image: "./luxury.webp",
      description:
        "A contemporary 3-star hotel situated near Benz Circle, designed for both business and leisure travelers. The property offers stylish rooms with modern interiors, LED TVs, work desks, and comfortable bedding. Guests can enjoy an in-house multi-cuisine restaurant, conference facilities, complimentary Wi-Fi, and 24-hour front desk service. Its central location provides easy access to shopping, dining, and major landmarks in Vijayawada.",
      rating: "4.2 / 5",
      reviews: "310 ratings (MMT)",
      link: "https://www.booking.com/hotel/in/capital-luxury-suites.html",
    },

    {
      name: "Treebo C Plaza",
      image: "./tree.webp",
      description:
        "A budget-friendly 3-star hotel on Bandar Road featuring AC rooms with free Wi-Fi, TV, and essential amenities. Guests are offered complimentary vegetarian breakfast, banquet facilities for small events, and easy access to Vijayawada’s business and shopping hubs.",
      rating: "4.2 / 5",
      reviews: "31 guest ratings (Goibibo)",
      link: "https://www.treebo.com/hotels-in-vijayawada/treebo-c-plaza-mg-road-bandar-road-503/",
    },

    {
      name: "Hotel Pride Madhava",
      image: "./madhava.webp",
      description:
        "A refined business boutique hotel just off Eluru Road in Srinagar Colony, offering well-appointed rooms with Wi-Fi, LED smart TVs, minibar, and tea/coffee makers. Guests benefit from services like valet parking, 24-hour room service, power backup, laundry, and two banquet halls—ideal for business or event stays.",
      rating: "3.9 – 4.1 / 5",
      reviews: "83 (MMT) + 1,607 (Justdial)",
      link: "https://www.makemytrip.com/hotels/hotel_pride_madhava-details-vijaywada.html",
    },

    {
      name: "Hotel Centre Side",
      image: "./centre.webp",
      description:
        "A centrally located 3-star boutique hotel near Eluru Road, featuring stylish AC rooms with Wi-Fi and in-house dining. Offers modern conveniences such as banquet and boardroom facilities, free parking, and warm, attentive service—ideal for both business and family stays.",
      rating: "4.3 / 5",
      reviews: "586 guest ratings (MMT) + ~1,870 reviews (Google/Adanione)",
      link: "https://www.makemytrip.com/hotels/hotel_centre_side-details-vijaywada.html",
    },

    {
      name: "Hotel Aira",
      image: "./aira.webp", // add aira.webp to your images folder
      description:
        "Contemporary 3-star hotel located near Benz Circle. Features stylish rooms, free Wi-Fi, complimentary breakfast and quick access to MG Road and shopping areas.",
      rating: "4.2 / 5",
      reviews: "1,040 reviews",
      link: "https://www.airahotel.com/",
    },
  ];

  return (
    <section className=" text-secondary">
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: "#141E46" }}>
          Accommodation Hotels
        </h2>

        {hotels.map((hotel, idx) => (
          <div className="card mb-4 border-0 shadow-sm" key={idx}>
            <div
              className={`row align-items-center flex-md-row flex-column ${
                idx % 2 !== 0 ? "flex-md-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className={`col-md-4 ${idx % 2 !== 0 ? "me-md-5" : ""}`}>
                <img
                  src={hotel.image}
                  className="img-fluid rounded"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                  alt={hotel.name}
                />
              </div>

              {/* TEXT + RATING + BUTTON */}
              <div className={`col-md-7 ${idx % 2 === 0 ? "ms-md-5" : ""}`}>
                <h4 className="fw-bold">{hotel.name}</h4>
                <p className="mb-3">{hotel.description}</p>

                <div className="d-flex gap-4 mb-3">
                  <div>
                    <h6 className="mb-0 fw-bold">{hotel.rating}</h6>
                    <small className="text-muted">Rating</small>
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">{hotel.reviews}</h6>
                    <small className="text-muted">Reviews</small>
                  </div>
                </div>

                <a
                  href={hotel.link}
                  style={{
                    backgroundColor: "#141E46",
                    borderColor: "#141E46",
                    color: "#fff",
                  }}
                  className={`btn btn-sm ${
                    hotel.link === "#" ? "disabled" : ""
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {hotel.link === "#" ? "Not Available" : "Book Now"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
