import "./Track.scss"

const Track = (props) => {
  const { name, artist, album } = props;

    const renderAction = () => {
        if (props.isRemoval) {
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action">+</button>
        }
    }
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>{artist} | {album}</p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;