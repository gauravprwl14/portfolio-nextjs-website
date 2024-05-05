"use client";

import React, { useState, useEffect, useRef } from "react";

export interface TextWrapperProps {
  text: string;
  lineClamp?: number;
}

export const TextWrapper: React.FC<TextWrapperProps> = ({
  text,
  lineClamp = 2,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncatable, setIsTruncatable] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // Check if textRef is not null
    if (textRef.current) {
      const lineHeight = parseFloat(
        window.getComputedStyle(textRef.current).lineHeight
      );
      if (textRef.current.scrollHeight > lineHeight * lineClamp) {
        setIsTruncatable(true);
      }
    }
  }, [text, lineClamp]);

  return (
    <div className="w-full">
      <div className={`relative ${isExpanded ? "" : "h-14"}`}>
        <p
          ref={textRef}
          className={`overflow-hidden overflow-ellipsis ${
            isExpanded ? "" : "line-clamp-2"
          }`}
        >
          {text}
        </p>
        {!isExpanded && isTruncatable && (
          <div className="absolute bottom-0 right-0 px-2 py-0 z-10">
            <button
              className="text-blue-500 hover:text-blue-700 text-xs"
              onClick={toggleExpand}
            >
              Show more
            </button>
          </div>
        )}
      </div>
      {isExpanded && (
        <button
          className="text-blue-500 hover:text-blue-700 text-xs z-10"
          onClick={toggleExpand}
        >
          Show less
        </button>
      )}
    </div>
  );
};

export default TextWrapper;
