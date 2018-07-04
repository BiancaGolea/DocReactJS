package com.licenta.SpringBoot.Controllers.SpecializariController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.licenta.SpringBoot.Models.SpecializareModel.SpecializareModel;
import com.licenta.SpringBoot.Services.SpecializareServices.SpecializareService;

@RestController
@RequestMapping(value="/specializari")
public class SpecializariController {
	
	@Autowired
	private SpecializareService specializare;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/getAll", method=RequestMethod.GET)
	public ResponseEntity<?> getAllSpecializari(){
		System.out.println("getAllSpecialiari");
		List<SpecializareModel> newLista=specializare.getSpecializareList();
		return new ResponseEntity<List<SpecializareModel>>(newLista, HttpStatus.OK);
	}

}
