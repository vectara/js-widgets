import React from "react";
import ReactDOM from "react-dom/client";
import { ReactSearch } from "@vectara/react-search";
import "./index.css";

const renderSearch = (props: Props) => {
  const root = ReactDOM.createRoot(
    document.getElementById(props.wrapperId) as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <ReactSearch
        customerId={props.customerId}
        corpusId={props.corpusId}
        apiKey={props.apiKey}
        placeholder={props.placeholder}
        isDeeplinkable={props.isDeepLinkable}
        openResultsInNewTab={props.openResultsInNewTab}
      />
    </React.StrictMode>
  );
};

(() => {
  (window as any).vectara = {
    renderSearch,
  };
})();

interface Props {
  wrapperId: string;
  customerId: string;
  corpusId: string;
  apiKey: string;
  placeholder?: string;
  isDeepLinkable?: boolean;
  openResultsInNewTab?: boolean;
}
