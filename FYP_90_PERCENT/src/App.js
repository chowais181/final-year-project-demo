import './App.css';
import { BrowserRouter as Router ,Switch, Route, useHistory } from 'react-router-dom';
import Menu from './Admin/Menu.js';




import Studentlogin from './Student/Studentlogin.js';
import StuProfile from './Student/StuProfile.js';
import Studentsignup from './Student/Studentsignup.js';
import StudentDashboard from './Student/StudentDashboard.js';
import JoinClassByStudent from './Student/JoinClassByStudent';
import ChangepassStu from './Student/ChangepassStu';
import AttemptAssignmentByStu from './Student/AttemptAssignmentByStu';
import AttemptExamByStu from './Student/AttemptExamByStu';
import AttemptQuizByStu from './Student/AttemptQuizByStu';
import JoinAudioMeetingByStu from './Student/JoinAudioMeetingByStu';
import JoinVideoMeetingByStu from './Student/JoinVideoMeetingByStu';
import JoinChatMeetingByStu from './Student/JoinChatMeetingByStu';
import NotificationsStu from './Student/NotificationsStu';
import ClassDetailsStudent from './Student/ClassDetailsStudent'; 




import Teacherlogin from './Teacher/Teacherlogin.js';
import TeacherProfile from './Teacher/TeacherProfile.js';
import Teachersignup from './Teacher/Teachersignup.js';
import TeacherDashboard from './Teacher/TeacherDashboard.js';
import Changepasstea from './Teacher/Changepasstea.js';
import CclassByTeacher from './Teacher/CclassByTeacher';
import ListAllClassesByTea from './Teacher/ListAllClassesByTea';
import ManageStuByTeacher from './Teacher/ManageStuByTeacher';
import AddstuByTeacher from './Teacher/AddstuByTeacher';
import DeletestuByTeacher from './Teacher/DeletestuByTeacher';
import CreatAssignmentByTeacher from './Teacher/CreatAssignmentByTeacher';
import CreatExamByTeacher from './Teacher/CreatExamByTeacher';
import CreatQuizByTeacher from './Teacher/CreatQuizByTeacher';
import CreatSubgroupByTeacher from './Teacher/CreatSubgroupByTeacher';
import UploadAssessmentByTeacher  from './Teacher/UploadAssessmentByTeacher'; 
import EvaluteStuByTeacher  from './Teacher/EvaluteStuByTeacher'; 
import AddMarks  from './Teacher/AddMarks'; 
import ListstubyTeacher from './Teacher/ListstubyTeacher';
import  ClassDetails from './Teacher/ClassDetails';







import Login from './Admin/AdminLogin.js';
import Signup from './Admin/Signup.js';
import Dashboard from './Admin/Dashboard.js';
import ManageuserByAdmin from './Admin/ManageuserByAdmin';
import ManageStuByAdmin from './Admin/ManageStuByAdmin';
import ManageTeaByAdmin from './Admin/ManageTeaByAdmin';
import ManageClassbyAdmin from './Admin/ManageClassbyAdmin';
import AddStuByAdmin from './Admin/AddStuByAdmin';
import DeleteStuByAdmin from './Admin/DeleteStuByAdmin';
import AddteaByAdmin from './Admin/AddteaByAdmin';
import DeleteTeaByAdmin from './Admin/DeleteTeaByAdmin';
import CclassByAdmin from './Admin/CclassByAdmin';
import ListAllclassesByAdmin from './Admin/ListAllclassesByAdmin';
import Changepass from './Admin/Changepass';
import Notifications from './Admin/Notifications';
import ClassDetailsbyAdmin from './Admin/ClassDetailsbyAdmin';
import QuizInstructions from './Student/components/Quizinstructions';
// import Play from './components/quiz/Play';
import Play from './Student/components/Play';
import QuizSummary from './Student/components/QuizSummary';

import ProtectedRoute from "./Routes/ProtectedRoutes";
import ProtectedRouteAdmin from "./Routes/ProtectedRoutesAdmin";
import ProtectedRouteTeacher from "./Routes/ProtectedRoutesTeacher"
import ProtectedRouteStudent from "./Routes/ProtectedRoutesStudent"
import ProtectedRouteLogin from "./Routes/ProtectedRoutesLogin"

function App() {
  let history= useHistory();
  return (
    <Router >
    <div className="App">
    <Switch>
    <ProtectedRouteLogin path="/" exact component={Login} />

      <ProtectedRouteLogin path="/login" exact component={Login}/> 
      <ProtectedRouteStudent path="/stuprofile" exact component={StuProfile} />
      <ProtectedRouteStudent  path="/studentsignup" exact component={Studentsignup} />
      <ProtectedRouteStudent  path="/studentdashboard" exact component={StudentDashboard} />
      <ProtectedRouteStudent  path="/joinclassbystu" exact component={JoinClassByStudent} />
      <ProtectedRouteStudent  path="/attemptassignmentbystu" exact component={AttemptAssignmentByStu} />
      <ProtectedRouteStudent  path="/attemptexambystu" exact component={AttemptExamByStu} />
      <ProtectedRouteStudent  path="/attemptquizbystu" exact component={AttemptQuizByStu} />
      <ProtectedRouteStudent  path="/joinaudiomeetingbystu" exact component={JoinAudioMeetingByStu} />
      <ProtectedRouteStudent  path="/joinvideomeetingbystu" exact component={JoinVideoMeetingByStu} />
      <ProtectedRouteStudent  path="/joinchatmeetingbystu" exact component={JoinChatMeetingByStu} />
      <ProtectedRouteStudent  path="/changepassstu" exact component={ChangepassStu} />
      <ProtectedRouteStudent  path="/notificationsstu" exact component={NotificationsStu} />
      <ProtectedRouteStudent  path="/classdetailsstudent/:id" exact component={ClassDetailsStudent} />






      <ProtectedRouteTeacher path="/teachersignup" exact component={Teachersignup} />
      <ProtectedRouteTeacher path="/teaprofile" exact component={TeacherProfile} />
      <ProtectedRouteTeacher path="/teacherdashboard" exact component={TeacherDashboard} />
      <ProtectedRouteTeacher path="/changepasstea" exact component={Changepasstea} />
      <ProtectedRouteTeacher path="/createclassbyteacher" exact component={CclassByTeacher} />
      <ProtectedRouteTeacher path="/listallclassesbyteacher" exact component={ListAllClassesByTea} />
      <ProtectedRouteTeacher path="/managestubyteacher" exact component={ManageStuByTeacher} />
      <ProtectedRouteTeacher path="/addstubyteacher" exact component={AddstuByTeacher} />
      <ProtectedRouteTeacher path="/deletestubyteacher" exact component={DeletestuByTeacher} />
      <ProtectedRouteTeacher path="/creatassignmentbyteacher" exact component={CreatAssignmentByTeacher} />
      <ProtectedRouteTeacher path="/createxambyteacher" exact component={CreatExamByTeacher} />
      <ProtectedRouteTeacher path="/creatquizbyteacher" exact component={CreatQuizByTeacher} />
      <ProtectedRouteTeacher path="/createsubgroupbyteacher" exact component={CreatSubgroupByTeacher} />
      <ProtectedRouteTeacher path="/uploadassessmentbyteacher" exact component={UploadAssessmentByTeacher} />
      <ProtectedRouteTeacher path="/evalutestudentbyteacher" exact component={EvaluteStuByTeacher} />
      <ProtectedRouteTeacher path="/addmarks" exact component={AddMarks} />
      <ProtectedRouteTeacher path="/liststubyteacher" exact component={ListstubyTeacher} />
      <ProtectedRouteTeacher path="/classdetails/:id" exact component={ClassDetails} />








      <ProtectedRouteAdmin path="/adminsignup" exact component={Signup} />
      <ProtectedRouteAdmin path="/admindashboard" exact component={Dashboard} />
      <ProtectedRouteAdmin path="/manageuserbyadmin" exact component={ManageuserByAdmin} />
      <ProtectedRouteAdmin path="/managestubyadmin" exact component={ManageStuByAdmin} />
      <ProtectedRouteAdmin path="/manageteabyadmin" exact component={ManageTeaByAdmin} />
      <ProtectedRouteAdmin path="/manageclassbyadmin" exact component={ManageClassbyAdmin} />
      <ProtectedRouteAdmin path="/addstubyadmin" exact component={AddStuByAdmin} />
      <ProtectedRouteAdmin path="/deletestubyadmin" exact component={DeleteStuByAdmin} />
      <ProtectedRouteAdmin path="/addteabyadmin" exact component={AddteaByAdmin} />
      <ProtectedRouteAdmin path="/deleteteabyadmin" exact component={DeleteTeaByAdmin} />
      <ProtectedRouteAdmin path="/createclassbyadmin" exact component={CclassByAdmin} />
      <ProtectedRouteAdmin path="/listallclassesbyadmin" exact component={ListAllclassesByAdmin} />
      <ProtectedRouteAdmin path="/changepass" exact component={Changepass} />
      <ProtectedRouteAdmin path="/notifications" exact component={Notifications} />
      <ProtectedRouteAdmin path="/classdetailsbyadmin/:id" exact component={ClassDetailsbyAdmin} />
    

      <Route path="/play/instructions/:id" exact component={QuizInstructions}/>
      <Route path="/play/Quiz/:id" exact component={Play}/>
      <Route path="/play/quizSummary" exact component={QuizSummary} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
