const LanguageContent = () => {
  return (
    <div className="border border-t-0 py-4 rounded-b-lg">
      <div className="flex gap-x-2 justify-center">
        <button className="bg-secondary text-sm text-white px-6 py-3 rounded-md">
          English
        </button>
        <button className="bg-white text-sm text-primary px-6 py-3 rounded-md border border-[#cccdcf]">
          Bangla
        </button>
      </div>
    </div>
  );
};

export default LanguageContent;
