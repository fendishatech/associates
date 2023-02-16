-- phpMyAdmin SQL Dump

-- version 5.2.0

-- https://www.phpmyadmin.net/

--

-- Host: 127.0.0.1

-- Generation Time: Feb 16, 2023 at 07:13 AM

-- Server version: 10.4.24-MariaDB

-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */

;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */

;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */

;

/*!40101 SET NAMES utf8mb4 */

;

--

-- Database: `az_associates`

--

-- CREATE DATABASE IF NOT EXISTS `az_associates` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

-- USE `az_associates`;

-- --------------------------------------------------------

--

-- Table structure for table `authors`

--

CREATE TABLE
    `authors` (
        `id` int(11) NOT NULL,
        `firstName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `lastName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `jobPosition` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
        `updatedAt` datetime(3) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--

-- Dumping data for table `authors`

--

INSERT INTO
    `authors` (
        `id`,
        `firstName`,
        `lastName`,
        `email`,
        `title`,
        `jobPosition`,
        `createdAt`,
        `updatedAt`
    )
VALUES (
        1,
        'Kidus',
        'Taye',
        'kidus@gmail.com',
        'Prof',
        'Full-stack Developer',
        '2023-02-15 15:12:26.870',
        '2023-02-15 15:18:46.650'
    ), (
        4,
        'Kidus',
        'Taye',
        'kidus2@gmail.com',
        'Dr.',
        'Fullstack Developer',
        '2023-02-15 15:23:07.292',
        '2023-02-15 15:23:07.292'
    );

-- --------------------------------------------------------

--

-- Table structure for table `blogs`

--

CREATE TABLE
    `blogs` (
        `id` int(11) NOT NULL,
        `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `content` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
        `updatedAt` datetime(3) NOT NULL,
        `authorId` int(11) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- --------------------------------------------------------

--

-- Table structure for table `candidates`

--

CREATE TABLE
    `candidates` (
        `id` int(11) NOT NULL,
        `firstName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `lastName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `phoneNo` int(11) NOT NULL,
        `cvFile` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `edu_level` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `experience` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
        `updatedAt` datetime(3) NOT NULL,
        `jobId` int(11) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- --------------------------------------------------------

--

-- Table structure for table `experiences`

--

CREATE TABLE
    `experiences` (
        `id` int(11) NOT NULL,
        `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `content` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
        `updatedAt` datetime(3) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- --------------------------------------------------------

--

-- Table structure for table `jobs`

--

CREATE TABLE
    `jobs` (
        `id` int(11) NOT NULL,
        `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `level` enum(
            'UNDER_GRADUATE',
            'DEGREE',
            'MASTERS',
            'PHD'
        ) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DEGREE',
        `deadline` datetime(3) NOT NULL,
        `edu_level` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `experience` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `requirements` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
        `updatedAt` datetime(3) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

-- --------------------------------------------------------

--

-- Table structure for table `users`

--

CREATE TABLE
    `users` (
        `id` int(11) NOT NULL,
        `firstName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `lastName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
        `phoneNo` int(11) NOT NULL,
        `role` enum('USER', 'ADMIN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ADMIN',
        `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
        `updatedAt` datetime(3) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

--

-- Indexes for dumped tables

--

--

-- Indexes for table `authors`

--

ALTER TABLE `authors`
ADD PRIMARY KEY (`id`),
ADD
    UNIQUE KEY `authors_email_key` (`email`);

--

-- Indexes for table `blogs`

--

ALTER TABLE `blogs`
ADD PRIMARY KEY (`id`),
ADD
    UNIQUE KEY `blogs_title_key` (`title`),
ADD
    KEY `blogs_authorId_fkey` (`authorId`);

--

-- Indexes for table `candidates`

--

ALTER TABLE `candidates`
ADD PRIMARY KEY (`id`),
ADD
    UNIQUE KEY `candidates_email_key` (`email`),
ADD
    UNIQUE KEY `candidates_phoneNo_key` (`phoneNo`),
ADD
    KEY `candidates_jobId_fkey` (`jobId`);

--

-- Indexes for table `experiences`

--

ALTER TABLE `experiences`
ADD PRIMARY KEY (`id`),
ADD
    UNIQUE KEY `experiences_title_key` (`title`);

--

-- Indexes for table `jobs`

--

ALTER TABLE `jobs` ADD PRIMARY KEY (`id`);

--

-- Indexes for table `users`

--

ALTER TABLE `users`
ADD PRIMARY KEY (`id`),
ADD
    UNIQUE KEY `users_email_key` (`email`),
ADD
    UNIQUE KEY `users_phoneNo_key` (`phoneNo`);

--

-- AUTO_INCREMENT for dumped tables

--

--

-- AUTO_INCREMENT for table `authors`

--

ALTER TABLE
    `authors` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 5;

--

-- AUTO_INCREMENT for table `blogs`

--

ALTER TABLE `blogs` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--

-- AUTO_INCREMENT for table `candidates`

--

ALTER TABLE
    `candidates` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--

-- AUTO_INCREMENT for table `experiences`

--

ALTER TABLE
    `experiences` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--

-- AUTO_INCREMENT for table `jobs`

--

ALTER TABLE `jobs` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--

-- AUTO_INCREMENT for table `users`

--

ALTER TABLE `users` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--

-- Constraints for dumped tables

--

--

-- Constraints for table `blogs`

--

ALTER TABLE `blogs`
ADD
    CONSTRAINT `blogs_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `authors` (`id`) ON UPDATE CASCADE;

--

-- Constraints for table `candidates`

--

ALTER TABLE `candidates`
ADD
    CONSTRAINT `candidates_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `jobs` (`id`) ON UPDATE CASCADE;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */

;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */

;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */

;