"use client";
import settingsList from "../../utils/settingsList";
import AccordionItem from "./AccordionItem";

const Settings = () => {
  const SettingsList = settingsList;
  return (
    <div className="rounded-2xl bg-white overflow-hidden h-[calc(84vh)] px-5 py-8 overflow-y-auto hidden 3xl:block">
      <h3 className="text-center text-xl text-primary font-bold mb-6">
        Settings
      </h3>
      <div className="flex flex-col gap-y-3">
        {SettingsList.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Settings;
