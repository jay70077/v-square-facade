import "./Work.css";

export default function WorkSection() {
  return (
    <section id="work" className="work container">
      <div className="card glass">
        <img src="/img1.jpg" />
        <h3>Glass Partition</h3>
      </div>

      <div className="card glass">
        <img src="/img2.jpg" />
        <h3>Shower Glass</h3>
      </div>

      <div className="card glass">
        <img src="/img3.jpg" />
        <h3>Office Glass</h3>
      </div>
    </section>
  );
}