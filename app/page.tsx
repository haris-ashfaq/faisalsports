import { auth } from "@/app/auth";
import WelcomePage from "@/components/WelcomePage";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return <WelcomePage />;
  }

  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
