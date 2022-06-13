import Routing from "./Routing.js"
import ResultProvider from "./context/Result";
import UserProvider from "./context/User";
import "./styles/index.scss"
import './custom.scss';


function App() {
  return (
    <UserProvider>
      <ResultProvider>
        <main className="main">
            <Routing />
        </main>
      </ResultProvider>
    </UserProvider>
  );
}

export default App;
