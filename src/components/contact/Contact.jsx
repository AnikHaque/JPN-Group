// import React from "react";
// import img from "../images/pricing.jpg";
// import Back from "../common/Back";
// import "./contact.css";

// const Contact = () => {
//   return (
//     <>
//       <section className="contact mb">
//         <Back
//           name="Contact Us"
//           title="Get Helps & Friendly Support"
//           cover={img}
//         />
//         <div className="container">
//           <form className="shadow">
//             <h4>Fillup The Form</h4> <br />
//             <div>
//               <input type="text" placeholder="Name" />
//               <input type="text" placeholder="Email" />
//             </div>
//             <input type="text" placeholder="Subject" />
//             <textarea cols="30" rows="10"></textarea>
//             <button>Submit Request</button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Back from "../common/Back";
import img from "../images/pricing.jpg";
const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Back
        name="Contact Us"
        title="Get Helps & Friendly Support"
        cover={img}
      />
      <div className="max-w-5xl mx-auto bg-white p-8 mt-10 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`mt-1 p-2 w-full border ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md`}
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`mt-1 p-2 w-full border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`mt-1 p-2 w-full border ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md`}
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-[#27ae60] text-white p-2 rounded-md "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
