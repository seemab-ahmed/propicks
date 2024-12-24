import React, { useEffect } from "react";

const FirmDemo = () => {
  useEffect(() => {
    // Dynamically load the Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-16">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/sales-proppicks/45min?background_color=010510&text_color=ffffff&primary_color=1972f5"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default FirmDemo;
