import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import HomeWrapper from "./_components/HomeWrapper";
import HostWrapper from "./_components/HostWrapper";

export default function Home() {
  const role = useSelector((state: RootState) => state.userRole.role);

  return <div>{role === "host" ? <HostWrapper /> : <HomeWrapper />}</div>;
}
