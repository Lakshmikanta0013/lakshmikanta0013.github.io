import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faClose, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type PropsType = {
  imgAlt: string;
  onClick: () => void;
  imgURL: string;
  liveURL: string;
  repoURL: string;
};

const ImageModal = (props: PropsType) => {
  const { onClick, imgAlt, imgURL, liveURL, repoURL } = props;

  return (
    <>
      <div className="fixed inset-0 h-screen w-screen bg-black/50 backdrop-blur-[2px]" />
      <div className="fixed left-1/2 top-1/2 z-10 w-2/5 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 dark:bg-dark-500">
        <div className="relative grid grid-cols-1 gap-4">
          <FontAwesomeIcon
            icon={faClose}
            className="absolute -right-9 -top-9 h-6 w-6 cursor-pointer rounded-full bg-dark-900 p-1 text-white dark:bg-white dark:text-dark-900"
            onClick={onClick}
          />
          <img
            src={imgURL}
            alt={imgAlt}
            className="h-full max-w-full rounded-lg object-cover"
          />
          <div className="grid grid-cols-2 gap-5">
            <a
              href={liveURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md bg-blue-600 py-2 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-blue-400"
            >
              <FontAwesomeIcon icon={faEye} />
              <span>See Live</span>
            </a>
            <a
              href={repoURL}
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
