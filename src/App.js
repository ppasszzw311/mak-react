import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { GlobalStyle, ResetStyle } from "./style/globalstyle";
function App() {
  return (
    <div className="app">
      <ResetStyle />
      <GlobalStyle />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
