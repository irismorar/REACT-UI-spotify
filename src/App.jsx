import "./App.css";
import MainHeader from "./components/MainHeader";
import MainContent from "./components/MainContent";
import MainFooter from "./components/MainFooter";

export default function App() {
  return (
    <section>
      <MainHeader></MainHeader>
      <MainContent></MainContent>
      <MainFooter></MainFooter>
    </section>
  );
}
