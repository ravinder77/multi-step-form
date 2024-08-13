import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function PersonalDetails() {
  const { formData, handleFormChange } = useContext(FormContext);
  console.log(formData);
    const { name, email, phoneNumber } = formData;
    


    const handleChange = (e) => {
    handleFormChange(e);
    };
    
    const handleSubmit = (e) => { 
        e.preventDefault();
        
    };


  return (
    <div className=" ">
      <h1 className="font-bold text-4xl text-[#1e4677]">Personal info</h1>
      <p className="text-gray-400 mt-2">
        Please provide your name, email and phone number.
      </p>

      <form onSumbit={handleSubmit}  className="mt-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-600 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md  outline-purple-600"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm text-gray-600 font-medium"
            >
              Email Address
            </label>
            <input
                        type="text"
                name="email"
              
              value={email}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md  outline-purple-600"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm text-gray-600 font-medium"
            >
              Phone Number
            </label>
            <input
                        type="text"
                name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              className="rounded-md p-2 border border-gray-300 outline-purple-600"
            />
          </div>
        </div>
      </form>

      <div className="mt-20 text-end">
        <button className="bg-[#1e4677] font-medium text-white px-6 py-2 rounded-md w-fit">
          Next Step
        </button>
      </div>
    </div>
  );

}
export default PersonalDetails;
