CREATE TABLE `tbl_ponto_visitacao` (
  `idlocal_visitacao` INT NOT NULL COMMENT 'Código do Local de Visitação relacionado',
  `idponto_visitacao` INT NOT NULL AUTO_INCREMENT COMMENT 'Código do Ponto de Visitação',
  `Nome` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Nome do Ponto de Visitação (Ex: Sala de Esculturas)',
  `Imagem` LONGBLOB COMMENT 'Arquivo de imagem do ponto de visitação',
  `Audio` LONGBLOB COMMENT 'Arquivo de áudio do ponto de visitação',
  `Texto` TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT 'Texto explicativo do Ponto de Visitação',
  PRIMARY KEY (`idponto_visitacao`),
  KEY `fk_tbl_ponto_visitacao_local` (`idlocal_visitacao`),
  CONSTRAINT `fk_tbl_ponto_visitacao_local` FOREIGN KEY (`idlocal_visitacao`) 
    REFERENCES `tbl_local_visitacao` (`idlocal_visitacao`) 
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabela que armazena informações dos pontos de visitação';
