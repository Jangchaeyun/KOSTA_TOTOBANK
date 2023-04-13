import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import MakeAccount from "./component/MakeAccount";
import Deposit from "./component/Deposit";
import Withdraw from "./component/Withdraw";
import AccountInfo from "./component/AccountInfo";
import AllAccountInfo from "./component/AllAccountInfo";
import Main from "./component/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/makeAccount" element={<MakeAccount />} />
        <Route exact path="/deposit" element={<Deposit />} />
        <Route exact path="/withdraw" element={<Withdraw />} />
        <Route exact path="/accountInfo" element={<AccountInfo />} />
        <Route exact path="/allAccountInfo" element={<AllAccountInfo />} />
      </Routes>
    </div>
  );
}

export default App;
