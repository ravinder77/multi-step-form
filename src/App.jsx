import "./index.css";
import MultiStepForm from "./components/MultiStepForm";

import { FormProvider } from "./context/FormContext";

function App() {
  return (
      <FormProvider>
    <div className="w-full bg-blue-100 h-screen">
        <MultiStepForm />
    </div>
      </FormProvider>
  );
}

export default App;
