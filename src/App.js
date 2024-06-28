import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalInfoForm from './components/PersonalInfoForm';
import EducationForm from './components/EducationForm';
import WorkExperienceForm from './components/WorkExperienceForm';
import SkillsForm from './components/SkillsForm';
import AdditionalInfoForm from './components/AdditionalInfoForm';
import ReviewForm from './components/ReviewForm';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<PersonalInfoForm />} />
            <Route path="/education" element={<EducationForm />} />
            <Route path="/work-experience" element={<WorkExperienceForm />} />
            <Route path="/skills" element={<SkillsForm />} />
            <Route path="/additional-info" element={<AdditionalInfoForm />} />
            <Route path="/review" element={<ReviewForm />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;