function Project({ project }) {
    const { name, repo, link, description, image } = project;
  
    return (
      <div className="p-3">
        <div className="">
          <h3>
            <a href={link}>{name}</a>{' '}
            <a href={repo}>
              <i className="fab fa-github">github</i>
            </a>
          </h3>
        <img
          src={require(`../assets/${image}`)}
          alt={name}
          className=""
        />
          <p>{description}</p>
        </div>
      </div>
    );
  }
  
  export default Project;