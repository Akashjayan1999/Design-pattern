import dynamic from "next/dynamic";


import AuthContainer from "@/container/auth-container";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl pt-80  font-bold">My Application</h1>
      <AuthContainer />
    </div>
  );
}
