'use client' // for client side rendering
import React, { useState, useEffect } from "react";

const HubSpotScheduler = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    // Fetch your HubSpot meeting scheduler link from an environment variable 
    const meetingLink = process.env.NEXT_PUBLIC_HUBSPOT_MEETING_LINK || "https://meetings-eu1.hubspot.com/olombelona-dev"; 
    const hubspotUtk = document.cookie.match(/hubspotutk=([^;]+)/)?.[1] || null;

    if (meetingLink) {
      setIframeSrc(
        `${meetingLink}?embed=true${hubspotUtk ? `&hubspotutk=${hubspotUtk}` : ""}`
      );
      setIsLoading(false);
    } else {
      console.error("HubSpot meeting link not found.");
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading scheduler...</p>
      ) : (
        <iframe
          src={iframeSrc}
          width="100%"
          height="700" // Adjust height as needed
          frameBorder="0"
          title="HubSpot Meeting Scheduler"
        />
      )}
    </div>
  );
};

export default HubSpotScheduler;

