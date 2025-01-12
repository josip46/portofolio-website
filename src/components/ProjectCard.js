function ProjectCard({ name, description, pictureLink, netlifyLink }) {
  return (
    <a href={netlifyLink} target="_blank">
      <div className="proj-imgbx text-center">
        <img src={pictureLink} alt={name} style={{ maxHeight: "400px" }} />
        <div className="proj-txtx">
          <h4>{name}</h4>
          <span>{description}</span>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
