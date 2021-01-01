import React from "react";
import "../css/siteData.css";

import DataCounter from "./common/DataCounter";

export default function App() {
  return (
    <div className="data-container" id="data">
      <DataCounter end={235} title="Clients" />
      <DataCounter end={530} title="Projects" />
      <DataCounter end={1399} title="Hours of support" />
      <DataCounter end={20} title="Staff" />
    </div>
  );
}
