import '../App.css'
import imageUser from './imgs/avatar.jpg'

function Card() {
    const name = "Juan Miguel";
    const title = "Desarrollador Frontend";
    const description = "Apasionado por crear experiencias web increíbles y funcionales.";
    
  return (
    <div className="card">
      <img
        className="card__avatar"
        src={imageUser}
        alt={name}
      />
      <div className="card__content">
        <h2 className="card__name">{name}</h2>
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
        <div className="card__actions">
          <a className="card__button" href="#contact">Contactar</a>
          <a className="card__button card__button--outline" href="#cv">Ver CV</a>
        </div>
      </div>
    </div>
  );
}

export default Card;