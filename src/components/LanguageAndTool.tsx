import codeIcon from '../assets/images/icons/code.svg';
import toolsIcon from '../assets/images/icons/tools.svg';
import skills from '../data/Skills';
const { languages, tools } = skills;

const LanguageAndTool = () => {
  return (
    <div className="mx-auto -mt-20 flex w-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg dark:bg-dark-700 md:w-[90%] md:flex-row">
      <div className="flex flex-col border-b-2 border-dashed border-dark-500 p-4 md:w-2/3 md:border-b-0 md:border-r-2">
        <div className="mx-auto rounded-full bg-blue-300 p-4">
          <img src={codeIcon} alt="" aria-hidden className="h-12 w-12" />
        </div>
        <h3 className="text-center text-xl font-bold text-dark-900 dark:text-gray-50 md:text-3xl">
          I can code with
        </h3>
        <div className="justify-items-between mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {languages.map(language => (
            <div
              key={language.id}
              className="flex items-center justify-between rounded-lg bg-gray-500/30 px-4 py-2 text-dark dark:bg-white"
            >
              <img
                src={language.icon}
                alt={language.name}
                className="h-12 w-12"
              />
              <h3 className="ml-auto text-xl font-medium">{language.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto rounded-full bg-blue-300 p-4">
          <img src={toolsIcon} alt="" aria-hidden className="h-12 w-12" />
        </div>
        <h3 className="text-center text-xl font-bold text-dark-900 dark:text-gray-50 md:text-3xl">
          Tools I use
        </h3>
        <div className="justify-items-between mt-4 grid h-full grid-cols-1 gap-2 lg:grid-cols-2">
          {tools.map(tool => (
            <div
              key={tool.id}
              className="flex items-center justify-between gap-2 rounded-lg bg-gray-500/30 p-4 text-dark dark:bg-white lg:flex-col lg:gap-4"
            >
              <img src={tool.icon} alt={tool.name} className="h-12 w-12" />
              <h3 className="text-xl font-medium">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageAndTool;
