import EditView from "@/sections/edit/edit-view";
import React from "react";

export const metadata = {
  title: "Edit News",
  description: "Edit an existing news article",
};

const page = () => {
  return (
    <div>
      <EditView />
    </div>
  );
};

export default page;
