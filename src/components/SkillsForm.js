import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { updateForm } from '../redux/actions/formActions';
import { useNavigate } from 'react-router-dom';

const SkillsForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formState = useSelector((state) => state.form.skills);

  const formik = useFormik({
    initialValues: {
      technicalSkills: formState.technicalSkills || '',
      certifications: formState.certifications || '',
    },
    validationSchema: Yup.object({
      technicalSkills: Yup.string().required('Technical skills are required'),
      certifications: Yup.string().required('Certifications are required'),
    }),
    onSubmit: (values) => {
      dispatch(updateForm('skills', values));
      navigate('/additional-info');
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="container mt-5">
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="card-title mb-4 text-center">Skills Information</h2>
            <div className="mb-3">
              <label htmlFor="technicalSkills" className="form-label">Technical Skills</label>
              <textarea
                id="technicalSkills"
                name="technicalSkills"
                className={`form-control ${formik.touched.technicalSkills && formik.errors.technicalSkills ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.technicalSkills}
              />
              {formik.touched.technicalSkills && formik.errors.technicalSkills ? (
                <div className="invalid-feedback">{formik.errors.technicalSkills}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="certifications" className="form-label">Certifications</label>
              <textarea
                id="certifications"
                name="certifications"
                className={`form-control ${formik.touched.certifications && formik.errors.certifications ? 'is-invalid' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.certifications}
              />
              {formik.touched.certifications && formik.errors.certifications ? (
                <div className="invalid-feedback">{formik.errors.certifications}</div>
              ) : null}
            </div>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={() => navigate('/work-experience')}>Previous</button>
              <button type="submit" className="btn btn-primary">Next</button>
            </div>
          </div>
        </div>
      </form>
    </FormikProvider>
  );
};

export default SkillsForm;
