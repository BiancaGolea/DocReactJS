package com.licenta.SpringBoot.Repositorys.ProgramRepository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Models.ProgramModel.ProgramModel;

public interface ProgramRepo extends CrudRepository<ProgramModel, Long>{
	List<ProgramModel> findByZiAndMedic(String zi,MediciModel medic );
}
