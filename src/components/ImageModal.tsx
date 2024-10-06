import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faClose, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ProjectType } from '#data/Projects';

const ImageModal = ({
  onClick,
  project,
}: {
  onClick: () => void;
  project: ProjectType;
}) => {
  return (
    <>
      <div className="fixed inset-0 h-screen w-screen bg-black/50 backdrop-blur-[2px]" />
      <div className="fixed left-1/2 top-1/2 z-10 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-2 py-6 dark:bg-dark-500 md:w-4/5 md:px-4 lg:w-2/5">
        <div className="relative grid grid-cols-1 gap-4">
          <FontAwesomeIcon
            icon={faClose}
            className="absolute -right-6 -top-9 h-8 w-8 cursor-pointer rounded-full bg-dark-900 p-1 text-white dark:bg-white dark:text-dark-900 md:-right-8"
            onClick={onClick}
          />
          <h2 className="border-b p-2 font-serif text-xl font-bold">
            {project.title}
          </h2>
          <img
            src={project.image}
            alt={project.title}
            className="h-full max-w-full rounded-lg object-cover"
          />
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
    </>
  );
};

export default ImageModal;
