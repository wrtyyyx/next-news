import CreateView from "@/sections/create/create-view";
import React from "react";
import { getServerSession } from "next-auth";
import { log } from "console";
export const metadata = {
  title: "Create News",
  description: "Create a new news article",
};
const page = async () => {
  const session = await getServerSession();
  log("Session data in create page:", session);
  return <CreateView />;
};

export default page;
