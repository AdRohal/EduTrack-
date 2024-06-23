# EduTrack

## Introduction :

EduTrack is an educational management application designed to streamline the management of educational institutions. It provides functionalities for managing classes, teachers, students, and other administrative tasks.

## Features :

- User Authentication: Secure login system for administrators.
- Class Management: Easily manage class information.
- Teacher Management: Add, update, and remove teacher information.
- Student Management: Add, update, and remove student information.
- Settings: Configure application settings and perform backups.
- About Page: Information about the application and its developers.

## Installation :

To install and run EduTrack, follow these steps:

1. **Download and Install XAMPP:**
   - Download and install XAMPP from [Apache Friends](https://www.apachefriends.org/index.html).
   - Start Apache and MySQL from the XAMPP control panel.

2. **Prepare the Database with MySQL:**
   - Open phpMyAdmin from the XAMPP control panel.
   - Create a new database named `EduTrack`.
   - Run the following SQL scripts to create the necessary tables:

```sql
CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(18) DEFAULT NULL,
  `Password` varchar(18) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `employee_registry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `p_pic` varchar(255) DEFAULT NULL,
  `f_name` varchar(20) DEFAULT NULL,
  `m_name` varchar(30) DEFAULT NULL,
  `l_name` varchar(20) DEFAULT NULL,
  `gender` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `b_date` date DEFAULT NULL,
  `nationality` varchar(50) DEFAULT NULL,
  `cin` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `cin_front_copy` varchar(255) DEFAULT NULL,
  `cin_back_copy` varchar(255) DEFAULT NULL,
  `organization` varchar(50) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `j_date` date DEFAULT NULL,
  `contract_start` date DEFAULT NULL,
  `contract_end` date DEFAULT NULL,
  `contract_copy` varchar(255) DEFAULT NULL,
  `resume_copy` varchar(255) DEFAULT NULL,
  `high_degree` varchar(50) DEFAULT NULL,
  `year_graduation` int(11) DEFAULT NULL,
  `university` varchar(50) DEFAULT NULL,
  `specialization` varchar(50) DEFAULT NULL,
  `diploma_copy` varchar(255) DEFAULT NULL,
  `salary` int(20) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `teacher_registry` (
  `TeacherID` int(11) NOT NULL AUTO_INCREMENT,
  `p_pic` varchar(255) DEFAULT NULL,
  `f_name` varchar(50) DEFAULT NULL,
  `m_name` varchar(50) DEFAULT NULL,
  `l_name` varchar(50) DEFAULT NULL,
  `gender` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `b_date` date DEFAULT NULL,
  `nationality` varchar(50) DEFAULT NULL,
  `cin` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `cin_front_copy` varchar(255) DEFAULT NULL,
  `cin_back_copy` varchar(255) DEFAULT NULL,
  `organization` varchar(50) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `j_date` date DEFAULT NULL,
  `contract_start` date DEFAULT NULL,
  `contract_end` date DEFAULT NULL,
  `contract_copy` varchar(255) DEFAULT NULL,
  `resume_copy` varchar(255) DEFAULT NULL,
  `high_degree` varchar(50) DEFAULT NULL,
  `year_graduation` int(11) DEFAULT NULL,
  `university` varchar(50) DEFAULT NULL,
  `specialization` varchar(50) DEFAULT NULL,
  `diploma_copy` varchar(255) DEFAULT NULL,
  `salary` int(20) DEFAULT NULL,
  `module` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`TeacherID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `student_registry` (
  `StudentID` int(11) NOT NULL AUTO_INCREMENT,
  `p_pic` varchar(255) DEFAULT NULL,
  `f_name` varchar(50) DEFAULT NULL,
  `m_name` varchar(50) DEFAULT NULL,
  `l_name` varchar(50) DEFAULT NULL,
  `gender` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `b_date` date DEFAULT NULL,
  `nationality` varchar(50) DEFAULT NULL,
  `cin` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `cin_front_copy` varchar(255) DEFAULT NULL,
  `cin_back_copy` varchar(255) DEFAULT NULL,
  `school_name` varchar(70) DEFAULT NULL,
  `j_date` date DEFAULT NULL,
  `major` varchar(50) DEFAULT NULL,
  `high_degree` varchar(50) DEFAULT NULL,
  `year_graduation` int(11) DEFAULT NULL,
  `university` varchar(50) DEFAULT NULL,
  `specialization` varchar(50) DEFAULT NULL,
  `diploma_copy` varchar(255) DEFAULT NULL,
  `emerg_contact_f_name` varchar(50) DEFAULT NULL,
  `emerg_contact_m_name` varchar(50) DEFAULT NULL,
  `emerg_contact_l_name` varchar(50) DEFAULT NULL,
  `emerg_contact_relation` varchar(50) DEFAULT NULL,
  `emerg_contact_phone` varchar(20) DEFAULT NULL,
  `emerg_contact_cin` varchar(15) DEFAULT NULL,
  `emerg_contact_cin_f_copy` varchar(255) DEFAULT NULL,
  `emerg_contact_cin_b_copy` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`StudentID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `classes` (
  `ClassID` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` varchar(100) DEFAULT NULL,
  `major` varchar(50) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `CreatedDate` date DEFAULT NULL,
  PRIMARY KEY (`ClassID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `studentclasses` (
  `StudentClassID` int(11) NOT NULL AUTO_INCREMENT,
  `StudentID` int(11) DEFAULT NULL,
  `ClassID` int(11) DEFAULT NULL,
  PRIMARY KEY (`StudentClassID`),
  UNIQUE KEY `StudentID` (`StudentID`),
  KEY `ClassID` (`ClassID`),
  CONSTRAINT `studentclasses_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `student_registry` (`StudentID`),
  CONSTRAINT `studentclasses_ibfk_2` FOREIGN KEY (`ClassID`) REFERENCES `classes` (`ClassID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `teacherclasses` (
  `TeacherClassID` int(11) NOT NULL AUTO_INCREMENT,
  `TeacherID` int(11) DEFAULT NULL,
  `ClassID` int(11) DEFAULT NULL,
  PRIMARY KEY (`TeacherClassID`),
  KEY `TeacherID` (`TeacherID`),
  KEY `ClassID` (`ClassID`),
  CONSTRAINT `teacherclasses_ibfk_1` FOREIGN KEY (`TeacherID`) REFERENCES `teacher_registry` (`TeacherID`),
  CONSTRAINT `teacherclasses_ibfk_2` FOREIGN KEY (`ClassID`) REFERENCES `classes` (`ClassID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
```

3. Run the installer and follow the on-screen instructions.

## Usage :

1. Launch the application.
2. Log in using your administrator credentials.
3. Navigate through the various sections using the menu.

## License :

This project is licensed under the MIT License. See the LICENSE.txt file for details.

## Acknowledgements :

EduTrack is supported by GitHub Student Pack and Expertus.ma.

## Contact :

For more information, visit [GitHub](https://github.com/AdRohal/EduTrack-) or contact Adam Rohal at Kradamrohal@hotmail.com .
