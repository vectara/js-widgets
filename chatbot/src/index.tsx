import React, { ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { ReactChatbot } from "@vectara/react-chatbot";

const renderChatbot = (props: Props) => {
  const root = ReactDOM.createRoot(
    document.getElementById(props.wrapperId) as HTMLElement
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
    ...((window as any).vectara || {}), // Avoid overwriting other vectara functions (if any)
    renderChatbot,
  };
})();

export interface Props {
  wrapperId: string;
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
