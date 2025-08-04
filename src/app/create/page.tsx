import CreateView from "@/sections/create/create-view";
import React from "react";
export const metadata = {
  title: "Create News",
  description: "Create a new news article",
};
const page = async () => {
  return <CreateView />;
};

export default page;
