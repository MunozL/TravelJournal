/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
    <div className="card--area">
      <div className="main--area">
        <img src={`/src/images/${props.item.img}`} />
      </div>
      <div className="info">
        <div className="location">
          <h6>{props.item.location}</h6>
        </div>
        <h2 className="title">{props.item.title}</h2>
        <h6 className="date">{props.item.date}</h6>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
