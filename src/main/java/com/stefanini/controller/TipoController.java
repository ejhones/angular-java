package com.stefanini.controller;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.stefanini.model.Denunciante;
import com.stefanini.model.Tipo;
import com.stefanini.service.DenuncianteService;
import com.stefanini.service.TipoService;

@Path("/tipo")
@RequestScoped
public class TipoController {

	@Inject
	private TipoService tipoService;
	
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Tipo> get() {
        return tipoService.listar();
    }
    
    @DELETE()
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String excluir(@PathParam("id") Integer id) {
    	tipoService.excluir(id);
    	return "Denunciante excluído com sucesso!";
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public String salvar(Tipo tipo) {
    	tipoService.salvar(tipo);
    	return "Denunciante cadastrado com sucesso!";
    }
}
