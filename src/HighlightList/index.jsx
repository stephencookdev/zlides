import React from "react";
import Step from "../Step";
import { List, ListItem } from "./styles";

const HighlightList = ({ items }) => {
  let itemsCount = 0;
  const cookedItems = items.map((it) => {
    const cookedIt = typeof it === "string" ? { text: it, count: 1 } : it;
    const startIndex = itemsCount;
    const endIndex = itemsCount + cookedIt.count;
    itemsCount = endIndex;

    return {
      text: cookedIt.text,
      startIndex,
      endIndex,
    };
  });

  return (
    <List>
      <Step step={`0-${itemsCount}`}>
        {(n) =>
          cookedItems.map((item, i) => (
            <ListItem
              key={i}
              active={
                n === 0 || (n >= item.startIndex + 1 && n < item.endIndex + 1)
              }
            >
              {item.text}
            </ListItem>
          ))
        }
      </Step>
    </List>
  );
};

export default HighlightList;
