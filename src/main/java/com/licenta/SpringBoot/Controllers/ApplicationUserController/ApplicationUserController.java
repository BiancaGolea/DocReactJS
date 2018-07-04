package com.licenta.SpringBoot.Controllers.ApplicationUserController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.licenta.SpringBoot.Models.ApplicationUserModel.ApplicationUser;
import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Repositorys.ApplicationUserRepo.ApplicationUserRepository;
import com.licenta.SpringBoot.Services.MediciServices.MediciServices;

@RestController
public class ApplicationUserController {
	
	@Autowired
	private ApplicationUserRepository userRepo;
	
	@Autowired
	private MediciServices mediciservicii;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/sign-up", method=RequestMethod.POST)
	public void signup(@RequestBody ApplicationUser date){
		System.out.println("SignUp:" +date.toString());
		ApplicationUser dateUser=date;
		PasswordEncoder pass=new BCryptPasswordEncoder();
		String encodedPass=pass.encode(date.getPassword());
		dateUser.setPassword(encodedPass);
		userRepo.save(dateUser);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/{userName}/checkRole", method=RequestMethod.GET)
	public ResponseEntity<?> check(@PathVariable("userName") String userName) {
		ApplicationUser appUser= userRepo.findByUsername(userName);
		long idMedic=0;
		try {
		MediciModel medic=mediciservicii.getidMed(userName);
		idMedic=medic.getIdMed();
		}catch(Exception e) {
			System.out.println("Exception:" +e.getMessage());
		
		}
		
		if(appUser.getRol()==null) {
			
			return new ResponseEntity<>(HttpStatus.OK);
		}
		else {
			
			return new ResponseEntity<Long>(idMedic ,HttpStatus.FOUND);
		}
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/{userName}/addRole", method=RequestMethod.POST)
	public void updateUser(@PathVariable("userName") String userUpdate) {
		ApplicationUser user=userRepo.findByUsername(userUpdate);
		userRepo.delete(user);
		user.setRol("MEDIC");
		userRepo.save(user);
	}
}
