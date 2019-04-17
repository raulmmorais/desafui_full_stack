package desafio_full_stack.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import desafio_full_stack.dao.TarefaRepository;
import desafio_full_stack.entity.Tarefa;

@RestController
public class TarefasController {
	
	@Autowired
	TarefaRepository repository;

	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/todo-list", method = RequestMethod.GET)
	public List<Tarefa> listaTarefas(){
		return repository.findAll();
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/todo-list/{id}", method = RequestMethod.GET)
	public Optional<Tarefa> obterTarefa(@PathVariable String id){
		return repository.findById(id);
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/todo-list", method = RequestMethod.POST)
	public Tarefa salva(@RequestBody Tarefa tarefa) {
		System.out.println(tarefa.getTitulo());
		return repository.save(tarefa);
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/todo-list", method = RequestMethod.PUT)
	public Tarefa edita (@RequestBody Tarefa tarefa) {
		return repository.save(tarefa);
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/todo-list/{id}", method = RequestMethod.DELETE)
	public void apagarTarefa(@PathVariable String id) {
		System.out.println(id);
		repository.deleteById(id);
	}
}
