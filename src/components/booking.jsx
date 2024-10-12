import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Booking(availableTimes) {
  //using formik for state management and validation
  const formik = useFormik({
    initialValues: {
      name: "",
      time: "",
      date: "",
      location: "indoor",
      notes: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      time: Yup.string().required("Time is required"),
      date: Yup.string().required("Date is required"),
      location: Yup.string().required("Location selection is required"),
      notes: Yup.string(),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be a valid phone number")
        .required("Phone number is required"),
    }),
    onSubmit: (values) => {
      alert("Booking successful: " + JSON.stringify(values, null, 2));
      console.log("Form values:", values);
    },
  });

  return (
    <div>
      <h1
        className="mb-8 mt-10 shadow-sm text-center text-3xl font-extrabold tracking-tight leading-none text-white md:text-2xl lg:text-3xl"
        aria-label="Book a Table"
      >
        Book A Table
      </h1>

      <form id="booking" onSubmit={formik.handleSubmit} className="mx-6 px-6" aria-labelledby="bookingForm">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...formik.getFieldProps("name")}
              aria-invalid={formik.touched.name && formik.errors.name ? "true" : undefined}
              aria-describedby="nameError"
              className={`bg-secondary border ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-secondary"
              } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              required
            />
            {formik.touched.name && formik.errors.name ? (
              <div id="nameError" className="text-red-600">
                {formik.errors.name}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="time"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              {...formik.getFieldProps("time")}
              aria-invalid={formik.touched.time && formik.errors.time ? "true" : undefined}
              aria-describedby="timeError"
              className={`bg-secondary border ${
                formik.touched.time && formik.errors.time
                  ? "border-red-500"
                  : "border-secondary"
              } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              required
            />
            {formik.touched.time && formik.errors.time ? (
              <div id="timeError" className="text-red-600">
                {formik.errors.time}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              {...formik.getFieldProps("date")}
              aria-invalid={formik.touched.date && formik.errors.date ? "true" : undefined}
              aria-describedby="dateError"
              className={`bg-secondary border ${
                formik.touched.date && formik.errors.date
                  ? "border-red-500"
                  : "border-secondary"
              } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              required
            />
            {formik.touched.date && formik.errors.date ? (
              <div id="dateError" className="text-red-600">
                {formik.errors.date}
              </div>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              {...formik.getFieldProps("phoneNumber")}
              aria-invalid={formik.touched.phoneNumber && formik.errors.phoneNumber ? "true" : undefined}
              aria-describedby="phoneNumberError"
              className={`bg-secondary border ${
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "border-red-500"
                  : "border-secondary"
              } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
              placeholder="1234567890"
              required
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div id="phoneNumberError" className="text-red-600">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              aria-label="Indoor or Outdoor"
            >
              Location
            </label>
            <div className="flex">
              <label className="mr-4">
                <input
                  type="radio"
                  name="location"
                  value="indoor"
                  {...formik.getFieldProps("location")}
                  aria-checked={formik.values.location === "indoor"}
                  required
                />
                Indoor
              </label>
              <label>
                <input
                  type="radio"
                  name="location"
                  value="outdoor"
                  {...formik.getFieldProps("location")}
                  aria-checked={formik.values.location === "outdoor"}
                />
                Outdoor
              </label>
            </div>
            {formik.touched.location && formik.errors.location ? (
              <div className="text-red-600">{formik.errors.location}</div>
            ) : null}
          </div>

          

         
        </div>
        <div>
            <label
              htmlFor="notes"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Notes to Restaurant
            </label>
            <textarea
              id="notes"
              {...formik.getFieldProps("notes")}
              aria-invalid={formik.touched.notes && formik.errors.notes ? "true" : undefined}
              className="bg-secondary border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-10"
            />
          </div>
        <button
          type="submit"
          className="text-gray-800 bg-primary mx-auto hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
