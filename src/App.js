import './App.css';
import Header from './component/header'
import Footer from './component/footer'
import Main from './component/main'

function App() {
  return (
    <div>
      <Header className="header" title="Beasts"/>
      <Main/>
      <Footer author="Tray Chea"/>
    </div>
  );
}

export default App;
