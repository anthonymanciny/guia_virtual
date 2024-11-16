CREATE TABLE `tbl_local_visitacao` (
  `idlocal_visitacao` int NOT NULL AUTO_INCREMENT COMMENT 'Código do Local de Visitação',
  `Nome` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Nome do Local de Visitação (Ex: SENAC)',
  `Descricao` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Texto explicativo do Local de Visitação',
  PRIMARY KEY (`idlocal_visitacao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabela que armazena informações dos locais de visitação';
