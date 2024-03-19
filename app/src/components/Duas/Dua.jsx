import Image from "next/image";
import { forwardRef } from "react";
import duacard from "../../assets/images/duacard.svg";
import DuaAction from "./DuaAction";

// eslint-disable-next-line react/display-name
const Dua = forwardRef((props, ref) => {
  const { dua } = props;
  const {
    id,
    cat_id,
    subcat_id,
    dua_id,
    dua_name,
    top,
    dua_arabic,
    dua_indopak,
    transliteration,
    translation,
    bottom,
    refference,
    audio,
  } = dua;
  return (
    <div className="bg-white px-7 py-4 rounded-lg mt-6" ref={ref}>
      <div className="flex items-center gap-x-3">
        <Image src={duacard} alt="logo" width={35} height={35} />
        <h3 className="text-base font-medium text-secondary">{dua_name}</h3>
      </div>
      {top && (
        <p className="text-primary text-base font-normal my-4 leading-8">
          {top}
        </p>
      )}
      {dua_arabic && (
        <p
          className="text-[1.625rem] font-normal font-me_quran leading-loose text-right mb-4"
          style={{
            wordSpacing: "8px",
          }}
        >
          {dua_arabic}
        </p>
      )}
      {transliteration && (
        <p className="text-primary font-normal text-base mb-4 leading-8">
          <span className="font-semibold">Transliteration:</span>
          <span className="italic">{transliteration}</span>
        </p>
      )}
      {translation && (
        <p className="text-primary font-normal text-base leading-8 mb-4">
          <span className="font-semibold">Translation:</span>
          <span className="italic">{translation}</span>
        </p>
      )}
      <div className="mb-4">
        <p className="text-base font-medium text-secondary">Reference:</p>
        <p className="text-base font-medium text-primary">{refference}</p>
      </div>
      <div>
        <DuaAction audioUrl={audio} />
      </div>
    </div>
  );
});

export default Dua;
