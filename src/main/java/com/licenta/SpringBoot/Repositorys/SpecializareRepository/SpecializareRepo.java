package com.licenta.SpringBoot.Repositorys.SpecializareRepository;

import org.springframework.data.repository.CrudRepository;

import com.licenta.SpringBoot.Models.SpecializareModel.SpecializareModel;

public interface SpecializareRepo extends CrudRepository<SpecializareModel, Long>{
	SpecializareModel findByDenumireSpecializare(String denumireSpecializare);
	

}
