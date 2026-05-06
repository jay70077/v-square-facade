"use client";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      
      {/* 🎥 Background Video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay (optional for readability) */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>V-Square Facade</h1>
        <p>Premium glass solutions for modern spaces</p>
      </div>

    </section>
  );
}