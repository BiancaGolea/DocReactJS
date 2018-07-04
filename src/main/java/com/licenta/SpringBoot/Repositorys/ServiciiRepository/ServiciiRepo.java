package com.licenta.SpringBoot.Repositorys.ServiciiRepository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Models.ServiciiModel.ServiciiModel;

public interface ServiciiRepo extends CrudRepository<ServiciiModel, Long>{
	List<ServiciiModel> findByMedic(MediciModel medic);

}
