import Image from "next/image";
import WelcomeMessage from "./components/WelcomeMessage";
import ToggleText from "./components/ToggleText";

export default function Home() {
  return (
    <main>
      <WelcomeMessage message="Hello and Welcome!" />
      <ToggleText />
    </main>
  );
}
