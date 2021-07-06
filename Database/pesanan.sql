-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2021 at 05:27 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pesantiket`
--

-- --------------------------------------------------------

--
-- Table structure for table `pesanan`
--

CREATE TABLE `pesanan` (
  `nama` varchar(80) NOT NULL,
  `telpon` varchar(13) NOT NULL,
  `email` varchar(320) NOT NULL,
  `tanggal` date NOT NULL,
  `utama` int(11) NOT NULL,
  `sepeda` int(11) NOT NULL,
  `berkuda` int(11) NOT NULL,
  `perahu` int(11) NOT NULL,
  `flyingfox` int(11) NOT NULL,
  `skybike` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pesanan`
--

INSERT INTO `pesanan` (`nama`, `telpon`, `email`, `tanggal`, `utama`, `sepeda`, `berkuda`, `perahu`, `flyingfox`, `skybike`) VALUES
('Celine Margaretha Pranoto', '3456', 'xiulinpao@gmail.com', '2021-06-15', 1, 1, 1, 1, 1, 1),
('jono', '123456789', 'jono@gmail.com', '2021-06-15', 2, 1, 2, 0, 0, 0),
('jono', '123456789', 'jono@gmail.com', '2021-06-15', 2, 1, 2, 0, 0, 0),
('Celine Margaretha Pranoto', '1231113312', 'vokasi@umm.ac.id', '2021-06-15', 1, 0, 0, 0, 0, 5),
('Celine Margaretha Pranoto', '1231113312', 'acer.indonesia.mkt3@gmail.com', '2021-06-16', 1, 0, 0, 0, 0, 0),
('Celine Margaretha Pranoto', '1231113312', 'acer.indonesia.mkt3@gmail.com', '2021-06-16', 1, 0, 0, 0, 0, 0),
('ohayo', '1231113312', 'acer.indonesia.mkt3@gmail.com', '2021-06-16', 1, 0, 2, 0, 0, 0),
('2', '1231113312', 'xiulinpao@gmail.com', '2021-06-16', 1, 0, 0, 0, 0, 0),
('2', '1231113312', 'xiulinpao@gmail.com', '2021-06-16', 1, 0, 0, 0, 0, 0),
('2', '1231113312', 'xiulinpao@gmail.com', '2021-06-16', 1, 0, 0, 0, 0, 0),
('ohayo', '1231113312', 'vokasi@umm.ac.id', '2021-06-16', 1, 0, 0, 0, 0, 0),
('ohayo', '1231113312', 'vokasi@umm.ac.id', '2021-06-16', 1, 0, 0, 0, 0, 0),
('2', '1231113312', 'xiulinpao@gmail.com', '2021-06-16', 1, 0, 0, 0, 0, 0),
('2', '1231113312', 'xiulinpao@gmail.com', '2021-06-16', 1, 0, 0, 0, 0, 0),
('Celine Margaretha Pranoto', '1231113312', 'xiulinpao@gmail.com', '2021-06-16', 1, 0, 0, 0, 0, 2),
('Celine Margaretha Pranoto', '1231113312', 'xiulinpao@gmail.com', '2021-06-16', 1, 1, 1, 0, 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
