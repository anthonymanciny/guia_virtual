
CREATE TRIGGER `prevent_delete_local` 
BEFORE DELETE ON `tbl_local_visitacao`
FOR EACH ROW
BEGIN
  -- Verifica se existem pontos de visitação vinculados ao local
  IF EXISTS (SELECT 1 FROM `tbl_ponto_visitacao` WHERE `idlocal_visitacao` = OLD.`idlocal_visitacao`) THEN
    SIGNAL SQLSTATE '45000' 
    SET MESSAGE_TEXT = 'Não é possível excluir o local: Existem pontos de visitação associados.';
  END IF;
END;
