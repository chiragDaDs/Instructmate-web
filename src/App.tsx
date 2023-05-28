import './App.css'
import {useState} from 'react';
// import CalenderContextWrapper from './UI/calander/CalenderContextWrapper';
// import CalenderHeader from './UI/calander/CalenderHeader';
// import Calender from './UI/calander/Calender';
// import { useEffect } from 'react';
import CourseCardGrid from './UI/Course/CourseCardGrid';
import { UserHeader } from './UI/UserHeader';


const courseList =[
  {
    "title": "Introduction to Algorithms",
    "description": "Learn the fundamental algorithms and techniques used to solve problems in computer science.",
    "instructor": {
      "name": "John Smith",
      "profileImage": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "studentCount": 127
  },
  {
    "title": "Data Structures and Algorithms",
    "description": "Learn about data structures such as arrays, linked lists, and trees, and algorithms such as sorting and searching.",
    "instructor": {
      "name": "Jane Doe",
      "profileImage": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    "studentCount": 256
  },
  {
    "title": "Artificial Intelligence",
    "description": "Explore the principles and techniques of artificial intelligence, including machine learning, natural language processing, and robotics.",
    "instructor": {
      "name": "David Lee",
      "profileImage": "https://randomuser.me/api/portraits/men/3.jpg"
    },
    "studentCount": 95
  },
  {
    "title": "Web Development",
    "description": "Build dynamic web applications using HTML, CSS, JavaScript, and popular frameworks such as React and Node.js.",
    "instructor": {
      "name": "Lisa Johnson",
      "profileImage": "https://randomuser.me/api/portraits/women/4.jpg"
    },
    "studentCount": 201
  },
  {
    "title": "Mobile App Development",
    "description": "Create native mobile applications for iOS and Android using Swift, Kotlin, and other popular languages and frameworks.",
    "instructor": {
      "name": "Michael Wong",
      "profileImage": "https://randomuser.me/api/portraits/men/5.jpg"
    },
    "studentCount": 59
  },
  {
    "title": "Game Development",
    "description": "Learn the fundamentals of game design and development, including game engines, physics engines, and game programming languages.",
    "instructor": {
      "name": "Karen Lee",
      "profileImage": "https://randomuser.me/api/portraits/women/6.jpg"
    },
    "studentCount": 178
  },
  {
    "title": "Database Management",
    "description": "Understand the concepts and principles of database management systems, including SQL, NoSQL, and data warehousing.",
    "instructor": {
      "name": "Mark Chen",
      "profileImage": "https://randomuser.me/api/portraits/men/7.jpg"
    },
    "studentCount": 234
  },
  {
    "title": "Introduction to Algorithms",
    "description": "Learn the fundamental algorithms and techniques used to solve problems in computer science.",
    "instructor": {
      "name": "John Smith",
      "profileImage": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "studentCount": 127
  },
  {
    "title": "Data Structures and Algorithms",
    "description": "Learn about data structures such as arrays, linked lists, and trees, and algorithms such as sorting and searching.",
    "instructor": {
      "name": "Jane Doe",
      "profileImage": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    "studentCount": 256
  },
  {
    "title": "Artificial Intelligence",
    "description": "Explore the principles and techniques of artificial intelligence, including machine learning, natural language processing, and robotics.",
    "instructor": {
      "name": "David Lee",
      "profileImage": "https://randomuser.me/api/portraits/men/3.jpg"
    },
    "studentCount": 95
  },
  {
    "title": "Web Development",
    "description": "Build dynamic web applications using HTML, CSS, JavaScript, and popular frameworks such as React and Node.js.",
    "instructor": {
      "name": "Lisa Johnson",
      "profileImage": "https://randomuser.me/api/portraits/women/4.jpg"
    },
    "studentCount": 201
  },
  {
    "title": "Mobile App Development",
    "description": "Create native mobile applications for iOS and Android using Swift, Kotlin, and other popular languages and frameworks.",
    "instructor": {
      "name": "Michael Wong",
      "profileImage": "https://randomuser.me/api/portraits/men/5.jpg"
    },
    "studentCount": 59
  },
  {
    "title": "Game Development",
    "description": "Learn the fundamentals of game design and development, including game engines, physics engines, and game programming languages.",
    "instructor": {
      "name": "Karen Lee",
      "profileImage": "https://randomuser.me/api/portraits/women/6.jpg"
    },
    "studentCount": 178
  },
  {
    "title": "Database Management",
    "description": "Understand the concepts and principles of database management systems, including SQL, NoSQL, and data warehousing.",
    "instructor": {
      "name": "Mark Chen",
      "profileImage": "https://randomuser.me/api/portraits/men/7.jpg"
    },
    "studentCount": 234
  }
]
const Headerdata = {
  user: {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  tabs: ["Current courses", "Teaching Courses", "Archived courses", "Course Calendar"]
};

const student = courseList[2];

function App() {
  const [checked, setChecked] = useState(false);
  const options = [
        "fsgfs",
      "Ms Dhoni"
    ];

  const handleChange = () => {
    setChecked(prevState => !prevState);
  };
  return (
    <>
    <UserHeader user={Headerdata.user} tabs={Headerdata.tabs}></UserHeader>
    <br/><br/>
    <br/><br/>
    <CourseCardGrid courses={courseList}></CourseCardGrid>
    </>
  );
}

export default App;



  