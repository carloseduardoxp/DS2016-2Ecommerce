package br.edu.iftm.model.service;

import java.util.List;

import javax.validation.Valid;
import javax.validation.executable.ValidateOnExecution;

import br.edu.iftm.model.domain.Categoria;

public interface ICategoriaService {

	@ValidateOnExecution
	void salvar(@Valid Categoria categoria);

	void atualizar(Categoria categoria);

	void excluir(Integer codigo);
	
	List<Categoria> buscarTodos();
	
	public Categoria buscarPorId(Integer codigo);

}