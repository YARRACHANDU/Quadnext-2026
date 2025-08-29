import React, { useState, useEffect } from "react";

function Gallery() {
  // 🔹 Add images for 1st conference here
  const firstConferenceImages = [
    "/icraic2it-2-scaled.jpg",
    "/icraic2it-3-scaled.jpg",
    "/icraic2it-4-scaled.jpg",
    "/icraic2it-6-scaled.jpg",
    "/icraic2it-7-scaled.jpg",
    "/icraic2it-8-scaled.jpg",
    "/icraic2it-9-scaled.jpg",
    "/icraic2it-10-scaled.jpg",
    "/icraic2it-11-scaled.jpg",
    "/icraic2it-12-scaled.jpg",
    "/icraic2it-13-scaled.jpg",
    "/icraic2it-17-scaled.jpg",
    "/icraic2it-18-scaled.jpg",
    "/icraic2it-19.jpg",
    "/icraic2it-20-scaled.jpg",
    "/icraic2it-21-scaled.jpg",
    "/icraic2it-22-scaled.jpg",
    "/icraic2it-23-scaled.jpg",
    "/icraic2it-24-scaled.jpg",
    "/icraic2it-26-scaled.jpg",
    "/icraic2it-27-scaled.jpg",
    "/icraic2it-28-scaled.jpg",
    "/icraic2it-29-scaled.jpg",
    "/icraic2it-30-scaled.jpg",
    "/icraic2it-31-scaled.jpg",
    "/icraic2it-32-scaled.jpg",
    "/icraic2it-33-scaled.jpg",
    "/icraic2it-34-scaled.jpg",
    "/icraic2it-36-scaled.jpg",
    "/icraic2it-37-scaled.jpg",
    "/icraic2it-38-scaled.jpg",
    "/icraic2it-39-scaled.jpg",
    "/icraic2it-40-scaled.jpg",
    "/icraic2it-41-scaled.jpg",
    // ... add all 1st conference images
  ];

  // 🔹 Add images for 2nd conference here
  const secondConferenceImages = [
    "/CollegeImages/2.jpg",
    "/CollegeImages/3.jpg",
    "/CollegeImages/4.jpg",
    "/CollegeImages/5.jpg",
    "/CollegeImages/6.jpg",
    "/CollegeImages/7.jpg",
    "/CollegeImages/8.jpg",
    "/CollegeImages/9.jpg",
    "/CollegeImages/10.jpg",
    "/CollegeImages/11.jpg",
    "/CollegeImages/12.jpg",
    "/CollegeImages/13.jpg",
    "/CollegeImages/14.jpg",
    "/CollegeImages/15.jpg",
    "/CollegeImages/16.jpg",
    "/CollegeImages/17.jpg",
    "/CollegeImages/18.jpg",
    "/CollegeImages/19.jpg",
    "/CollegeImages/20.jpg",
    "/CollegeImages/21.jpg",
    "/CollegeImages/22.jpg",
    "/CollegeImages/23.jpg",
    "/CollegeImages/24.jpg",
    "/CollegeImages/25.jpg",
    "/CollegeImages/26.jpg",
    "/CollegeImages/27.jpg",
    "/CollegeImages/28.jpg",
    "/CollegeImages/29.jpg",
    "/CollegeImages/30.jpg",
    "/CollegeImages/31.jpg",
    "/CollegeImages/32.jpg",
    "/CollegeImages/33.jpg",
    "/CollegeImages/34.jpg",
    "/CollegeImages/35.jpg",
    "/CollegeImages/36.jpg",
    "/CollegeImages/37.jpg",
    "/CollegeImages/38.jpg",
    "/CollegeImages/39.jpg",
    "/CollegeImages/40.jpg",
    "/CollegeImages/41.jpg",
    "/CollegeImages/42.jpg",
    "/CollegeImages/43.jpg",
    "/CollegeImages/44.jpg",
    "/CollegeImages/45.jpg",
    "/CollegeImages/46.jpg",
    "/CollegeImages/47.jpg",
    "/CollegeImages/48.jpg",
    "/CollegeImages/49.jpg",
    "/CollegeImages/51.jpg",
    "/CollegeImages/52.jpg",
    "/CollegeImages/53.jpg",
    // ... add all 2nd conference images
  ];

  const [activeConference, setActiveConference] = useState(1); // 1 for first, 2 for second
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);

  useEffect(() => {
    setImages1(firstConferenceImages);
    setImages2(secondConferenceImages);
  }, []);

  const renderImages = (images, confNumber) => {
    if (images.length === 0) {
      return <p style={styles.empty}>No images to display.</p>;
    }

    return (
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <a
            key={`conf${confNumber}-${idx}`}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-card"
          >
            <img src={src} alt={`Conference ${confNumber} - ${idx + 1}`} loading="lazy" />
          </a>
        ))}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          style={activeConference === 1 ? styles.activeTab : styles.tab}
          onClick={() => setActiveConference(1)}
        >
          1st Conference
        </button>
        <button
          style={activeConference === 2 ? styles.activeTab : styles.tab}
          onClick={() => setActiveConference(2)}
        >
          2nd Conference
        </button>
      </div>

      {/* Conference Details */}
      {activeConference === 1 && (
        <>
          <h1 style={styles.title}>
            1st International Conference on Recent Advancements and Innovations 
            in Computing Communications and Information Technology
            <span style={styles.date}>📅 22-24 April 2022</span>
          </h1>
          {renderImages(images1, 1)}
        </>
      )}

      {activeConference === 2 && (
        <>
          <h1 style={styles.title}>
            2nd International Conference on Recent Advancements and Innovations 
            in Computing Communications and Information Technology
            <span style={styles.date}>📅 2-3 May 2025</span>
          </h1>
          {renderImages(images2, 2)}
        </>
      )}

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }

        .gallery-card {
          display: block;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-card:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    margin: "40px 0 20px",
  },
  date: {
    display: "block",
    fontSize: "1.5rem",
    color: "#351992ff",
    marginTop: "0.5rem",
  },
  empty: {
    textAlign: "center",
    color: "#666",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  tab: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "1px solid #ccc",
    borderRadius: "6px",
    backgroundColor: "#f0f0f0",
    transition: "all 0.3s",
  },
  activeTab: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "1px solid #2563eb",
    borderRadius: "6px",
    backgroundColor: "#2563eb",
    color: "white",
    fontWeight: "bold",
  },
};

export default Gallery;
