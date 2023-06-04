import { useFormik } from 'formik';
import * as Yup from 'yup';

export const useRegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      preferredDate: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Imie jest wymagane'),
      email: Yup.string()
        .email('Email jest niepoprawny')
        .required('Email jest wymagany'),
      phoneNumber: Yup.string().required('Number telefonu jest wymagany'),
      preferredDate: Yup.string().required('Dogodna data kursu jest wymagany'),
      message: Yup.string().required('Wiadomość jesst wymagana'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return formik;
};
