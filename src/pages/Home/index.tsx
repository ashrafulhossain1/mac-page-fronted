import HomeWrapper from "./_components/HomeWrapper";
import HostWrapper from "./_components/HostWrapper";

const host = true;

export default function Home() {
  return <div>{host ? <HostWrapper /> : <HomeWrapper />}</div>;
}
