import React, { ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { ReactChatbot } from "@vectara/react-chatbot";

const renderChatbot = (props: Props) => {
  const root = ReactDOM.createRoot(
    document.getElementsByTagName("body")[0] as HTMLElement
  );

  const convertedEmptyStateDisplay = props.emptyStateDisplay ? (
    <HTMLElementToReactNodeAdapter element={props.emptyStateDisplay} />
  ) : undefined;

  const updatedProps = {
    ...props,
    emptyStateDisplay: convertedEmptyStateDisplay,
  };

  root.render(
    <React.StrictMode>
      <ReactChatbot {...updatedProps} />
    </React.StrictMode>
  );
};

const HTMLElementToReactNodeAdapter = ({
  element,
}: {
  element: HTMLElement;
}): ReactNode => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef?.current) return;
    divRef.current.appendChild(element);
  }, []);

  return <div ref={divRef} />;
};

(() => {
  (window as any).vectara = {
    renderChatbot,
  };
})();

export interface Props {
  customerId: string;
  apiKey: string;
  corpusIds: string[];
  title?: string;
  placeholder?: string;
  inputSize?: "large" | "medium";
  emptyStateDisplay?: HTMLElement;
  isInitiallyOpen?: boolean;
  zIndex?: number;
}
