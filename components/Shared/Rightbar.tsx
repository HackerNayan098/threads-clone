import React from "react";

const Rightbar = () => {
  return (
    <div className="lg:flex lg:flex-col hidden h-full p-4 bg-[#1d1d1d]">
      <section className="h-1/2">
        <h3>Suggested Communitites</h3>
      </section>
      <section className="h-1/2">
        <h3>Suggested People</h3>
      </section>
    </div>
  );
};

export default Rightbar;
