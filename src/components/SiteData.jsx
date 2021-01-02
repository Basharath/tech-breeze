import React from "react";
import "../css/siteData.css";

import DataCounter from "./common/DataCounter";

export default function App() {
  return (
    <div className="data-container" id="data">
      <DataCounter count={235} title="Clients" />
      <DataCounter count={530} title="Projects" />
      <DataCounter count={1399} title="Hours of support" />
      <DataCounter count={20} title="Staff" />
    </div>
  );
}
