import { iconsset } from "../../../public/icons/iconsdata";

const TechStack = () => {
    return (
      <div className="flex flex-col justify-center w-full py-3">
        <h1 className=" text-2xl text*center w-full text-center border-t-1 py-3">Tech Stack</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            
            {iconsset.map((icon) => (
                <div
                    key={icon.title}
                    className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 transition-transform hover:scale-105"
                    style={{ color: icon.hex }}
                >
                    <i
                        className="w-12 h-12 mb-2"
                        dangerouslySetInnerHTML={{ __html: icon.svg }}
                    />
                    <span className=" text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 uppercase">{icon.title}</span>
                </div>
            ))}
        </div>
      </div>
    );
};

export default TechStack;
