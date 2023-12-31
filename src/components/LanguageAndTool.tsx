import CodeIcon from '#assets/images/icons/code.svg?react';
import ToolsIcon from '#assets/images/icons/tools.svg?react';
import { languages, tools } from '#data/Skills';

const LanguageAndTool = () => {
  return (
    <div className="mx-auto -mt-20 flex w-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg md:w-[90%] md:flex-row dark:bg-dark-700">
      <div className="flex flex-col border-b-2 border-dashed border-dark-500 p-4 md:w-2/3 md:border-b-0 md:border-r-2">
        <div className="mx-auto rounded-full bg-blue-300 p-4">
          <CodeIcon className="h-12 w-12" />
        </div>
        <h3 className="text-center text-xl font-bold text-dark-900 md:text-3xl dark:text-gray-50">
          I can code with
        </h3>
        <div className="justify-items-between mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {languages.map(({ id, name, Icon }) => (
            <div
              key={id}
              className="flex items-center justify-between rounded-lg bg-gray-500/30 px-4 py-2 text-dark dark:bg-white"
            >
              <Icon className="h-12 w-12" />
              <h3 className="ml-auto text-xl font-medium">{name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto rounded-full bg-blue-300 p-4">
          <ToolsIcon className="h-12 w-12" />
          {/* <img src={toolsIcon} alt="" aria-hidden className="h-12 w-12" /> */}
        </div>
        <h3 className="text-center text-xl font-bold text-dark-900 md:text-3xl dark:text-gray-50">
          Tools I use
        </h3>
        <div className="justify-items-between mt-4 grid h-full grid-cols-1 gap-2 lg:grid-cols-2">
          {tools.map(({ id, name, Icon }) => (
            <div
              key={id}
              className="flex items-center justify-between gap-2 rounded-lg bg-gray-500/30 p-4 text-dark lg:flex-col lg:gap-4 dark:bg-white"
            >
              <Icon className="h-12 w-12" />
              <h3 className="text-xl font-medium">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageAndTool;
