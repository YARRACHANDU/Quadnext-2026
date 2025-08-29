import React from "react";
import { Plane, Train, Bus, MapPin } from "lucide-react";

function Howtoreach() {
  const transportationModes = [
    {
      icon: (
        <Plane style={{ width: "32px", height: "32px", color: "#2563eb" }} />
      ),
      title: "By Air",
      subtitle: "Vijayawada International Airport",
      details: [
        "Distance: 13.5 km from city center",
        "Connected to major cities: New Delhi, Mumbai, Hyderabad, Chennai, Bengaluru, Visakhapatnam, Tirupati",
        "Airlines: Air India, SpiceJet, TrueJet, IndiGo",
        "Regular domestic flights available",
      ],
    },
    {
      icon: (
        <Train style={{ width: "32px", height: "32px", color: "#16a34a" }} />
      ),
      title: "By Rail",
      subtitle: "Vijayawada Railway Junction",
      details: [
        "Major junction on Chennai-Howrah route",
        "Connected to Chennai-Delhi railway line",
        "Accessible from all parts of India",
        "Multiple daily trains to major cities",
      ],
    },
    {
      icon: <Bus style={{ width: "32px", height: "32px", color: "#ea580c" }} />,
      title: "By Road",
      subtitle: "Bus Services",
      details: [
        "Regular government bus services",
        "Private bus operators available",
        "Connected to all major cities",
        "Well-maintained highway network",
      ],
    },
  ];

  const styles = {
    header: {
      textAlign: "center",
      marginBottom: "48px",
    },
    headerTitle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#111827",
      margin: "0",
    },
    subtitle: {
      fontSize: "18px",
      color: "#4b5563",
      maxWidth: "768px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "32px",
      marginBottom: "48px",
    },
    card: {
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      padding: "32px",
      transition: "box-shadow 0.3s ease",
    },
    cardHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "16px",
    },
    cardContent: {
      marginLeft: "16px",
    },
    cardTitle: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#111827",
      margin: "0 0 4px 0",
    },
    cardSubtitle: {
      fontSize: "14px",
      color: "#6b7280",
      margin: "0",
    },
    detailsList: {
      listStyle: "none",
      padding: "0",
      margin: "0",
    },
    detailItem: {
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "12px",
    },
    bullet: {
      width: "8px",
      height: "8px",
      backgroundColor: "#60a5fa",
      borderRadius: "50%",
      marginTop: "8px",
      marginRight: "12px",
      flexShrink: "0",
    },
    detailText: {
      fontSize: "14px",
      color: "#4b5563",
      lineHeight: "1.5",
    },
    tipsSection: {
      backgroundColor: "#dbeafe",
      borderRadius: "8px",
      padding: "32px",
    },
    tipsTitle: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#111827",
      textAlign: "center",
      marginBottom: "16px",
    },
    tipsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "24px",
    },
    tipItem: {
      fontSize: "14px",
      color: "#4b5563",
    },
    tipTitle: {
      fontWeight: "500",
      color: "#1f2937",
      marginBottom: "8px",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerTitle}>
            <MapPin
              style={{
                width: "24px",
                height: "24px",
                color: "#2563eb",
                marginRight: "0px",
              }}
            />
            <h2 style={styles.title}>How to Reach Vijayawada</h2>
          </div>

          {/* Bullet Points */}
          <ul
            style={{
              color: "#374151",
              listStyleType: "disc",
              listStylePosition: "inside",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              A limited accommodation at the campus is available on a
              first-come, first-serve basis.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Vijayawada is strategically located and well-connected to major
              Indian cities through multiple transportation networks, ensuring
              convenient access for travelers.
            </li>
          </ul>
        </div>

        {/* Transportation Cards */}
        <div style={styles.grid}>
          {transportationModes.map((mode, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
              }}
            >
              {/* Icon and Title */}
              <div style={styles.cardHeader}>
                {mode.icon}
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{mode.title}</h3>
                  <p style={styles.cardSubtitle}>{mode.subtitle}</p>
                </div>
              </div>

              {/* Details */}
              <ul style={styles.detailsList}>
                {mode.details.map((detail, detailIndex) => (
                  <li key={detailIndex} style={styles.detailItem}>
                    <div style={styles.bullet}></div>
                    <p style={styles.detailText}>{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Howtoreach;
