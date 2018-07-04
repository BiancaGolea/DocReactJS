package com.licenta.SpringBoot.Services.ApplicationUserServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.ApplicationUserModel.ApplicationUser;
import com.licenta.SpringBoot.Repositorys.ApplicationUserRepo.ApplicationUserRepository;

@Service
public class ApplicationUserServices implements UserDetailsService{

	@Autowired
	private ApplicationUserRepository appUserRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		ApplicationUser appUser=appUserRepo.findByUsername(username);
		if(appUser==null) {
			throw new UsernameNotFoundException( username +" not found");
		}
		return new ApplicationPrincipleUser(appUser);
	}

}
