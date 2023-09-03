import codeIcon from '../assets/images/icons/code.svg';
import toolsIcon from '../assets/images/icons/tools.svg';
import skills from '../data/Skills';
const { languages, tools } = skills;

const LanguageAndTool = () => {
  return (
    <div className="mx-auto -mt-20 flex w-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg dark:bg-dark-700 md:w-[90%] md:flex-row">
      <div className="flex flex-col border-b-2 border-dashed border-dark-500 p-8 md:w-2/3 md:border-b-0 md:border-r-2">
        <div className="mx-auto mb-8 h-24 w-24 rounded-full bg-blue-300 p-4">
          <img src={codeIcon} alt="" aria-hidden />
        </div>
        <h3 className="text-center text-3xl font-bold text-dark-900 dark:text-gray-50">
          Languages I can code
        </h3>
        <div className="justify-items-between mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {languages.map(language => (
            <div
              key={language.id}
              className="flex flex-col items-center gap-4 rounded-lg bg-gray-400/30 px-3 py-6"
            >
              <h3 className="text-xl font-medium">{language.name}</h3>
              <img
                src={language.icon}
                alt={language.name}
                className="h-20 w-20"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-8 md:w-1/3">
        <div className="mx-auto mb-8 h-24 w-24 rounded-full bg-blue-300 p-4">
          <img src={toolsIcon} alt="" aria-hidden />
        </div>
        <h3 className="text-center text-3xl font-bold text-dark-900 dark:text-gray-50">
          Tools I use
        </h3>
        <div className="justify-items-between mt-8 grid grid-cols-2 gap-6">
          {tools.map(tool => (
            <div
              key={tool.id}
              className="flex flex-col items-center gap-4 rounded-lg bg-gray-400/30 px-3 py-6"
            >
              <h3 className="text-xl font-medium">{tool.name}</h3>
              <img src={tool.icon} alt={tool.name} className="h-20 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageAndTool;
