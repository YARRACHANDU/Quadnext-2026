import React from "react";

function Hello() {
  // Data-driven spots section
  const spots = [
    {
      title: "Kondapalli Fort",
      img: "./kondapalli-fort.jpg",
      desc: "Kondapalli Fort is a historic hill fort located about 16 km from Vijayawada. Built in the 14th century by the Reddy dynasty, it was later controlled by various rulers. The fort is known for its strong gateways and panoramic views of the surrounding landscape. Nearby Kondapalli village is famous for its traditional wooden toys called Kondapalli toys.",
      dark: true,
    },
    {
      title: "Undavalli Caves",
      img: "./undavalli-caves.jpg",
      desc: "Undavalli Caves are ancient rock-cut caves dating back to the 4th or 5th century, showcasing Indian rock-cut architecture. Originally built as a Buddhist monastery, they were later used for Hindu worship. The highlight is a large reclining statue of Lord Vishnu carved from a single granite block. Overlooking the Krishna River, the caves attract many tourists and devotees.",
      dark: false,
    },
    {
      title: "Bhavani Island",
      img: "./Bhavani-Island.jpg",
      desc: "Bhavani Island is situated on the Krishna River near Vijayawada and covers about 133 acres. It is one of the largest river islands in India and is known for its natural beauty and peaceful environment. Visitors can enjoy boating, water sports, camping, and nature walks. Managed by the Andhra Pradesh Tourism Development Corporation, it’s a key leisure spot in the region.",
      dark: true,
    },
    {
      title: "Chinna Punugulu",
      img: "./243a0f85ba9917b501b8821fe7730fee.jpg",
      desc: "Chinna Punugulu is a popular deep-fried snack from Vijayawada, made using leftover dosa or idli batter mixed with spices, onions, and green chilies. Crispy on the outside and soft inside, it is typically served with coconut chutney or spicy peanut chutney. This favorite street food is especially enjoyed in the evenings.",
      dark: false,
    },
  ];

  return (
    <div>
      {/* Hero / Intro Section */}
      <section className="text-secondary py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-6 fw-medium mb-2 text-dark">
                Land of Victory Vijayawada
              </h1>
              <div
                className="bg-primary rounded"
                style={{ height: 4, width: 80 }}
              />
            </div>
            <div className="col-lg-6">
              <p className="lead text-muted">
                Vijayawada, also called Bezawada, is a prominent city in Andhra
                Pradesh situated on the banks of the Krishna River. It is famous
                for the Kanaka Durga Temple, historic sites, and bustling
                markets. Known as the Business Capital of Andhra Pradesh, it is
                a key center for trade, education, and transport. The city hosts
                vibrant festivals and is surrounded by scenic hills and fertile
                agricultural lands.
              </p>
            </div>
          </div>

          {/* Featured Locations */}
          <section className="py-2 text-secondary">
            <div className="container">
              <div className="row text-center">
                {/* Prakasam Barrage */}
                <div className="col-sm-6 mb-5">
                  <div
                    className="rounded overflow-hidden"
                    style={{ height: 256, marginRight: "10px" }}
                  >
                    <img
                      src="./vij-1.jpg"
                      alt="Prakasam Barrage"
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                  <h2 className="fw-medium text-dark mt-4 mb-3">
                    Prakasam Barrage
                  </h2>
                  <p className="lead text-muted">
                    The Prakasam Barrage, built across the Krishna River in
                    Vijayawada, Andhra Pradesh, is both an important irrigation
                    structure and a road bridge. The original barrage was
                    constructed in 1855 by the British, and the present
                    structure was completed in 1957, named after Tanguturi
                    Prakasam Pantulu, the first Chief Minister of Andhra State.
                    Stretching about 1.2 km in length, it supplies water to
                    nearly 1.2 million acres of farmland in Krishna, Guntur, and
                    surrounding districts. It also forms a beautiful backdrop
                    for the city, especially when its gates are open, and in
                    2023, it was recognized as a World Heritage Irrigation
                    Structure.
                  </p>
                </div>

                {/* Kanaka Durga Temple */}
                <div className="col-sm-6 mb-5">
                  <div
                    className="rounded overflow-hidden"
                    style={{ height: 256 }}
                  >
                    <img
                      src="./kanaka-durga-temple-vijayawada-entry-fee-timings-holidays-reviews-header.jpg"
                      alt="Kanaka Durga Temple"
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                  <h2 className="fw-medium text-dark mt-4 mb-3">
                    Kanaka Durga Temple
                  </h2>
                  <p className="lead text-muted">
                    The Kanaka Durga Temple, located on the Indrakeeladri Hill
                    in Vijayawada, Andhra Pradesh, is one of the most famous
                    temples dedicated to Goddess Durga. According to legend,
                    Goddess Kanaka Durga appeared here to protect the people
                    from the demon Mahishasura. The temple offers a stunning
                    view of the Krishna River and the Prakasam Barrage. It is
                    especially famous during the Dasara (Navaratri) festival,
                    when thousands of devotees visit to witness the grand
                    celebrations. The temple is also known for its unique
                    tradition of Alaapana Seva and other special rituals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Grid - Tourist Spots / Food */}
          <div
            className="row g-4"
            style={{ "--bs-gutter-x": "2rem", "--bs-gutter-y": "2rem" }}
          >
             <div className="text-center mb-5">
            <h1 className="h2 fw-medium mb-3" style={{ color: "#0b2743ff" }}>
              How to Reach
            </h1>
            <p className="lead mx-auto" style={{ maxWidth: 700 }}>
              Vijayawada is well connected to the rest of India by rail, road,
              and air. Vijayawada International Airport, 13.5 km away from the
              main city, is the principal airport that connects Vijayawada to
              the rest of India, as well as the world. Vijayawada is well
              connected with regular flights to New Delhi, Mumbai, Hyderabad,
              Chennai, Bengaluru, Visakhapatnam, Tirupati and many more cities.
              Many airline operators offer their services such as Air India,
              SpiceJet, TrueJet, Indigo etc.
            </p>
            <p className="lead mx-auto" style={{ maxWidth: 700 }}>
              Vijayawada Railway Junction is connected with all parts of the
              country through its excellent railway network. Vijayawada is
              situated along the Chennai-Howrah, and Chennai-Delhi rail route,
              making it easily accessible. Regular bus services run to and from
              the city of Vijayawada from most parts of the country, operated by
              both private and government agencies.
            </p>
          </div>
          <h1
            className="h2 fw-medium mb-3 text-center"
            style={{ color: "#0b2743ff" }}
          >
            Few attractions in and around Vijayawada
          </h1>
            {spots.map((spot, index) => (
              <div className="col-xl-3 col-md-6 mb-4" key={index}>
                <div
                  className={`p-4 rounded ${
                    spot.dark ? "text-white" : "text-dark"
                  }`}
                  style={{
                    backgroundColor: spot.dark ? "#0b2743ff" : "#f8f9fa",
                  }}
                >
                  <img
                    src={spot.img}
                    alt={spot.title}
                    className="img-fluid rounded mb-3"
                    style={{
                      height: 160,
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <h5 className="fw-medium mb-3">{spot.title}</h5>
                  <p className="mb-0">{spot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Section - Raw Denim Heirloom Man Braid */}
      <section className="text-secondary">
        <div className="container">
          {/* Header */}
         

          {/* Attractions */}
          

          {/* Features Grid */}
          <div className="row g-3 justify-content-center mt-0">
            {[
              "Akkanna Madanna Caves",
              "Amaravati Shrine",
              "Bhavani Island",
              "Gandhi Hill",
              "Gunadala Matha Shrine",
              "Hailand",
              "Hazratbal Mosque",
              "Hinkar Thirtha Jain Temple",
              "Kanaka Durga Temple",
              "Kolleru Lake",
              "Kondapalli Fort",
              "Kuchipudi Siddhendra Kala Kshetram",
              "Mangalagiri Panakala Swami Shrine",
              "Manginapudi Beach",
              "Mogalarajapuram Caves",
              "Pavitra Sangamam",
              "Prakasam Barrage",
              "Rajiv Gandhi Park",
              "Scrap Sculpture Park",
              "Subramanya Swami Temple",
              "Undavalli Caves",
              "Uppalapadu Bird Sanctuary",
              "Victoria Jubilee Museum (Bapu Museum)",
            ].map((feature, idx) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={idx}>
                <div className="d-flex flex-column align-items-center justify-content-center p-4 rounded h-100 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary mb-2"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span className="fw-medium" style={{ color: "#0b2743ff" }}>
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hello;
