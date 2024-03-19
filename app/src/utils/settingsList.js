import fontColored from "../assets/images/color/font.svg";
import generalColored from "../assets/images/color/general.svg";
import languageColored from "../assets/images/color/language.svg";
import font from "../assets/images/font.svg";
import general from "../assets/images/general.svg";
import language from "../assets/images/language.svg";
import AppearanceSetting from "../components/Settings/AppearanceSetting";
import FontSetting from "../components/Settings/FontSetting";
import GeneralSetting from "../components/Settings/GeneralSetting";
import LanguageContent from "../components/Settings/LanguageContent";

const settingsList = [
  {
    id: 1,
    image: language,
    imageColored: languageColored,
    title: "Language Setting",
    toggleContent: <LanguageContent />,
  },
  {
    id: 2,
    image: general,
    imageColored: generalColored,
    title: "General Setting",
    toggleContent: <GeneralSetting />,
  },
  {
    id: 3,
    image: font,
    imageColored: fontColored,
    title: "Font Setting",
    toggleContent: <FontSetting />,
  },
  {
    id: 4,
    image: font,
    imageColored: fontColored,
    title: "Appearance Setting",
    toggleContent: <AppearanceSetting />,
  },
];
export default settingsList;
