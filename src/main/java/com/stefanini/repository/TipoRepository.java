package com.stefanini.repository;

import java.util.List;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;

import com.stefanini.model.Denunciante;
import com.stefanini.model.Tipo;

@Dependent
public class TipoRepository {

	@Inject
	private EntityManager manager;

	public void salva(Tipo tipo) {
		if (tipo.getId() != null) {
			this.manager.merge(tipo);
		} else {
			this.manager.persist(tipo);
		}
	}
	
	public Tipo busca(Long id) {
		return this.manager.find(Tipo.class, id);
	}

	public List<Tipo> lista() {
		return this.manager.createQuery("select c from Tipo c", Tipo.class).getResultList();
	}

	public void excluir(Long id) {
		this.manager.remove(this.manager.find(Tipo.class, id));
	}
	
	@SuppressWarnings("unchecked")
	public List<Denunciante> consultar(Tipo tipo) {
		StringBuffer hql = new StringBuffer();

		hql.append("SELECT d FROM tipo d ");
		hql.append("WHERE 1=1 ");
		if (tipo.getDescricao() != null && !tipo.getDescricao().isEmpty()) {
			hql.append("AND d.descricao LIKE (:descricao) ");
		}
	
		Query query = this.manager.createQuery(hql.toString());
		
		if (tipo.getDescricao() != null && !tipo.getDescricao().isEmpty()) {
			query.setParameter("nome", "%"+tipo.getDescricao()+"%");
		}
		
		return (List<Denunciante>)query.getResultList();
	}
}
