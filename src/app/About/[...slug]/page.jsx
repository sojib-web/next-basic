import React from "react";

const AboutSlugPages = async ({ params }) => {
  const p = await params;
  console.log(p);
  return <div>AboutSlugPages</div>;
};

export default AboutSlugPages;
