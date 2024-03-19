const GeneralSetting = () => {
  return (
    <div className="border border-t-0 py-4 rounded-b-lg px-4">
      <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-2 justify-between">
          <label className="text-sm text-primary-light" htmlFor="arabic">
            Show Arabic
          </label>
          <input
            type="checkbox"
            name=""
            checked
            className="w-5 h-5 rounded-md accent-secondary hover:accent-secondary cursor-pointer"
            id="arabic"
          />
        </div>
        <div className="flex gap-x-2 justify-between">
          <label className="text-sm text-primary-light" htmlFor="transtation">
            Show Transtaliton
          </label>
          <input
            type="checkbox"
            name=""
            checked
            className="w-5 h-5 rounded-md accent-secondary hover:accent-secondary cursor-pointer"
            id="transtation"
          />
        </div>
        <div className="flex gap-x-2 justify-between">
          <label
            className="text-sm text-primary-light"
            htmlFor="transliteration"
          >
            Show Transliteration
          </label>
          <input
            type="checkbox"
            name=""
            checked
            className="w-5 h-5 rounded-md accent-secondary hover:accent-secondary cursor-pointer"
            id="transliteration"
          />
        </div>
        <div className="flex gap-x-2 justify-between">
          <label htmlFor="refference" className="text-sm text-primary-light">
            Show Refference
          </label>
          <input
            type="checkbox"
            name=""
            checked
            className="w-5 h-5 rounded-md accent-secondary hover:accent-secondary cursor-pointer"
            id="refference"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralSetting;
