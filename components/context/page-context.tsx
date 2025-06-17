"use client"; 

import { createContext, useContext } from "react";
import { SharedData } from "@/types";

interface PageContextType {
  props: SharedData;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export function usePage<T = PageContextType>(): T {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context as T;
}

export const PageProvider = PageContext.Provider; 