const TESTIMONIALS = [
  { 
    name: 'Sarah J.', 
    text: 'The quality of the technical fabrics is unmatched. Truly built for high performance athlete.',
    role: 'Professional Runner' 
  },
  { 
    name: 'David Moore', 
    text: 'Switching to Zali for my gym sessions was the best decision. The fit and durability are light years ahead.',
    role: 'CrossFit Trainer'
  },
  { 
    name: 'Elena K.', 
    text: 'Beyond the look, the feel of the shirts and shorts is what sets them apart. Highly recommend.',
    role: 'Athlete'
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="section-title">Word on the Ground</h2>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="q-mark">“</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
