package com.licenta.SpringBoot.Repositorys.MediciRepository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.licenta.SpringBoot.Models.ApplicationUserModel.ApplicationUser;
import com.licenta.SpringBoot.Models.MediciModel.MediciModel;

public interface MediciRepo extends CrudRepository<MediciModel, Long>{
	MediciModel findByEmail(String email);
	List<MediciModel> findBySpecializare( String specializare);
	MediciModel findByApplicationUser(String applicationUser);
	
	
}
