import Card from "../card";
import CodeQuiz from "../assets/code-quiz.png";
const ProjectCards = (props) => {
  const { setCurrentProject } = props;

  //   portfolio projects
  const projects = [
    {
      name: "Weather Dashboard",
      github: "https://github.com/jrrangai/weather_api",
      deploy: "https://jrrangai.github.io/weather_api/",
      image: { CodeQuiz },
    },
    {
      name: "Meditation Buddy",
      github: "https://github.com/Mazattack1999/meditation-buddy",
      deploy: "https://mazattack1999.github.io/meditation-buddy/",
    },
    {
      name: "Code Quiz",
      github: "https://github.com/jrrangai/code-quiz",
      deploy: "https://jrrangai.github.io/code-quiz/",
    },
    {
      name: "Work Day Calandar",
      github: "https://github.com/jrrangai/work-day-calendar",
      deploy: "https://jrrangai.github.io/work-day-calendar/",
    },
    {
      name: "Note Taker",
      github: "https://github.com/jrrangai/note-taker",
      deploy: "https://fierce-mountain-22652.herokuapp.com/",
    },
    {
      name: "Gather the Magic (Still in Development)",
      github: "https://github.com/patrickarcher414/proj-3",
      deploy: "https://github.com/patrickarcher414/proj-3",
    },
  ];

  return (
    <section className="d-flex flex-column align-items-center">
      <h2 className="text-light">Portfolio</h2>

      <div className="d-flex flex-row flex-wrap justify-content-center">
        {projects.map((project) => {
          return (
            <Card
              project={project}
              setCurrentProject={setCurrentProject}
              key={project.name}
              impage={project.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectCards;
