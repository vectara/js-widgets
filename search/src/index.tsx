import React from "react";
import ReactDOM from "react-dom/client";
import { ReactSearch } from "@vectara/react-search";
import "./index.css";

const renderSearch = (
  wrapperId: string,
  customerId: string,
  corpusId: string,
  apiKey: string,
  placeholder?: string,
  isDeepLinkable = false,
  openResultsInNewTab = false
) => {
  const root = ReactDOM.createRoot(
    document.getElementById(wrapperId) as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <ReactSearch
        customerId={customerId}
        corpusId={corpusId}
        apiKey={apiKey}
        placeholder={placeholder}
        isDeeplinkable={isDeepLinkable}
        openResultsInNewTab={openResultsInNewTab}
      />
    </React.StrictMode>
  );
};

(() => {
  (window as any).vectara = {
    renderSearch,
  };
})();
