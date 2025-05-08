
import AdminDashboard from "./components/admin/AdminDashboard"
import HodDashboard from "./components/hod/HodDashboard"
import StudentDashboard from "./components/student/StudentDashboard"
import TeacherDashboard from "./components/teacher/TeacherDashboard"

import ThemeProvider from "./components/ThemeProvider"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* <AdminDashboard/> */}
        {/* <StudentDashboard /> */}
        {/* <HodDashboard/> */}
        <TeacherDashboard/>
      </div>
    </ThemeProvider>
  )
}

export default App