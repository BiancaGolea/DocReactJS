package com.licenta.SpringBoot.Repositorys.ProgramariRepository;

import java.util.Date;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Models.ProgramariModel.ProgramariModel;

public interface ProgramariRepo extends CrudRepository<ProgramariModel, Long>{
	ProgramariModel findByDataAndMedic(Date data, MediciModel programare);
	List<ProgramariModel> findByMedic(MediciModel medic);

}
