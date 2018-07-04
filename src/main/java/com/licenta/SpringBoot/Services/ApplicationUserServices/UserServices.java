package com.licenta.SpringBoot.Services.ApplicationUserServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.ApplicationUserModel.ApplicationUser;
import com.licenta.SpringBoot.Repositorys.ApplicationUserRepo.ApplicationUserRepository;

@Service
public class UserServices {
	
	@Autowired
	private ApplicationUserRepository appUserRepo;
	
	public void updateRole(String rol, String username) {
		ApplicationUser user=appUserRepo.findByUsername(username);
		appUserRepo.delete(user.getId());
		user.setRol(rol);
		appUserRepo.save(user);
	}
}
