import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MyClass from "./components/Class/Class";
import MyForm from "./components/Form/Form";
import ReduxComp from './components/Redux/Redux';
import HomeComponent from './components/Home/Home';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent/>} />
          <Route path="class" element={<MyClass />} />
          <Route path="redux" element={<ReduxComp/>} />
          <Route path="prof" element={<div>REACTPROF</div>} />
          <Route path="css" element={<div>CSS</div>} />
          <Route path="form" element={<MyForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
