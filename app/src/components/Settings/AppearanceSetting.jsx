"use client";
import { Switch } from "@headlessui/react";
import { useState } from "react";
const AppearanceSetting = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="border border-t-0 py-4 rounded-b-lg px-4 flex flex-col space-y-3">
      <div className="flex justify-between">
        <p className="text-sm text-primary-light">Night Mode</p>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-secondary" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>
    </div>
  );
};

export default AppearanceSetting;
