import "./Card.css";
const Card = ({ children }) => {
  return (
    <section className="card-container">
      <div className="p-3">{children}</div>
    </section>
  );
};

export default Card;
