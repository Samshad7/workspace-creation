import Congo from './components/Congo';
import Select from './components/Select';
import Setup from './components/Setup';
import Welcome from './components/Welcome';
import logo from '../src/Logo.png';
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <img src={logo} alt="logo" className="logo" />
    {/* <Setup /> */}
    {/* <Congo /> */}
    {/* <Select /> */}
    <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/setup" element={<Setup />} />
        <Route exact path="/select" element={<Select />} />
        <Route exact path="/congo" element={<Congo />} />
      </Routes>
    </>
  );
}

export default App;
