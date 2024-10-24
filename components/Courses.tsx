import Link from 'next/link'

interface Course {
  id: string
  title: string
  description: string
  link: string
  level: string
}

interface CoursesProps {
  courses: Course[]
}

const Courses: React.FC<CoursesProps> = async ({ courses }) => {
  return (
    <div className="grid-1">
      {courses.map((course: Course) => (
        <div key={course.id} className="bg-blue-200 p-4 m-4 rounded-lg">
          <h2 className="text-lg font-bold">{course.title}</h2>
          <small>Level: {course.level}</small>
          <p className="mb-4">{course.description}</p>
          <Link
            href={course.link}
            className="py-2 px-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg rounded-lg-mb-4"
          >
            Go to Course
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Courses