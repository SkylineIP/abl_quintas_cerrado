"use client";

import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    redirect("/quintas-cerrado");
  }, [])

  return (
    <>

    </>
  );
};

export default Home;
