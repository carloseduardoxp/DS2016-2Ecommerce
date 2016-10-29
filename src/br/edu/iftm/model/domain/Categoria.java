package br.edu.iftm.model.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
@Table(name="TB_CATEGORIA")
public class Categoria implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="CD_CATEGORIA")
	private Integer codigo;
	
	@NotNull(message="Nome da categoria não pode ser vazia")
	@Size(min=3,max=100,message="Nome da categoria precisa ter entre {min} e {max} caracteres")
	@Column(name="NM_CATEGORIA")
	private String nome;

	public Categoria() {
		super();
	}
	
	public Categoria(Integer id) {
		this.codigo = id;
	}

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	

}
