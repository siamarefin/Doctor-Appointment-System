-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2024 at 06:13 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hms`
--

-- --------------------------------------------------------

--
-- Table structure for table `ambulance`
--

CREATE TABLE `ambulance` (
  `phone` varchar(11) NOT NULL,
  `drivername` varchar(100) DEFAULT NULL,
  `dutytime` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ambulance`
--

INSERT INTO `ambulance` (`phone`, `drivername`, `dutytime`) VALUES
('01623456789', 'Farida Parvin', '10:00:00'),
('01712345678', 'Aminul Islam', '08:00:00'),
('01812345678', 'Shirin Akter', '14:00:00'),
('01912345678', 'Rashidul Hasan', '20:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `doctor_id` int(11) DEFAULT NULL,
  `patient_id` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `time` time DEFAULT NULL,
  `description` text NOT NULL,
  `appointment_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`doctor_id`, `patient_id`, `date`, `time`, `description`, `appointment_id`) VALUES
(1, 1, '2024-09-17', '10:00:00', 'I have to checkup ', 1),
(2, 1, '2024-09-16', '10:00:00', ' emergency', 2),
(4, 1, '2024-09-18', '19:47:00', 'Urgent Test', 8),
(2, 1, '2024-09-04', '19:48:00', 'abc', 9),
(3, 1, '2024-09-04', '19:48:00', 'abc', 10),
(1, 3, '2024-09-17', '19:50:00', 'abc', 11),
(3, 1, '2024-09-12', '09:42:00', 'kgj,', 12),
(1, 7, '2024-09-18', '16:42:00', 'guklgl', 13),
(2, 1, '2024-09-19', '21:56:00', 'xyz', 14),
(2, 1, '2024-10-04', '22:05:00', 'my first appointment', 15);

-- --------------------------------------------------------

--
-- Table structure for table `availabletest`
--

CREATE TABLE `availabletest` (
  `test_id` int(11) NOT NULL,
  `test_name` varchar(255) NOT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `available_time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `availabletest`
--

INSERT INTO `availabletest` (`test_id`, `test_name`, `amount`, `available_time`) VALUES
(1, 'Blood Test', 50.00, '10:00:00'),
(2, 'Blood Test', 50.00, '10:00:00'),
(3, 'X-Ray', 75.25, '11:30:00'),
(4, 'CT Scan', 100.00, '14:00:00'),
(5, 'Ultrasound', 120.50, '09:45:00');

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `bill_id` int(11) NOT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `paymentstatus` varchar(50) DEFAULT NULL,
  `method` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`bill_id`, `patient_id`, `date`, `amount`, `description`, `paymentstatus`, `method`) VALUES
(1, 1, '2024-09-01', 100.50, 'Routine check-up', 'Paid', 'Credit Card'),
(2, 2, '2024-09-02', 200.75, 'Emergency visit', 'Pending', 'Cash');

-- --------------------------------------------------------

--
-- Table structure for table `cabin_room`
--

CREATE TABLE `cabin_room` (
  `cabin_room_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `room_number` varchar(50) NOT NULL,
  `assigned_nurse` int(11) DEFAULT NULL,
  `supervising_doctor` int(11) DEFAULT NULL,
  `case_summary` text DEFAULT NULL,
  `bill` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cabin_room`
--

INSERT INTO `cabin_room` (`cabin_room_id`, `name`, `room_number`, `assigned_nurse`, `supervising_doctor`, `case_summary`, `bill`) VALUES
(1, 'Room A1', '101', 1, 2, 'Patient in stable condition, requires daily monitoring.', 1100),
(2, 'Room B2', '202', 2, 3, 'Patient undergoing rehabilitation, needs physical therapy.', 2000),
(3, 'Room C3', '303', 3, 4, 'Patient recovering from surgery, follow-up required.', 3000);

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `doctor_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `department` varchar(100) DEFAULT NULL,
  `qualification` varchar(100) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `specialist` varchar(100) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`doctor_id`, `name`, `department`, `qualification`, `age`, `gender`, `specialist`, `phone`, `password`) VALUES
(1, 'Dr. Sarah Williams', 'Pediatrics', 'MD, MCH', 42, 'Female', 'Child Care Specialist', '5552345678', '12345'),
(2, 'Dr. Michael Lee', 'Orthopedics', 'MS, MD', 50, 'Male', 'Bone and Joint Specialist', '5557654321', '12345'),
(3, 'Dr. Emily Brown', 'Neurology', 'MD', 38, 'Female', 'Brain and Nervous System', '5559876543', '12345'),
(4, 'Dr. John Smith', 'Cardiology', 'MD, PhD', 45, 'Male', 'Heart Specialist', '01844902338', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `emergency_contact`
--

CREATE TABLE `emergency_contact` (
  `name` varchar(100) DEFAULT NULL,
  `department` varchar(100) DEFAULT NULL,
  `phone` varchar(15) NOT NULL,
  `dutytime` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `emergency_contact`
--

INSERT INTO `emergency_contact` (`name`, `department`, `phone`, `dutytime`) VALUES
('David Brown', 'General Ward', '5551122', '20:00:00'),
('Alice Johnson', 'Nursing', '5551234', '08:00:00'),
('Bob Smith', 'Emergency', '5555678', '16:00:00'),
('Carol Lee', 'Pediatrics', '5559101', '12:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `general_ward`
--

CREATE TABLE `general_ward` (
  `ward_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `bed_number` varchar(50) NOT NULL,
  `assigned_nurse` int(11) DEFAULT NULL,
  `supervising_doctor` int(11) DEFAULT NULL,
  `case_summary` text DEFAULT NULL,
  `bill` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `general_ward`
--

INSERT INTO `general_ward` (`ward_id`, `name`, `bed_number`, `assigned_nurse`, `supervising_doctor`, `case_summary`, `bill`) VALUES
(1, 'Ward A', 'B001', 1, 2, 'Patient recovering from a mild infection.', 1000),
(2, 'Ward B', 'B002', 2, 3, 'Patient undergoing routine observation.', 2000),
(3, 'Ward C', 'B003', 3, 4, 'Patient in stable condition after surgery.', 3000);

-- --------------------------------------------------------

--
-- Table structure for table `nurse`
--

CREATE TABLE `nurse` (
  `nurse_id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `allocation` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nurse`
--

INSERT INTO `nurse` (`nurse_id`, `name`, `gender`, `allocation`, `address`, `phone`) VALUES
(1, 'Alice Johnson', 'Female', 'ICU', '123 Elm Street, Springfield', '555-1234'),
(2, 'Bob Smith', 'Male', 'Emergency', '456 Oak Avenue, Springfield', '555-5678'),
(3, 'Carol Lee', 'Female', 'Pediatrics', '789 Pine Road, Springfield', '555-9101'),
(4, 'David Brown', 'Male', 'General Ward', '101 Maple Lane, Springfield', '555-1122');

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `patient_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` int(11) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `report_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`patient_id`, `name`, `phone`, `age`, `gender`, `password`, `report_id`) VALUES
(1, 'Robin', 1844902338, 30, 'male', '$2b$10$SqPfBvABIXv2513qyxMGHOTR8ExmiSAEJqa/FNrzu1/3wLM65NsHC', NULL),
(2, 'RobinHood', 1800000000, 30, NULL, '$2b$10$HWJG5HPPu7uALUyB5tKV4.VY.CW1TkTzok/ytmXaNjdP41PcjKuTy', NULL),
(3, 'Rakib', 1900000000, 20, NULL, '$2b$10$e3mXBNeVyg5J5TOz4oRiOeTuZZwQYtGv4u1db2Gus2BVelIzZSsk6', NULL),
(4, 'sakib', 1200000000, 30, NULL, '$2b$10$Y.Im61NoCo52dpKMKION9uXuSuZq8McWtClIFfFqDUpMKYmlnXINW', NULL),
(5, 'Rakat ', 1718551111, 35, NULL, '$2b$10$65ueIcGl2iozWVIv.Mdq.OtKULeE3u5fVSi31i8BZFWx9l0Eer7Pa', NULL),
(6, 'Sifat', 1718552222, 20, NULL, '$2b$10$z7ptozE85bp2PhPrspYNtOuHshF7VoG5AlbFmLSTL02uU5nSMZTqO', NULL),
(7, 'Shanto', 1844902000, 10, NULL, '$2b$10$.Mj/HKAHh05.Up.uNkbHauDzBg2hevlFYpo7F/AoKvdoXnuMWJzYm', NULL),
(8, 'MDRobin ', 1844902222, 10, NULL, '$2b$10$tyX2LdK323Mug0E8SDPkpeIjMZdZ7PI0wsXeUTcf4peUJK1vRWO4G', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `previous_history`
--

CREATE TABLE `previous_history` (
  `history_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `date_of_record` date NOT NULL,
  `treatment_given` text DEFAULT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `previous_medicine` text DEFAULT NULL,
  `case_summary` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `previous_history`
--

INSERT INTO `previous_history` (`history_id`, `patient_id`, `date_of_record`, `treatment_given`, `doctor_id`, `previous_medicine`, `case_summary`) VALUES
(0, 1, '2024-08-15', 'Antibiotic treatment', 1, 'Penicillin', 'Patient recovering well.'),
(0, 2, '2024-08-16', 'Physical therapy', 2, 'Ibuprofen', 'Patient showing improvement.');

-- --------------------------------------------------------

--
-- Table structure for table `testreport`
--

CREATE TABLE `testreport` (
  `report_id` int(11) NOT NULL,
  `test_name` varchar(100) DEFAULT NULL,
  `result` text DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testreport`
--

INSERT INTO `testreport` (`report_id`, `test_name`, `result`, `amount`, `comment`, `patient_id`) VALUES
(1, 'Blood Test', 'Hemoglobin: 14.5 g/dL, RBC: 4.7 million/uL', 50.00, 'Normal levels', 1),
(2, 'X-Ray', 'Fracture detected in the left arm', 150.00, 'Immediate care recommended', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ambulance`
--
ALTER TABLE `ambulance`
  ADD PRIMARY KEY (`phone`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`appointment_id`),
  ADD KEY `D_ID` (`doctor_id`),
  ADD KEY `fk_patient_id` (`patient_id`);

--
-- Indexes for table `availabletest`
--
ALTER TABLE `availabletest`
  ADD PRIMARY KEY (`test_id`);

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`bill_id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `cabin_room`
--
ALTER TABLE `cabin_room`
  ADD PRIMARY KEY (`cabin_room_id`),
  ADD KEY `assigned_nurse` (`assigned_nurse`),
  ADD KEY `supervising_doctor` (`supervising_doctor`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`doctor_id`);

--
-- Indexes for table `emergency_contact`
--
ALTER TABLE `emergency_contact`
  ADD PRIMARY KEY (`phone`);

--
-- Indexes for table `general_ward`
--
ALTER TABLE `general_ward`
  ADD PRIMARY KEY (`ward_id`),
  ADD KEY `assigned_nurse` (`assigned_nurse`),
  ADD KEY `supervising_doctor` (`supervising_doctor`);

--
-- Indexes for table `nurse`
--
ALTER TABLE `nurse`
  ADD PRIMARY KEY (`nurse_id`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`patient_id`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indexes for table `previous_history`
--
ALTER TABLE `previous_history`
  ADD PRIMARY KEY (`patient_id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indexes for table `testreport`
--
ALTER TABLE `testreport`
  ADD PRIMARY KEY (`report_id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `appointment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `availabletest`
--
ALTER TABLE `availabletest`
  MODIFY `test_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bill`
  MODIFY `bill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cabin_room`
--
ALTER TABLE `cabin_room`
  MODIFY `cabin_room_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `doctor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `general_ward`
--
ALTER TABLE `general_ward`
  MODIFY `ward_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `nurse`
--
ALTER TABLE `nurse`
  MODIFY `nurse_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `patient_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `testreport`
--
ALTER TABLE `testreport`
  MODIFY `report_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`),
  ADD CONSTRAINT `fk_patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`);

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`);

--
-- Constraints for table `cabin_room`
--
ALTER TABLE `cabin_room`
  ADD CONSTRAINT `cabin_room_ibfk_1` FOREIGN KEY (`assigned_nurse`) REFERENCES `nurse` (`nurse_id`),
  ADD CONSTRAINT `cabin_room_ibfk_2` FOREIGN KEY (`supervising_doctor`) REFERENCES `doctor` (`doctor_id`);

--
-- Constraints for table `general_ward`
--
ALTER TABLE `general_ward`
  ADD CONSTRAINT `general_ward_ibfk_1` FOREIGN KEY (`assigned_nurse`) REFERENCES `nurse` (`nurse_id`),
  ADD CONSTRAINT `general_ward_ibfk_2` FOREIGN KEY (`supervising_doctor`) REFERENCES `doctor` (`doctor_id`);

--
-- Constraints for table `previous_history`
--
ALTER TABLE `previous_history`
  ADD CONSTRAINT `previous_history_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`),
  ADD CONSTRAINT `previous_history_ibfk_2` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`);

--
-- Constraints for table `testreport`
--
ALTER TABLE `testreport`
  ADD CONSTRAINT `testreport_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`patient_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
