import React, { useState } from "react";
import { ExternalLink, MapPin, Star } from "lucide-react";

const hotels = [
  {
    name: "Hotel Ilapuram",
    url: "https://ilapuram.com/",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
    rating: 4.2,
    location: "Governorpet",
    amenities: ["WiFi", "AC", "Restaurant"],
  },
  {
    name: "Hotel Sree Vasudev",
    url: "https://hotelsreevasudev.com/",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=200&fit=crop",
    rating: 4.0,
    location: "Bunder Road",
    amenities: ["WiFi", "Parking", "24/7"],
  },
  {
    name: "Hotel Sun Square",
    url: "https://www.makemytrip.com/hotels/hotel_sun_square-details-vijaywada.html",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&h=200&fit=crop",
    rating: 3.9,
    location: "MG Road",
    amenities: ["AC", "WiFi", "Room Service"],
  },
  {
    name: "Hotel Sripada",
    url: "https://www.makemytrip.com/hotels/hotel_sripada-details-vijaywada.html",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&h=200&fit=crop",
    rating: 3.8,
    location: "Railway Station Area",
    amenities: ["WiFi", "AC", "Restaurant"],
  },
  {
    name: "Hotel Kosala",
    url: "https://www.kosalahotel.com/",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop",
    rating: 4.1,
    location: "Near Station",
    amenities: ["WiFi", "Parking", "AC"],
  },
  {
    name: "Hotel Midcity",
    url: "https://www.hotelmidcity.com/",
    image: "/Location/1.jpeg",
    rating: 3.7,
    location: "Bunder Road",
    amenities: ["AC", "WiFi", "Lift"],
  },
  {
    name: "FabHotel RR Grand (near Trendset Mall)",
    url: "https://www.makemytrip.com/hotels/fabhotel_rr_grand_next_to_trendset_mall-details-vijayawada.html",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=200&fit=crop",
    rating: 4.3,
    location: "Trendset Mall Area",
    amenities: ["Modern", "WiFi", "AC"],
  },
  {
    name: "FabHotel Golden Way",
    url: "https://www.booking.com/hotel/in/golden-way-vijayawada.html",
    image:
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=300&h=200&fit=crop",
    rating: 4.0,
    location: "City Center",
    amenities: ["WiFi", "AC", "Clean"],
  },
  {
    name: "FabHotel Prime D Dev (Tadepalli)",
    url: "https://www.booking.com/hotel/in/fabhotel-d-dev.html",
    image:
      "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=300&h=200&fit=crop",
    rating: 4.1,
    location: "Tadepalli",
    amenities: ["Modern", "WiFi", "Premium"],
  },
  {
    name: "Super Hotel O (Near Railway Station) – OYO",
    url: "https://www.oyorooms.com/195970/",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
    rating: 3.6,
    location: "Railway Station",
    amenities: ["Budget", "AC", "WiFi"],
  },
  {
    name: "OYO Rooms (Vijayawada list)",
    url: "https://www.oyorooms.com/hotels-in-vijayawada/",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&h=200&fit=crop",
    rating: 3.5,
    location: "Multiple Locations",
    amenities: ["Budget", "WiFi", "AC"],
  },
  {
    name: "Hotel Aira (Benz Circle)",
    url: "https://www.agoda.com/hotel-aira_2/hotel/vijayawada-in.html",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=300&h=200&fit=crop",
    rating: 4.2,
    location: "Benz Circle",
    amenities: ["Premium", "WiFi", "Restaurant"],
  },
  {
    name: "Hotel Swarna Palace",
    url: "https://www.makemytrip.com/hotels/hotel_swarna_palace-details-vijayawada.html",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&h=200&fit=crop",
    rating: 3.9,
    location: "Labbipet",
    amenities: ["Traditional", "AC", "WiFi"],
  },
  {
    name: "Hotel Sree Vasudev (Booking page)",
    url: "https://www.booking.com/hotel/in/sree-vasudev-vijayawada1.html",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&h=200&fit=crop",
    rating: 4.0,
    location: "Central Area",
    amenities: ["WiFi", "Restaurant", "AC"],
  },
  {
    name: "Hotel Sun Square (Goibibo)",
    url: "https://www.goibibo.com/hotels/sun-square-hotel-in-vijayawada-5808355584631181082/",
    image: "/Location/2.jpeg",
    rating: 3.8,
    location: "Business District",
    amenities: ["Business", "WiFi", "AC"],
  },
];

const HotelItem = ({ name, url, image, rating, location, amenities }) => {
  const [imageError, setImageError] = useState(false);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} size={12} style={{ color: "#141E46" }} fill="#141E46" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          size={12}
          style={{ color: "#141E46", opacity: 0.5 }}
          fill="#141E46"
        />
      );
    }
    return stars;
  };

  const fallbackImage =
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop";

  return (
    <div className="list-group-item border-0 p-0 hotel-item">
      <div className="card border-0 shadow-sm h-100 overflow-hidden">
        <div className="row g-0 h-100">
          {/* Hotel Image */}
          <div className="col-4 d-flex align-items-center justify-content-center p-3">
            <div className="position-relative">
              <img
                src={imageError ? fallbackImage : image}
                alt={name}
                className="rounded-circle border shadow-sm hotel-image"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
                onError={() => setImageError(true)}
              />
              {/* Rating Badge */}
              <div
                className="position-absolute top-0 end-0 text-white rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#141E46",
                  width: "28px",
                  height: "28px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                {rating}
              </div>
            </div>
          </div>

          {/* Hotel Details */}
          <div className="col-8">
            <div className="card-body p-3 h-100 d-flex flex-column">
              <div className="flex-grow-1">
                <h6
                  className="card-title mb-1 fw-bold"
                  style={{
                    color: "#141E46",
                    fontSize: "14px",
                    lineHeight: "1.2",
                  }}
                >
                  {name}
                </h6>

                {/* Stars */}
                <div className="d-flex align-items-center mb-2">
                  <div className="d-flex me-2">{renderStars(rating)}</div>
                  <small style={{ color: "#6c757d" }}>({rating})</small>
                </div>

                {/* Location */}
                <div
                  className="d-flex align-items-center mb-2"
                  style={{ color: "#6c757d" }}
                >
                  <MapPin
                    size={12}
                    className="me-1"
                    style={{ color: "#141E46" }}
                  />
                  <small style={{ fontSize: "11px" }}>{location}</small>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span
                    className="badge"
                    style={{
                      backgroundColor: "#E8EBF7",
                      color: "#141E46",
                      fontSize: "10px",
                    }}
                  >
                    ₹1,000–₹2,000/day
                  </span>
                </div>

                {/* Amenities */}
                <div className="d-flex flex-wrap gap-1 mb-2">
                  {amenities.slice(0, 2).map((a, i) => (
                    <span
                      key={i}
                      className="badge border"
                      style={{
                        backgroundColor: "#f9f9f9",
                        color: "#141E46",
                        fontSize: "9px",
                      }}
                    >
                      {a}
                    </span>
                  ))}
                  {amenities.length > 2 && (
                    <span
                      className="badge border"
                      style={{
                        backgroundColor: "#f9f9f9",
                        color: "#141E46",
                        fontSize: "9px",
                      }}
                    >
                      +{amenities.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Book Now Button */}
              <div className="mt-auto">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm w-100 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#141E46",
                    color: "#fff",
                    fontSize: "11px",
                    padding: "6px 12px",
                  }}
                >
                  <ExternalLink size={12} className="me-1" />
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const splitIntoTwoColumns = (items) => {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
};

const HotelList = () => {
  const [left, right] = splitIntoTwoColumns(hotels.slice(0, 15));

  return (
    <div
      className="container-fluid py-2"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold mb-3" style={{ color: "#141E46" }}>
            Budget Hotels in Vijayawada
          </h1>
          <div className="d-inline-flex align-items-center bg-white rounded-pill px-4 py-2 shadow-sm border">
            <MapPin size={18} className="me-2" style={{ color: "#141E46" }} />
            <span className="fw-semibold me-3" style={{ color: "#141E46" }}>
              Target Budget:
            </span>
            <span
              className="badge rounded-pill"
              style={{ backgroundColor: "#141E46", color: "#fff" }}
            >
              ₹1,000 – ₹2,000 / day
            </span>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="row gx-5 gy-4">
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column gap-3">
              {left.map((hotel) => (
                <HotelItem key={hotel.name + "_left"} {...hotel} />
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column gap-3">
              {right.map((hotel) => (
                <HotelItem key={hotel.name + "_right"} {...hotel} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hotel-item {
          transition: all 0.3s ease;
        }
        .hotel-item:hover {
          transform: translateY(-3px);
        }
        .hotel-item:hover .card {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
        }
        .hotel-image {
          transition: all 0.3s ease;
        }
        .hotel-item:hover .hotel-image {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
        }
        @media (max-width: 768px) {
          .col-4 {
            flex: 0 0 35% !important;
          }
          .col-8 {
            flex: 0 0 65% !important;
          }
          .hotel-image {
            width: 70px !important;
            height: 70px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HotelList;
