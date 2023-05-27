import React from "react";
import CourseCard from "./CourseCard";

type Instructor = {
    name: string;
    profileImage: string;
  };

type Course = {
    id: number;
    title: string;
    description: string;
    instructor: Instructor;
    studentCount: number; 
  }

type Props = {
  courses: Course[];
};

const CourseCardGrid: React.FC<Props> = ({ courses }) => {
  return (
    <div className=" ml-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
    
          <CourseCard
            key={index + 1}
            ck = {index + 1}
            title={course.title}
            description={course.description}
            instructor={course.instructor}
            studentCount={course.studentCount}
          />
      ))}
</div>
  );
};

export default CourseCardGrid;


