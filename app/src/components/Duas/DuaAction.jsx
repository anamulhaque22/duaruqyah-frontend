import Image from "next/image";

import bookmark from "../../assets/images/dua-action-icon/bookmark.svg";
import copy from "../../assets/images/dua-action-icon/copy.svg";
import plan from "../../assets/images/dua-action-icon/plan.svg";
import report from "../../assets/images/dua-action-icon/report.svg";
import share from "../../assets/images/dua-action-icon/share.svg";
import DuaAudioPlayer from "./DuaAudioPlayer";
const DuaAction = ({ audioUrl }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <DuaAudioPlayer audioUrl={audioUrl} />
      </div>

      <div className="flex gap-x-6">
        <Image src={copy} alt="logo" width={24} height={24} />
        <Image src={bookmark} alt="logo" width={24} height={24} />
        <Image src={plan} alt="logo" width={24} height={24} />
        <Image src={share} alt="logo" width={24} height={24} />
        <Image src={report} alt="logo" width={24} height={24} />
      </div>
    </div>
  );
};

export default DuaAction;
