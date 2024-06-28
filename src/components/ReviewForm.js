import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { resetForm } from '../redux/actions/formActions';

const ReviewForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { personalInfo, education = {}, workExperience = { experiences: [] }, skills, additionalInfo } = useSelector((state) => state.form);

  const handleSubmit = () => {
    const educationDetails = Object.keys(education).map(level => {
      return `
      ${level}:
        School/Institute: ${education[level].school}
        Board/University: ${education[level].board}
        CGPA: ${education[level].cgpa}
        Passing Year: ${education[level].passingYear}
      `;
    }).join('\n');

    const workExperienceDetails = workExperience.experiences.map(exp => {
      return `
      Company Name: ${exp.company}
      Job Title: ${exp.jobTitle}
      Duration: ${exp.duration}
      `;
    }).join('\n');

    const message = `
    Personal Information:
      Name: ${personalInfo.name}
      Email: ${personalInfo.email}
      Phone: ${personalInfo.phone}
      Address: ${personalInfo.address}

    Education:
      ${educationDetails}

    Work Experience:
      ${workExperienceDetails}

    Skills and Qualifications:
      Technical Skills: ${skills.technicalSkills}
      Certifications: ${skills.certifications}

    Additional Information:
      Cover Letter: ${additionalInfo.coverLetter}
      Resume: ${additionalInfo.resume ? additionalInfo.resume.name : 'N/A'}
    `;

    alert(message);

    dispatch(resetForm());
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4 text-center">Review Application</h2>

          <div className="mb-3">
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> {personalInfo.name}</p>
            <p><strong>Email:</strong> {personalInfo.email}</p>
            <p><strong>Phone:</strong> {personalInfo.phone}</p>
            <p><strong>Address:</strong> {personalInfo.address}</p>
          </div>

          <div className="mb-3">
            <h3>Education</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>School/Institute</th>
                  <th>Board/University</th>
                  <th>CGPA</th>
                  <th>Passing Year</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(education).map((level, index) => (
                  <tr key={index}>
                    <td>{level}</td>
                    <td>{education[level].school}</td>
                    <td>{education[level].board}</td>
                    <td>{education[level].cgpa}</td>
                    <td>{education[level].passingYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-3">
            <h3>Work Experience</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Job Title</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {workExperience.experiences.map((exp, index) => (
                  <tr key={index}>
                    <td>{exp.company}</td>
                    <td>{exp.jobTitle}</td>
                    <td>{exp.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-3">
            <h3>Skills and Qualifications</h3>
            <p><strong>Technical Skills:</strong> {skills.technicalSkills}</p>
            <p><strong>Certifications:</strong> {skills.certifications}</p>
          </div>

          <div className="mb-3">
            <h3>Additional Information</h3>
            <p><strong>Cover Letter:</strong> {additionalInfo.coverLetter}</p>
            <p><strong>Resume:</strong> {additionalInfo.resume ? additionalInfo.resume.name : ''}</p>
          </div>

          <div className="d-flex justify-content-between">
            <Link to="/additional-info" className="btn btn-secondary">Edit Additional Information</Link>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit Application</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
