import { useState } from "react";
export default function SecThree(){

  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
    console.log('Form submitted:', formData);

    // Reset the form after submission
    setFormData(initialFormData);

    // Set the state to indicate that the message has been sent
    setIsMessageSent(true);

    // Reset the "Message Sent" state after a few seconds (optional)
    setTimeout(() => {
      setIsMessageSent(false);
    }, 5000);
  };
  return(
    <>
      <div className="flex flex-col md:flex-row gap-4 py-10 px-4 md:px-20">
        <div className="flex flex-col w-full md:w-1/2 space-y-10">
          <h1 className="font-bold text-4xl">We are the Future of Cargo & Logistics that helps you move parcels faster</h1>
          <p className="text-lg md:text-xl">At Oltem Logistics, we prioritize your success by providing tailored logistics solutions that are designed to meet your unique needs. Our focus on continuous improvement means that we are always working to enhance our services to provide you with the best possible logistics experience.</p>
        </div>
        <div className="w-full md:w-1/2">
            <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 border rounded"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-700 w-full text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>

            {isMessageSent && (
              <p className="mt-4 text-green-600 font-bold">Message sent! Thank you!</p>
            )}
          </div>
        
      </div>
    </>
  )
}