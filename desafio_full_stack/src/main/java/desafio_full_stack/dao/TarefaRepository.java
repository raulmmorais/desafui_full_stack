package desafio_full_stack.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import desafio_full_stack.entity.Tarefa;

public interface TarefaRepository extends MongoRepository<Tarefa, String> {

	
}
