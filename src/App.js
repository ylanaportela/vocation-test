import "./styles/index.scss"
import Routing from "./Routing.js"
import ResultProvider from "./context/Result";
import './custom.scss';
import UserProvider from "./context/User";

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
