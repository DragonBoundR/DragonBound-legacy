/*
MySQL Data Transfer
Source Host: localhost
Source Database: game
Target Host: localhost
Target Database: game
Date: 6/8/2020 4:27:28 AM
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for account_sessions
-- ----------------------------
DROP TABLE IF EXISTS `account_sessions`;
CREATE TABLE `account_sessions` (
  `session_id` varchar(120) NOT NULL,
  `expires_time` varchar(80) DEFAULT NULL,
  `data_acc` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(120) DEFAULT NULL,
  `Name` varchar(120) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `PinUser` int(5) NOT NULL,
  `Salt` varchar(10) DEFAULT NULL,
  `Session` varchar(45) DEFAULT NULL,
  `views` int(10) DEFAULT 0,
  `IsOnline` int(11) DEFAULT NULL,
  `Birthday` timestamp NULL DEFAULT NULL,
  `facebook_id` varchar(70) DEFAULT '0',
  `Username` varchar(50) DEFAULT NULL,
  `IP` varchar(45) NOT NULL DEFAULT '0.0.0.0',
  `no_win_bonus` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '{}',
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Username_UNIQUE` (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for banned
-- ----------------------------
DROP TABLE IF EXISTS `banned`;
CREATE TABLE `banned` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `razon` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `date` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `gm` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `gm_id` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for chat_reseller
-- ----------------------------
DROP TABLE IF EXISTS `chat_reseller`;
CREATE TABLE `chat_reseller` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `reseller_sms` varchar(150) CHARACTER SET utf8 NOT NULL,
  `date_sms` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for commands
-- ----------------------------
DROP TABLE IF EXISTS `commands`;
CREATE TABLE `commands` (
  `Id` int(10) NOT NULL AUTO_INCREMENT,
  `comando` varchar(10) CHARACTER SET utf8 NOT NULL,
  `gift` int(10) NOT NULL,
  `cash` varchar(10) CHARACTER SET utf8 NOT NULL,
  `text` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `gm` varchar(30) CHARACTER SET utf8 NOT NULL,
  `user` varchar(30) CHARACTER SET utf8 NOT NULL,
  `user_id` int(30) NOT NULL,
  `time` varchar(100) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for comment_post
-- ----------------------------
DROP TABLE IF EXISTS `comment_post`;
CREATE TABLE `comment_post` (
  `comment_id` int(10) NOT NULL AUTO_INCREMENT,
  `comment_user_de` int(10) NOT NULL,
  `comment_user_para` int(10) NOT NULL,
  `message_for` varchar(900) NOT NULL,
  `time_comment` varchar(50) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for event_game
-- ----------------------------
DROP TABLE IF EXISTS `event_game`;
CREATE TABLE `event_game` (
  `Server_Id` int(10) NOT NULL AUTO_INCREMENT,
  `historychat` varchar(300) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `date` bigint(100) NOT NULL,
  `time` int(50) NOT NULL,
  `tipo` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `server_tournament_state` int(5) NOT NULL,
  `holiday` int(10) NOT NULL,
  `server_check` int(10) NOT NULL,
  `first_important_ranks` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Server_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for event_log
-- ----------------------------
DROP TABLE IF EXISTS `event_log`;
CREATE TABLE `event_log` (
  `Id` int(11) NOT NULL,
  `Event1` bigint(50) DEFAULT 0,
  `Event2` bigint(50) DEFAULT 0,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for friends
-- ----------------------------
DROP TABLE IF EXISTS `friends`;
CREATE TABLE `friends` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_yo` int(11) NOT NULL,
  `id_amigo` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for guests
-- ----------------------------
DROP TABLE IF EXISTS `guests`;
CREATE TABLE `guests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_id` int(11) NOT NULL,
  `to_id` int(11) NOT NULL,
  `check_ip` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for guild
-- ----------------------------
DROP TABLE IF EXISTS `guild`;
CREATE TABLE `guild` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `points` int(10) NOT NULL,
  `members` int(100) NOT NULL,
  `rank` int(10) NOT NULL,
  `img` varchar(200) NOT NULL DEFAULT '/static/images/your-logo-here.png',
  `fondo` varchar(200) NOT NULL DEFAULT '/static/images/aqua_bg.jpg',
  `about` varchar(460) NOT NULL,
  `website` varchar(100) NOT NULL DEFAULT 'https://battlefunny.net',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for guild_coins
-- ----------------------------
DROP TABLE IF EXISTS `guild_coins`;
CREATE TABLE `guild_coins` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `guild_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `time_coin` varchar(30) CHARACTER SET utf8 NOT NULL,
  `date_coin` varchar(40) CHARACTER SET utf8 NOT NULL,
  `coin_img` varchar(32) CHARACTER SET utf8 NOT NULL DEFAULT '/static/images/guild_coin22.png',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for guild_member
-- ----------------------------
DROP TABLE IF EXISTS `guild_member`;
CREATE TABLE `guild_member` (
  `rowsec` int(10) NOT NULL AUTO_INCREMENT,
  `Id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Job` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`rowsec`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for info_tournament
-- ----------------------------
DROP TABLE IF EXISTS `info_tournament`;
CREATE TABLE `info_tournament` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `tournament_server` int(10) NOT NULL,
  `tournament_start_time` varchar(70) NOT NULL,
  `tournament_end_time` varchar(70) NOT NULL,
  `tournament_gifts_users` int(100) NOT NULL,
  `tournament_state_server` varchar(100) NOT NULL,
  `tournament_check` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for ip_user_banned
-- ----------------------------
DROP TABLE IF EXISTS `ip_user_banned`;
CREATE TABLE `ip_user_banned` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(20) NOT NULL,
  `razon` varchar(120) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `gm` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `IdGM` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for my_payments
-- ----------------------------
DROP TABLE IF EXISTS `my_payments`;
CREATE TABLE `my_payments` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `Name` varchar(60) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Date` int(30) NOT NULL,
  `cash` int(10) NOT NULL,
  `Info` varchar(60) CHARACTER SET utf8 NOT NULL,
  `Reseller` varchar(60) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for pin_code
-- ----------------------------
DROP TABLE IF EXISTS `pin_code`;
CREATE TABLE `pin_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pin` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `seller` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `gm` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `gm_id` int(10) NOT NULL,
  `used_by` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `rode` varchar(11) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `state` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `date_time` int(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for rankspecial
-- ----------------------------
DROP TABLE IF EXISTS `rankspecial`;
CREATE TABLE `rankspecial` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `IdAcc` int(11) NOT NULL,
  `game_id` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `rank` int(5) NOT NULL,
  `cash` int(11) NOT NULL,
  `time` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for relationship
-- ----------------------------
DROP TABLE IF EXISTS `relationship`;
CREATE TABLE `relationship` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `relationship_status` varchar(3) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT 's',
  `relationship_with_id` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for resets_rankings
-- ----------------------------
DROP TABLE IF EXISTS `resets_rankings`;
CREATE TABLE `resets_rankings` (
  `r` int(10) NOT NULL AUTO_INCREMENT,
  `last_reset_rankings` varchar(100) NOT NULL,
  `next_reset_rankings` varchar(100) NOT NULL,
  `time_reset` varchar(1000) NOT NULL,
  PRIMARY KEY (`r`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for screenshot_game
-- ----------------------------
DROP TABLE IF EXISTS `screenshot_game`;
CREATE TABLE `screenshot_game` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `screenshot_letters` varchar(20) NOT NULL,
  `partida_screenshot` varchar(2000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for user_avatar_equiped
-- ----------------------------
DROP TABLE IF EXISTS `user_avatar_equiped`;
CREATE TABLE `user_avatar_equiped` (
  `Id` int(11) NOT NULL,
  `head` int(11) DEFAULT NULL,
  `body` int(11) DEFAULT NULL,
  `eyes` int(11) DEFAULT NULL,
  `flag` int(11) DEFAULT NULL,
  `background` int(11) DEFAULT NULL,
  `foreground` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user_avatars
-- ----------------------------
DROP TABLE IF EXISTS `user_avatars`;
CREATE TABLE `user_avatars` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) DEFAULT NULL,
  `aId` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT 0,
  `expire` datetime DEFAULT NULL,
  `is_cash` int(2) DEFAULT 0,
  `is_gift` int(2) DEFAULT 0,
  `gift_sent_by` int(10) NOT NULL,
  `amount` int(11) DEFAULT 0,
  `expire_time` bigint(40) DEFAULT 0,
  `date_ava_time` bigint(50) NOT NULL,
  `remove_ava` int(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user_post
-- ----------------------------
DROP TABLE IF EXISTS `user_post`;
CREATE TABLE `user_post` (
  `post_id` int(10) NOT NULL AUTO_INCREMENT,
  `user_de` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `user_para` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `texto` varchar(900) COLLATE utf8_unicode_ci NOT NULL,
  `fecha` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `game_id` varchar(45) DEFAULT NULL,
  `rank` int(11) DEFAULT NULL,
  `gp` int(11) DEFAULT NULL,
  `gold` int(11) DEFAULT NULL,
  `cash` int(11) DEFAULT NULL,
  `gender` char(2) DEFAULT NULL,
  `unlock` int(11) DEFAULT NULL,
  `photo_url` varchar(200) DEFAULT 'https://image.prntscr.com/image/sC3pg5sKRny_PCbrJSZgcA.jpg',
  `name_changes` int(11) DEFAULT NULL,
  `power_user` int(11) DEFAULT NULL,
  `plus10gp` int(11) DEFAULT NULL,
  `mobile_fox` int(11) DEFAULT NULL,
  `country` varchar(15) DEFAULT NULL,
  `flowers` int(11) DEFAULT NULL,
  `map_pack` int(11) DEFAULT NULL,
  `megaphones` int(11) DEFAULT NULL,
  `is_muted` varchar(15) DEFAULT '0',
  `win` int(11) DEFAULT 0,
  `loss` int(11) DEFAULT 0,
  `gm` int(2) DEFAULT 0,
  `banned` int(5) NOT NULL,
  `prixw` int(11) NOT NULL,
  `probability` int(10) NOT NULL,
  `IdAcc` int(11) NOT NULL,
  `bg_url` varchar(200) DEFAULT 'https://image.prntscr.com/image/b1951ace8fbe48a383165b53955cee02.png',
  `IP` varchar(45) NOT NULL DEFAULT '0.0.0.0',
  `block_friend` int(2) NOT NULL,
  `CashCharger` int(11) NOT NULL,
  `ranking_semanal` int(10) NOT NULL,
  `lucky_egg_sec_left` varchar(500) DEFAULT '',
  `electrico` int(10) DEFAULT NULL,
  `lucky_egg` varchar(30) DEFAULT '0',
  PRIMARY KEY (`Id`),
  KEY `FKUserAcc_idx` (`IdAcc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `event_game` VALUES ('1', 'Eber', '1589120713608', '120', 'Evento', '1', '396', '1', '[1604229,756466,366647]');
INSERT INTO `info_tournament` VALUES ('1', '5', '0', '1587855600000', '0', '0', '0');
INSERT INTO `ip_user_banned` VALUES ('1', '190.42.88.35', 'Ninguna Específicamente', 'Computer', '0');
INSERT INTO `ip_user_banned` VALUES ('2', '200.121.230.20', 'Ninguna Específicamente', 'Computer', '0');
INSERT INTO `ip_user_banned` VALUES ('3', '200.8.145.186', 'Ninguna Específicamente', 'Computer', '0');
INSERT INTO `ip_user_banned` VALUES ('4', '181.64.91.50', 'Ninguna Específicamente', 'Computer', '0');
INSERT INTO `ip_user_banned` VALUES ('5', '179.6.220.6', 'Ninguna Específicamente', 'Computer', '0');
INSERT INTO `ip_user_banned` VALUES ('7', '190.79.140.86', 'Ninguna Específicamente', 'Noel', '6');
INSERT INTO `ip_user_banned` VALUES ('12', '190.42.109.18', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('13', '181.176.122.204', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('14', '179.6.220.6', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('16', '159.203.195.220', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('17', '185.180.221.152', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('18', '185.216.35.222', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('21', '45.162.229.80', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('22', '190.42.109.18', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('24', '190.232.109.150', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('26', '200.8.145.81', 'Ninguna Específicamente', 'Noel', '6');
INSERT INTO `ip_user_banned` VALUES ('28', '191.98.186.37', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('29', '181.64.223.244', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('30', '190.238.10.60', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('31', '132.251.3.21', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('32', '159.89.119.10', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('33', '159.89.9.195', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('34', '191.96.70.28', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('35', '198.15.118.150', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('36', '/ban', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('37', '190.105.239.108', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('38', '165.227.34.9', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('39', '138.68.142.82', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('40', '67.205.140.128', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('41', '181.64.223.43', 'Ninguna Específicamente', 'Noel', '6');
INSERT INTO `ip_user_banned` VALUES ('42', '190.236.180.24', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('43', '148.102.113.228', 'Ninguna Específicamente', 'Noel', '6');
INSERT INTO `ip_user_banned` VALUES ('44', '190.236.246.220', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('45', '190.238.100.176', 'Ninguna Específicamente', 'Eber', '1');
INSERT INTO `ip_user_banned` VALUES ('46', '209.45.62.156', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `ip_user_banned` VALUES ('47', '151.149.219.206', 'Ninguna Específicamente', 'Noel', '6');
INSERT INTO `ip_user_banned` VALUES ('48', '141.235.123.205', 'Ninguna Específicamente', 'Noel', '6');
INSERT INTO `ip_user_banned` VALUES ('49', '179.7.195.4', 'Ninguna Específicamente', 'Noel', '6');
INSERT INTO `ip_user_banned` VALUES ('50', '181.64.109.188', 'Ninguna Específicamente', 'Berny', '2');
INSERT INTO `resets_rankings` VALUES ('1', '1589136420214', '1589138220214', '30');
INSERT INTO `resets_rankings` VALUES ('8', '1588572205366', '1589176960413', '10080');
INSERT INTO `resets_rankings` VALUES ('24', '1588568590195', '1589173317133', '10080');
