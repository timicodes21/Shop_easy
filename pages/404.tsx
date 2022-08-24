import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });
  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <h1 className="text-danger">Page not found</h1>
      </div>
    </>
  );
};

export default NotFound;
