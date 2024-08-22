
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'
import Protected from './components/Protected'
import Error from './pages/Error'
import JobDetail from './pages/JobDetail'
import Jobs from './pages/user/Jobs'
import UserDashboard from './pages/user/UserDashboard'
import UserLayout from './layouts/UserLayout'
import MyJobs from './pages/user/MyJobs'
import MyProfile from './pages/user/MyProfile'
import CV from './pages/user/CV'
import CompanyLayout from './layouts/CompanyLayout'
import PostJob from './pages/company/PostJob'
import Profile from './pages/company/Profile'
import Interviews from './pages/company/Interviews'
import CompanyDashboard from './pages/company/CompanyDashboard'
import Applicants from './pages/company/Applicants'
import ApplicantDetail from './pages/company/ApplicantDetail'
import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import Subscription from './pages/company/Subscription'
import ScheduleInterview from './pages/company/ScheduleInterview'
import MyInterviews from './pages/user/MyInterviews'
import PublicLayout from './layouts/PublicLayout'
import Blogs from './pages/Blogs'
import Companies from './pages/admin/Companies'
import AdminJobs from './pages/admin/AdminJobs'
import AdminProfile from './pages/admin/AdminProfile'
import Users from './pages/admin/Users'
import PostBlog from './pages/company/PostBlog'
import CompanyJobs from './pages/company/CompanyJobs'
import BlogDetails from './pages/BlogDetails'
import CompanyJobDetails from './pages/company/CompanyJobDetails'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const auth = useSelector((state)=>state.user.auth)
  const role = useSelector((state)=>state.user.user?.role)


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path='/logout' element={<Protected isAuth={auth}><Login /></Protected>} /> */}

          <Route path='/' element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path='job/details' element={<JobDetail />} />
            <Route path='jobs' element={<Jobs />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='blog/details' element={<BlogDetails />} />
            <Route path='about-us' element={<AboutUs />} />
            <Route path='contact-us' element={<ContactUs />} />
          </Route>

   


<Route path='/user' element={<Protected isAuth={auth} role={role} allowedRoles={['user']}><UserLayout /></Protected>}>
    <Route index path='dashboard' element={<Protected isAuth={auth} role={role} allowedRoles={['user']}><UserDashboard /></Protected>} />
    <Route path='my-jobs' element={<Protected isAuth={auth} role={role} allowedRoles={['user']}><MyJobs /></Protected>} />
    <Route path='my-profile' element={<Protected isAuth={auth} role={role} allowedRoles={['user']}><MyProfile /></Protected>} />
    <Route path='my-interviews' element={<Protected isAuth={auth} role={role} allowedRoles={['user']}><MyInterviews /></Protected>} />
    <Route path='my-CV' element={<Protected isAuth={auth} role={role} allowedRoles={['user']}><CV /></Protected>} />
</Route>

<Route path='/company' element={<Protected isAuth={auth} role={role} allowedRoles={['company']}><CompanyLayout /></Protected>}>
    <Route index path='dashboard' element={<Protected isAuth={auth} role={role} allowedRoles={['company']}><CompanyDashboard /></Protected>} />
    <Route path='jobs' element={<Protected isAuth={auth} role={role} allowedRoles={['company']}><CompanyJobs /></Protected>} />
    <Route path='post-job' element={<Protected isAuth={auth} role={role} allowedRoles={['company']}><PostJob /></Protected>} />
    <Route path='jobs/details' element={<Protected isAuth={auth} role={role} allowedRoles={['company']}><CompanyJobDetails /></Protected>} />
    <Route path='applicants' element={<Protected isAuth={auth} role={role} allowedRoles={['company']}><Applicants /></Protected>} />
    <Route path='applicant/details' element={<Protected isAuth={auth} role={role} allowedRoles={['company']}><ApplicantDetail /></Protected>} />
    <Route path='schedule/interview' element={<Protected isAuth={auth} role={role} allowedRoles={['company']}><ScheduleInterview /></Protected>} />
    <Route path='subscription' element={<Protected isAuth={auth} role={role} allowedRoles={['company']}><Subscription /></Protected>} />
    <Route path='profile' element={<Protected isAuth={auth} role={role} allowedRoles={['company']}><Profile /></Protected>} />
    <Route path='interviews' element={<Protected isAuth={auth} role={role} allowedRoles={['company']}><Interviews /></Protected>} />
    <Route path='blogs' element={<Protected isAuth={auth} role={role} allowedRoles={['company']}><PostBlog /></Protected>} />
    {/* <Route path='subscribe' element={<Protected isAuth={auth} role={role} allowedRoles={['company']}><Profile /></Protected>} /> */}
</Route>


<Route path='/admin' element={<Protected isAuth={auth} role={role} allowedRoles={['admin']}><AdminLayout /></Protected>}>
  <Route path='dashboard' element={<Protected isAuth={auth} role={role} allowedRoles={['admin']}><AdminDashboard /></Protected>} />
  <Route path='companies' element={<Protected isAuth={auth} role={role} allowedRoles={['admin']}><Companies /></Protected>} />
  <Route path='jobs' element={<Protected isAuth={auth} role={role} allowedRoles={['admin']}><AdminJobs /></Protected>} />
  <Route path='users' element={<Protected isAuth={auth} role={role} allowedRoles={['admin']}><Users /></Protected>} />
  <Route path='profile' element={<Protected isAuth={auth} role={role} allowedRoles={['admin']}><AdminProfile /></Protected>} />
</Route>



          <Route path='*' element={<Error />} />

        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
