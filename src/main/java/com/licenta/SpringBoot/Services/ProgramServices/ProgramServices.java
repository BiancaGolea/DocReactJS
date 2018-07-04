package com.licenta.SpringBoot.Services.ProgramServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.ProgramModel.ProgramModel;
import com.licenta.SpringBoot.Repositorys.ProgramRepository.ProgramRepo;

@Service
public class ProgramServices {
	@Autowired
	private ProgramRepo programRepo;
	
	public void addProgram(ProgramModel program) {
		programRepo.save(program);
	}
	
}
