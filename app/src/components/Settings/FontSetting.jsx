"use client";
import { useState } from "react";

const FontSetting = () => {
  const [fontSize, setFontSize] = useState(17);
  const [arabicScript, setArabicScript] = useState("Uthmani");
  const [arabicFont, setArabicFont] = useState("KFGQPC");
  return (
    <div className="border border-t-0 py-4 rounded-b-lg px-4 flex flex-col space-y-3">
      <div>
        <p className="text-sm text-primary-light">Translation Font Size</p>
        <div className="flex gap-x-2 mt-2">
          <input
            type="range"
            name=""
            max={25}
            min={14}
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            id=""
            className="w-full accent-secondary border-0 bg-[#eeeeee] "
          />
          <p className="">{fontSize}</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-primary-light">Select Arabic Script</p>
        <div className="flex gap-x-2 mt-2">
          <select
            onChange={() => setArabicScript(e.target.value)}
            className="accent-transparent w-full py-2 px-3 outline-none rounded-md"
          >
            <option value="Uthmani">Uthmani</option>
            <option value="Indopak">Indopak</option>
          </select>
        </div>
      </div>
      <div>
        <p className="text-sm text-primary-light">Arabic Font</p>
        <div className="flex gap-x-2 mt-2">
          <select
            onChange={() => setArabicFont(e.target.value)}
            className="accent-transparent w-full py-2 px-3 outline-none rounded-md"
          >
            <option value="kfgq">KFGQ</option>
            <option value="me-quran">Me Quran</option>
          </select>
        </div>
      </div>
      <div>
        <p className="text-sm text-primary-light">Arabic Font Size</p>
        <div className="flex gap-x-2 mt-2">
          <input
            type="range"
            name=""
            max={25}
            min={14}
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            id=""
            className="w-full accent-secondary border-0 bg-[#eeeeee] "
          />
          <p className="">{fontSize}</p>
        </div>
      </div>
    </div>
  );
};

export default FontSetting;
