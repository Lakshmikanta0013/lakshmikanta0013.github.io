import Projects from '#data/Projects';
import ProjectCard from './ProjectCard';

const featuredProject = Projects.filter(project => project.featured);

const RecentWork = () => {
  return (
    <div id="project-grid">
      {featuredProject.map(project => {
        return <ProjectCard project={project} key={project.id} />;
      })}
    </div>
  );
};

export default RecentWork;
