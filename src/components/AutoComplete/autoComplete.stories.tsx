import React, { useState } from "react";
import { Meta } from "@storybook/react";

import { AutoComplete } from "./autoComplete";

export default {
  title: "AutoComplete",
  component: AutoComplete,
} as Meta;

export const SimpleComplete = () => {
//   const [value, setValue] = useState();
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items);
        return items
          .slice(0, 10)
          .map((item: any) => ({ value: item.login, ...item }));
      });
  };
  return (
    <>
      <AutoComplete fetchSuggestions={handleFetch} />
    </>
  );
};
