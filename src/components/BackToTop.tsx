import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [top, setTop] = useState(0);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      setTop(entries[0].boundingClientRect.top);
      if (top <= 0) {
        return setVisible(true);
      } else setVisible(false);
    });
    window.addEventListener('scroll', () => {
      intersectionObserver.observe(document.querySelectorAll('section')[1]);
    });
  }, [top]);

  return (
    <div
      className="fixed bottom-6 right-0 z-50 w-14 animate-slideLeft rounded-l-full bg-red-500 shadow-lg"
      hidden={!visible}
    >
      <button
        onClick={handleClick}
        className="grid h-10 w-10 animate-fadeIn place-content-center rounded-full p-2 text-2xl text-white"
      >
        <FontAwesomeIcon icon={faArrowCircleUp} />
      </button>
    </div>
  );
};

export default BackToTop;
