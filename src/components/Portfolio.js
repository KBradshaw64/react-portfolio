import Project from "../components/Project";

function Portfolio() {
  // fill in the required data, image file should be in the assets folder and name should match exactly including extension
  const projects = [
    {
      name: "project 1",
      description: "HTML/JS/CSS",
      link: "https://heroku.com",
      repo: "https://github.com/p1",
      image: "booker.jpg",
    },
    {
      name: "project 2",
      description: "NRG Stack",
      link: "https://heroku.com/",
      repo: "https://github.com/p2",
      image: "booker.jpg",
    },
  ];

  // for each project, use the Project component to build a project
  return (
    <div>
      <div className="d-flex">
        {projects.map((project) => (
          <Project project={project} key={"project=" + project.name} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;