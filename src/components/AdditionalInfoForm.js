import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { updateForm } from '../redux/actions/formActions';
import { useNavigate } from 'react-router-dom';

const AdditionalInfoForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formState = useSelector((state) => state.form.additionalInfo);

  const formik = useFormik({
    initialValues: {
      coverLetter: formState.coverLetter || '',
      resume: formState.resume || null,
    },
    validationSchema: Yup.object({
      coverLetter: Yup.string().required('Cover letter is required'),
      resume: Yup.mixed().required('Resume is required'),
    }),
    onSubmit: (values) => {
      dispatch(updateForm('additionalInfo', values));
      navigate('/review');
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="container mt-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="card-title mb-4 text-center">Additional Information</h2>
            <div className="mb-3">
              <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                className={`form-control ${formik.touched.coverLetter && formik.errors.coverLetter ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.coverLetter}
              />
              {formik.touched.coverLetter && formik.errors.coverLetter ? (
                <div className="invalid-feedback">{formik.errors.coverLetter}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="resume" className="form-label">Resume Upload</label>
              <input
                type="file"
                id="resume"
                name="resume"
                className={`form-control ${formik.touched.resume && formik.errors.resume ? 'is-invalid' : ''}`}
                onChange={(event) => formik.setFieldValue("resume", event.currentTarget.files[0])}
                onBlur={formik.handleBlur}
              />
              {formik.touched.resume && formik.errors.resume ? (
                <div className="invalid-feedback">{formik.errors.resume}</div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={() => navigate('/skills')}>Previous</button>
              <button type="submit" className="btn btn-primary">Next</button>
            </div>
          </div>
        </div>
      </form>
    </FormikProvider>
  );
};

export default AdditionalInfoForm;
