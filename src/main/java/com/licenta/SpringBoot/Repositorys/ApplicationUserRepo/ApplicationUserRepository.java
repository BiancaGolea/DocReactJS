package com.licenta.SpringBoot.Repositorys.ApplicationUserRepo;

import org.springframework.data.repository.CrudRepository;

import com.licenta.SpringBoot.Models.ApplicationUserModel.ApplicationUser;

public interface ApplicationUserRepository extends CrudRepository<ApplicationUser, Long>{
	
	ApplicationUser findByUsername(String username);
	

}
