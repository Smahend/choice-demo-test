import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { updateForm } from '../redux/actions/formActions';
import { useNavigate } from 'react-router-dom';

const EducationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formState = useSelector((state) => state.form.education);

  const formik = useFormik({
    initialValues: {
      ssc: formState.ssc || { school: '', board: '', cgpa: '', passingYear: '' },
      hsc: formState.hsc || { school: '', board: '', cgpa: '', passingYear: '' },
      graduation: formState.graduation || { school: '', board: '', cgpa: '', passingYear: '' },
      postGraduation: formState.postGraduation || { school: '', board: '', cgpa: '', passingYear: '' },
    },
    validationSchema: Yup.object({
      ssc: Yup.object({
        school: Yup.string().required('School name is required'),
        board: Yup.string().required('Board/University is required'),
        cgpa: Yup.string().required('CGPA is required'),
        passingYear: Yup.string().required('Passing year is required'),
      }),
      hsc: Yup.object({
        school: Yup.string().required('School name is required'),
        board: Yup.string().required('Board/University is required'),
        cgpa: Yup.string().required('CGPA is required'),
        passingYear: Yup.string().required('Passing year is required'),
      }),
      graduation: Yup.object({
        school: Yup.string().required('School name is required'),
        board: Yup.string().required('Board/University is required'),
        cgpa: Yup.string().required('CGPA is required'),
        passingYear: Yup.string().required('Passing year is required'),
      }),
      postGraduation: Yup.object({
        school: Yup.string().required('School name is required'),
        board: Yup.string().required('Board/University is required'),
        cgpa: Yup.string().required('CGPA is required'),
        passingYear: Yup.string().required('Passing year is required'),
      }),
    }),
    onSubmit: (values) => {
      dispatch(updateForm('education', values));
      navigate('/work-experience');
    },
  });

  const renderInputField = (id, label, name, value, error, touched) => (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        type="text"
        id={id}
        name={name}
        className={`form-control ${touched && error ? 'is-invalid' : ''}`}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={value}
      />
      {touched && error ? (
        <div className="invalid-feedback">{error}</div>
      ) : null}
    </div>
  );

  return (
    <FormikProvider value={formik}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header text-center">
                <h2>Education Information</h2>
              </div>
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <h3 className="mt-4">SSC</h3>
                  {renderInputField('sscSchool', 'School/Institute Name', 'ssc.school', formik.values.ssc.school, formik.errors.ssc?.school, formik.touched.ssc?.school)}
                  {renderInputField('sscBoard', 'Board/University', 'ssc.board', formik.values.ssc.board, formik.errors.ssc?.board, formik.touched.ssc?.board)}
                  {renderInputField('sscCgpa', 'CGPA', 'ssc.cgpa', formik.values.ssc.cgpa, formik.errors.ssc?.cgpa, formik.touched.ssc?.cgpa)}
                  {renderInputField('sscPassingYear', 'Passing Year', 'ssc.passingYear', formik.values.ssc.passingYear, formik.errors.ssc?.passingYear, formik.touched.ssc?.passingYear)}

                  <h3 className="mt-4">HSC</h3>
                  {renderInputField('hscSchool', 'School/Institute Name', 'hsc.school', formik.values.hsc.school, formik.errors.hsc?.school, formik.touched.hsc?.school)}
                  {renderInputField('hscBoard', 'Board/University', 'hsc.board', formik.values.hsc.board, formik.errors.hsc?.board, formik.touched.hsc?.board)}
                  {renderInputField('hscCgpa', 'CGPA', 'hsc.cgpa', formik.values.hsc.cgpa, formik.errors.hsc?.cgpa, formik.touched.hsc?.cgpa)}
                  {renderInputField('hscPassingYear', 'Passing Year', 'hsc.passingYear', formik.values.hsc.passingYear, formik.errors.hsc?.passingYear, formik.touched.hsc?.passingYear)}

                  <h3 className="mt-4">Graduation</h3>
                  {renderInputField('graduationSchool', 'School/Institute Name', 'graduation.school', formik.values.graduation.school, formik.errors.graduation?.school, formik.touched.graduation?.school)}
                  {renderInputField('graduationBoard', 'Board/University', 'graduation.board', formik.values.graduation.board, formik.errors.graduation?.board, formik.touched.graduation?.board)}
                  {renderInputField('graduationCgpa', 'CGPA', 'graduation.cgpa', formik.values.graduation.cgpa, formik.errors.graduation?.cgpa, formik.touched.graduation?.cgpa)}
                  {renderInputField('graduationPassingYear', 'Passing Year', 'graduation.passingYear', formik.values.graduation.passingYear, formik.errors.graduation?.passingYear, formik.touched.graduation?.passingYear)}

                  <h3 className="mt-4">Post Graduation</h3>
                  {renderInputField('postGraduationSchool', 'School/Institute Name', 'postGraduation.school', formik.values.postGraduation.school, formik.errors.postGraduation?.school, formik.touched.postGraduation?.school)}
                  {renderInputField('postGraduationBoard', 'Board/University', 'postGraduation.board', formik.values.postGraduation.board, formik.errors.postGraduation?.board, formik.touched.postGraduation?.board)}
                  {renderInputField('postGraduationCgpa', 'CGPA', 'postGraduation.cgpa', formik.values.postGraduation.cgpa, formik.errors.postGraduation?.cgpa, formik.touched.postGraduation?.cgpa)}
                  {renderInputField('postGraduationPassingYear', 'Passing Year', 'postGraduation.passingYear', formik.values.postGraduation.passingYear, formik.errors.postGraduation?.passingYear, formik.touched.postGraduation?.passingYear)}

                  <div className="text-center mt-4">
                    <button type="button" className="btn btn-secondary me-2" onClick={() => navigate('/')}>Previous</button>
                    <button type="submit" className="btn btn-primary">Next</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormikProvider>
  );
};

export default EducationForm;
