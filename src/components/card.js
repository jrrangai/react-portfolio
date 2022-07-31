const Card = (props) => {
  return (
    <div>
      <h5>{props.project.name}</h5>
      <a href={props.project.github} target="_blank" rel="noreferrer">
        github link to project
      </a>
      <img src={props.project.image} alt="my project cover" />
    </div>
  );
};

export default Card;
