import React, { useState } from "react";

interface ReadMoreProps {
  text: string;
  maxChars?: number;
  className?: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxChars = 150 }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggle = (): void => setExpanded((prev) => !prev);

  const isTruncated: boolean = text.length > maxChars;
  const visibleText: string = expanded ? text : text.slice(0, maxChars);

  return (
    <div className={"flex"}>
      <p>
        {visibleText}
        {isTruncated && !expanded && "..."}
        {isTruncated && (
          <span
            onClick={toggle}
            className="text-secondaryCol cursor-pointer ml-1 underline mt-1 text-sm font-semibold"
          >
            {expanded ? "Read less" : "Read more"}
          </span>
        )}
      </p>
    </div>
  );
};

export default ReadMore;