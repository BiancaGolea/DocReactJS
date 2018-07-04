package com.licenta.SpringBoot.Controllers.ProgramController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.licenta.SpringBoot.Models.ProgramModel.ProgramModel;
import com.licenta.SpringBoot.Services.ProgramServices.ProgramServices;

@RestController
@RequestMapping(value="/program")
public class ProgramController {
	
	@Autowired
	private ProgramServices orar;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public ResponseEntity<Void> addProgram(@RequestBody ProgramModel newProgram) {
		System.out.println("addProgram:"+ newProgram.toString());
		try {
		orar.addProgram(newProgram);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
		}catch(Exception e) {
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
	
	

}
	}
}
