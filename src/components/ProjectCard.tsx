import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';

import { ProjectType } from '../data/Projects';
import ImageModal from './ImageModal';

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [openModal, setOpenModal] = useState(false);

  const handelImageClick = () => {
    setOpenModal(!openModal);
  };
  const handelClose = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md dark:bg-dark-700">
      <>
        <a
          onClick={handelImageClick}
          className="cursor-pointer transition-all duration-500"
          aria-label="open image with live link and repo url"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full max-w-full object-cover"
          />
          {openModal && <ImageModal onClick={handelClose} project={project} />}
        </a>
      </>

      <div className="flex flex-col justify-between p-4">
        <h3 className="text-center font-serif text-xl font-bold text-dark-900 dark:text-white">
          {project.title}
        </h3>
        <div className="mx-auto my-2 w-full rounded-md bg-slate-400/20 pb-3 pt-2">
          <h4 className="text-center text-sm font-medium capitalize dark:text-white">
            Coding done with
          </h4>
          <div className="mx-3 flex flex-wrap gap-2">
            {project.development.language
              ?.filter(el => el !== 'HTML' && el !== 'CSS')
              .map((el, i) => (
                <span
                  key={i}
                  className={twJoin(
                    'inline-block rounded',
                    el == 'react' && 'bg-[hsl(224,96%,80%)]/80',
                    el == 'nextjs' && 'bg-[hsl(220,6%,18%)]/80 text-white',
                    el == 'typescript' && 'bg-[hsl(186,96%,80%)]/80',
                    el == 'redux' && 'bg-[hsl(263,96%,80%)]/80',
                    el == 'MUI' && 'bg-[hsl(203,96%,80%)]/80',
                    el == 'prisma' && 'bg-[hsl(225,22%,30%)]/80 text-white',
                    el == 'postgreSQL' && 'bg-[hsl(350,96%,80%)]/80',
                    'px-3 py-1 text-[12px] capitalize',
                  )}
                >
                  {el}
                </span>
              ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md bg-blue-600 py-2 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-blue-400"
          >
            <FontAwesomeIcon icon={faEye} />
            <span>See Live</span>
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md bg-dark-900 py-2 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-dark-700"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
