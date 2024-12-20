import React, { useState } from "react";
import "../components/AdminSettings.css";

const AdminSettingsPage = () => {
  const [settingOption, setSettingOption] = useState("");

  const handleChangeSetting = (e) => {
    setSettingOption(e.target.value);
  };

  return (
    <div className="content">
      <h1>Admin Settings</h1>
      <div className="settings-container">
        <form>
          <label>
            <input
              type="radio"
              value="user-management"
              checked={settingOption === "user-management"}
              onChange={handleChangeSetting}
            />
            User Management
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="notifications"
              checked={settingOption === "notifications"}
              onChange={handleChangeSetting}
            />
            Notification Settings
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="system-logs"
              checked={settingOption === "system-logs"}
              onChange={handleChangeSetting}
            />
            System Logs
          </label>
        </form>
        {settingOption && <p className="selected-option">Selected Option: {settingOption}</p>}
      </div>
    </div>
  );
};

export default AdminSettingsPage;
