import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ReviewPage from "./pages/ReviewPage";
import ViewPage from "./pages/ViewPage";
import { useState } from "react";

function App() {

  const [formValues, setFormValues] = useState({});
  const setFormValue = (value, key) => {
    setFormValues(currentFormValues => ({ ...currentFormValues, [key]: value }));
  }
  const resetFormValues = () => {
    setFormValues({});
  }

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/review" element={<ReviewPage formValues={formValues} setFormValue={setFormValue} resetFormValues={resetFormValues} />} />
          <Route path="/view" element={<ViewPage setFormValues={setFormValues} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
