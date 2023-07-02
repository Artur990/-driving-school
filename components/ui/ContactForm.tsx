import { useContactForm } from '@/hooks/useContactForm';
import { FC } from 'react';

const ContactForm: FC<{}> = ({}) => {
  const formik = useContactForm();
  return (
    <form
      onSubmit={formik.handleSubmit}
      action="#"
      method="POST"
      className="mx-auto mt-1 max-w-xl sm:mt-20"
    >
      <div className="sm:col-span-2">
        <label
          htmlFor="first-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Imie i Nazwisko
        </label>
        <div className="mt-2.5">
          <input
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Imię i Nazwisko"
            type="text"
            name="name"
            id="name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-600">{formik.errors.name}</div>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-600">{formik.errors.email}</div>
            )}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="phone-number"
            className="block text-sm font-semibold leading-6 text-gray-900 ring-indigo-600"
          >
            Numer telefonu
          </label>
          <div className="relative mt-2.5">
            <input
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              placeholder="Numer telefonu"
              type="phoneNumber"
              name="phoneNumber"
              id="phoneNumber"
              autoComplete="phoneNumber"
              className="block w-full rounded-md border-0  px-3.5 py-2 pl-4   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="text-red-600">{formik.errors.phoneNumber}</div>
            )}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            WYŚLIJ WIADOMOŚĆ
          </label>
          <div className="mt-2.5">
            <textarea
              value={formik.values.message}
              onChange={formik.handleChange}
              placeholder="Wiadomość"
              name="message"
              id="message"
              rows={4}
              className="block w-full rounded-md  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-600">{formik.errors.message}</div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Wyślij
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
