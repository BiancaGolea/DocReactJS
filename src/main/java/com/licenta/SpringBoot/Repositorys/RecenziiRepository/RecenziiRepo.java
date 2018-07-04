package com.licenta.SpringBoot.Repositorys.RecenziiRepository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Models.RecenziiModel.RecenziiModel;

public interface RecenziiRepo extends CrudRepository<RecenziiModel, Long>{
	List<RecenziiModel> findByMedic(MediciModel medic);
}
