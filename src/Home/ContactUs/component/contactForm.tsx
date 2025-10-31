import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  country: string;
  productType: string;
  projectBudget: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      country: "",
      productType: "",
      projectBudget: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      companyName: Yup.string().required("Company name is required"),
      country: Yup.string().required("Country/Region is required"),
      productType: Yup.string().required("Product type is required"),
      projectBudget: Yup.string().required("Project budget is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      // Build mailto link
      const subject = encodeURIComponent("New Inquiry from Boltnex Website");
const body = encodeURIComponent(
  `Dear Boltnex Team,

I hope this message finds you well. Please find below the details of a new contact form submission:

───────────────────────────────
👤 Full Name: ${values.firstName} ${values.lastName}
📧 Email Address: ${values.email}
🏢 Company: ${values.companyName}
🌍 Country / Region: ${values.country}
🧩 Product Type: ${values.productType}
💰 Project Budget: $${values.projectBudget}
───────────────────────────────

✉️ Message:
${values.message}

───────────────────────────────
This message was automatically generated from the Boltnex website contact form.
`
);


      // open user's mail app with prefilled email
      window.location.href = `mailto:info@boltnex.com?subject=${subject}&body=${body}`;
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-3xl flex h-full flex-col gap-4 p-6 justify-between w-full"
    >
      {/* First Name & Last Name */}
      <article className="flex items-start gap-x-6 max-sm:flex-col max-sm:gap-y-4">
        <div className="w-full">
          <input
            type="text"
            id="firstName"
            {...formik.getFieldProps("firstName")}
            placeholder="First Name"
            className="w-full border-b outline-none border-[#8D8D8D] p-2"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            {...formik.getFieldProps("lastName")}
            className="w-full border-b outline-none border-[#8D8D8D] p-2"
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
          )}
        </div>
      </article>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email Address"
          id="email"
          {...formik.getFieldProps("email")}
          className="w-full border-b outline-none border-[#8D8D8D] p-2"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}
      </div>

      {/* Company Name & Country */}
      <article className="w-full  flex items-start gap-x-6 max-sm:flex-col max-sm:gap-y-4">
        <div className="w-full">
          <input
            type="text"
            id="companyName"
            placeholder="Company Name"
            {...formik.getFieldProps("companyName")}
            className="w-full border-b outline-none border-[#8D8D8D] p-2"
          />
          {formik.touched.companyName && formik.errors.companyName && (
            <p className="text-red-500 text-sm">
              {formik.errors.companyName}
            </p>
          )}
        </div>

        <div className="w-full">
          <input
            type="text"
            id="country"
            placeholder="Country / Region"
            {...formik.getFieldProps("country")}
            className="w-full border-b outline-none border-[#8D8D8D] p-2"
          />
          {formik.touched.country && formik.errors.country && (
            <p className="text-red-500 text-sm">{formik.errors.country}</p>
          )}
        </div>
      </article>

      {/* Product Type & Project Budget */}
      <article className="w-full flex max-sm:flex-col max-sm:gap-y-4 items-start gap-x-6">
        <div className="w-full">
          <input
            type="text"
            id="productType"
            placeholder="Product Type"
            {...formik.getFieldProps("productType")}
            className="w-full border-b outline-none border-[#8D8D8D] p-2"
          />
          {formik.touched.productType && formik.errors.productType && (
            <p className="text-red-500 text-sm">{formik.errors.productType}</p>
          )}
        </div>
<div className="w-full relative">
  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-lg">$</span>
  <input
    type="text"
    placeholder="Project Budget"
    id="projectBudget"
    value={
      formik.values.projectBudget
        ? Number(formik.values.projectBudget.replace(/,/g, "")).toLocaleString()
        : ""
    }
    onChange={(e) => {
      const rawValue = e.target.value.replace(/,/g, "");
      if (!isNaN(Number(rawValue))) {
        formik.setFieldValue("projectBudget", rawValue);
      }
    }}
    onBlur={formik.handleBlur}
    className="w-full border-b outline-none border-[#8D8D8D] p-2 pl-6"
  />
  {formik.touched.projectBudget && formik.errors.projectBudget && (
    <p className="text-red-500 text-sm">{formik.errors.projectBudget}</p>
  )}
</div>


      </article>

      {/* Message */}
      <div>
        <textarea
          id="message"
          placeholder="Message"
          {...formik.getFieldProps("message")}
          className="w-full h-10 border-b outline-none border-[#8D8D8D] p-2 resize-none"
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-500 text-sm">{formik.errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-bolts-blue cursor-pointer w-fit ml-auto px-10 py-2.5 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
