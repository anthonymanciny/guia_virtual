CREATE TABLE `tbl_usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT COMMENT 'Identificador numério',
  `nomeUsuario` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `emailUsuario` varchar(30) NOT NULL COMMENT 'nome do usuario para acessar o sistema',
  `senhaUsuario` varchar(15) NOT NULL DEFAULT (_utf8mb4'banco1234') COMMENT 'senha do usuário para acessar o sistema',
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `tbl_usuario_UN` (`emailUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Define as pessoas que poderão utilizar o sistema';