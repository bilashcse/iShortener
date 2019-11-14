/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : iShortner

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 14/11/2019 12:28:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for url_map
-- ----------------------------
DROP TABLE IF EXISTS `url_map`;
CREATE TABLE `url_map` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `HASH_ID` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  `URL` varchar(1024) COLLATE utf8mb4_general_ci NOT NULL,
  `CREATED_AT` datetime NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `HASH_ID` (`HASH_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

SET FOREIGN_KEY_CHECKS = 1;
