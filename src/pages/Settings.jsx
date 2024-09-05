import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <>
      <div className="settings-container">
        <h1>Settings</h1>

        <div className="settings-section">
          <h2>Profile Settings</h2>
          <div className="settings-item">
            <label>Change Username:</label>
            <input type="text" placeholder="Enter new username" />
            <button>Update</button>
          </div>
          <div className="settings-item">
            <label>Update Email:</label>
            <input type="email" placeholder="Enter new email" />
            <button>Update</button>
          </div>
          <div className="settings-item">
            <label>Change Password:</label>
            <input type="password" placeholder="Enter new password" />
            <button>Update</button>
          </div>
          <div className="settings-item">
            <label>Upload Profile Picture:</label>
            <input type="file" />
            <button>Upload</button>
          </div>
        </div>

        <div className="settings-section">
          <h2>Privacy Settings</h2>
          <div className="settings-item">
            <label>Account Visibility:</label>
            <select>
              <option>Public</option>
              <option>Private</option>
            </select>
            <button>Save</button>
          </div>
          <div className="settings-item">
            <label>Data Sharing Preferences:</label>
            <select>
              <option>Share Data</option>
              <option>Do Not Share Data</option>
            </select>
            <button>Save</button>
          </div>
          <div className="settings-item">
            <label>Manage Blocked Users:</label>
            <button>View Blocked List</button>
          </div>
        </div>

        <div className="settings-section">
          <h2>Notification Settings</h2>
          <div className="settings-item">
            <label>Email Notifications:</label>
            <select>
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
            <button>Save</button>
          </div>
          <div className="settings-item">
            <label>Push Notifications:</label>
            <select>
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
            <button>Save</button>
          </div>
        </div>

        <div className="settings-section">
          <h2>Language & Accessibility</h2>
          <div className="settings-item">
            <label>Select Language:</label>
            <select>
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
            </select>
            <button>Save</button>
          </div>
          <div className="settings-item">
            <label>Enable Text-to-Speech:</label>
            <select>
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
            <button>Save</button>
          </div>
          <div className="settings-item">
            <label>High Contrast Mode:</label>
            <select>
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
            <button>Save</button>
          </div>
        </div>

        <div className="settings-section">
          <h2>Account Management</h2>
          <div className="settings-item">
            <button className="danger">Deactivate Account</button>
          </div>
          <div className="settings-item">
            <button className="danger">Delete Account</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
