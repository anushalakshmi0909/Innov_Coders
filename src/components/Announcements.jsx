import React from "react";
import "../components/Announcements.css";

const AnnouncementPage = () => {
  const announcements = [
    { id: 1, title: "System Maintenance", date: "2024-12-10", details: "Scheduled maintenance from 2 AM to 4 AM." },
    { id: 2, title: "New Feature Launch", date: "2024-12-12", details: "We are launching a new dashboard feature for admins." },
    { id: 3, title: "Feedback Survey", date: "2024-12-15", details: "We value your feedback! Please fill out the survey." },
  ];

  return (
    <div className="content">
      <h1>Announcements</h1>
      <div className="announcements-container">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="announcement">
            <h3>{announcement.title}</h3>
            <p><strong>Date:</strong> {announcement.date}</p>
            <p>{announcement.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementPage;
