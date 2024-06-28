import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, FieldArray, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { updateForm } from '../redux/actions/formActions';
import { useNavigate } from 'react-router-dom';

const WorkExperienceForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formState = useSelector((state) => state.form.workExperience);

  const formik = useFormik({
    initialValues: {
      experiences: formState.experiences || [{ company: '', jobTitle: '', duration: '' }],
    },
    validationSchema: Yup.object({
      experiences: Yup.array().of(
        Yup.object().shape({
          company: Yup.string().required('Company name is required'),
          jobTitle: Yup.string().required('Job title is required'),
          duration: Yup.string().required('Duration is required'),
        })
      ),
    }),
    onSubmit: (values) => {
      dispatch(updateForm('workExperience', values));
      navigate('/skills');
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className="container mt-5">
        <h2 className="mb-4 text-center">Work Experience Information</h2>
        <FieldArray name="experiences">
          {({ push, remove }) => (
            <>
              {formik.values.experiences.map((experience, index) => (
                <div key={index} className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Experience {index + 1}</h5>
                    <div className="mb-3">
                      <label htmlFor={`experiences.${index}.company`} className="form-label">Company Name</label>
                      <input
                        type="text"
                        id={`experiences.${index}.company`}
                        name={`experiences.${index}.company`}
                        className={`form-control ${formik.touched.experiences?.[index]?.company && formik.errors.experiences?.[index]?.company ? 'is-invalid' : ''}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.experiences[index].company}
                      />
                      {formik.touched.experiences?.[index]?.company && formik.errors.experiences?.[index]?.company ? (
                        <div className="invalid-feedback">{formik.errors.experiences[index].company}</div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor={`experiences.${index}.jobTitle`} className="form-label">Job Title</label>
                      <input
                        type="text"
                        id={`experiences.${index}.jobTitle`}
                        name={`experiences.${index}.jobTitle`}
                        className={`form-control ${formik.touched.experiences?.[index]?.jobTitle && formik.errors.experiences?.[index]?.jobTitle ? 'is-invalid' : ''}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.experiences[index].jobTitle}
                      />
                      {formik.touched.experiences?.[index]?.jobTitle && formik.errors.experiences?.[index]?.jobTitle ? (
                        <div className="invalid-feedback">{formik.errors.experiences[index].jobTitle}</div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor={`experiences.${index}.duration`} className="form-label">Duration</label>
                      <input
                        type="text"
                        id={`experiences.${index}.duration`}
                        name={`experiences.${index}.duration`}
                        className={`form-control ${formik.touched.experiences?.[index]?.duration && formik.errors.experiences?.[index]?.duration ? 'is-invalid' : ''}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.experiences[index].duration}
                      />
                      {formik.touched.experiences?.[index]?.duration && formik.errors.experiences?.[index]?.duration ? (
                        <div className="invalid-feedback">{formik.errors.experiences[index].duration}</div>
                      ) : null}
                    </div>
                    <button type="button" className="btn btn-danger" onClick={() => remove(index)}>Remove</button>
                  </div>
                </div>
              ))}
              <div className="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-success mb-4"
                  onClick={() => push({ company: '', jobTitle: '', duration: '' })}
                >
                  Add Experience
                </button>
              </div>
            </>
          )}
        </FieldArray>
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/education')}>Previous</button>
          <button type="submit" className="btn btn-primary">Next</button>
        </div>
      </form>
    </FormikProvider>
  );
};

export default WorkExperienceForm;
