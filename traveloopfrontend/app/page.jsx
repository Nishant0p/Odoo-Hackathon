import React from "react";
import { redirect } from "next/navigation";

const Page = () => {
    redirect("/dashboard");
    return <div>Loading...</div>;
};

export default Page;
