import Header from "./components/Header";
import Footer from "./components/Footer";
import SignupForm from "./components/SignupForm";
import Background from "./components/Background";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home() {
  return (
    <>
      <Background />
      <LanguageSwitcher />
      <Header />
      <SignupForm />
      <Footer />
    </>
  );
}
