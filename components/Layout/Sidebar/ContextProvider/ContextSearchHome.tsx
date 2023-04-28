import React from "react";

export const ContextSearchHome = React.createContext<{
  searchHomeListBook: string;
  setSearchHomeListBook: (value: string) => void;
  handleSearchHomeListBook?: (value?: any) => void;
}>({
  searchHomeListBook: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSearchHomeListBook: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleSearchHomeListBook: () => {},
});
