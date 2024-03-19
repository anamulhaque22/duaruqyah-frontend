const { default: Image } = require("next/image");
const { useState } = require("react");

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`bg-[#F7F8FA] px-4 py-2 rounded-md cursor-pointer border-l-4 border-l-transparent ${
          isOpen && "border-l-4 border-l-secondary"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-x-3">
          <div className="w-10 h-10 rounded-full bg-[#E8F0F5] flex items-center justify-center">
            <Image
              src={isOpen ? item.imageColored : item.image}
              alt="logo"
              width={24}
              height={24}
              className="w-6 h-6 text-secondary fill-secondary"
            />
          </div>

          <p
            className={`${
              isOpen
                ? "text-secondary font-medium"
                : "text-[#868686] font-normal"
            } text-base`}
          >
            {item.title}
          </p>
        </div>
      </div>
      {isOpen && item.toggleContent}
    </div>
  );
};
export default AccordionItem;
