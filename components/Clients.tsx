"use client";

import "./Clients.css";

export default function Clients() {
  const clients = [
    {
      name: "Skyline Builders",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "Urban Interiors",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
    },
    {
      name: "GlassTech Pvt Ltd",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    },
    {
      name: "Modern Spaces",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968703.png",
    },
     {
      name: "Skyline Builders",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      name: "Urban Interiors",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
    },
    {
      name: "GlassTech Pvt Ltd",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    },
    {
      name: "Modern Spaces",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968703.png",
    },
  ];

  return (
    <section id="client" className="clients-section">
      <p className=" params">Our Clients</p>

      <div className="clients-grid">
        {clients.map((client, i) => (
          <div key={i} className="client-item">
            <img src={client.logo} alt={client.name} />
            <span>{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}