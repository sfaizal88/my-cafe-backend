-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/

--
-- Database: `MyCafe`
--
-- Create the database
CREATE DATABASE MyCafe;

-- Use the MyCafe database
USE MyCafe;
-- --------------------------------------------------------

--
-- Table structure for table `Cafes`
--

CREATE TABLE `Cafes` (
  `id` varchar(150) NOT NULL,
  `name` varchar(12) NOT NULL,
  `description` varchar(300) NOT NULL,
  `location` varchar(200) NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
);

-- --------------------------------------------------------

--
-- Table structure for table `Employees`
--

CREATE TABLE `Employees` (
  `id` varchar(9) NOT NULL,
  `name` varchar(12) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `phone_number` char(8) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `cafe_shop_id` varchar(150) DEFAULT NULL,
  `job_start_date` date NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL
);

--
-- Indexes for table `Cafes`
--
ALTER TABLE `Cafes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Employees`
--
ALTER TABLE `Employees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cafe_shops_id` (`cafe_shop_id`);


--
-- Constraints for table `Employees`
--
ALTER TABLE `Employees`
  ADD CONSTRAINT `fk_cafe_shops_id` FOREIGN KEY (`cafe_shop_id`) REFERENCES `Cafes` (`id`) ON DELETE CASCADE;