import { createContext, useState } from "react";
import merge from "lodash/merge";
// CUSTOM COMPONENT
import { MatxLayoutSettings } from "../components/MatxLayout/settings";
export const SettingsContext = createContext({
  settings: MatxLayoutSettings,
  updateSettings: (_p0?: { layout1Settings: { leftSidebar: { mode: string; }; }; }) => {}
});

export default function SettingsProvider({ settings, children }:any) {
  const [currentSettings, setCurrentSettings] = useState(settings || MatxLayoutSettings);

  const handleUpdateSettings = (update = {}) => {
    const marged = merge({}, currentSettings, update);
    setCurrentSettings(marged);
  };

  return (
    <SettingsContext.Provider
      value={{ settings: currentSettings, updateSettings: handleUpdateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
