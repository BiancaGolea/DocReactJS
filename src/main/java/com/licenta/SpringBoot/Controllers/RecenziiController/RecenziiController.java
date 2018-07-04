package com.licenta.SpringBoot.Controllers.RecenziiController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.licenta.SpringBoot.Models.RecenziiModel.RecenziiModel;
import com.licenta.SpringBoot.Services.RecenziiServices.RecenziiServices;

@RestController
@RequestMapping(value="/recenzie")
public class RecenziiController {
	
	@Autowired
	private RecenziiServices recenzii;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public ResponseEntity<Void> addRecenzie(@RequestBody RecenziiModel newRecenzie) {
		System.out.println("addRecenzie:"+ newRecenzie.toString());
		try {
		recenzii.addRecenzie(newRecenzie);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
		}catch(Exception e) {
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
			
		}
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/getAll/{id}", method=RequestMethod.GET)
	public ResponseEntity<List<RecenziiModel>> getAllRecenzii(@PathVariable("id") int idMed){
		System.out.println("Controller");
	
		List<RecenziiModel> listaRecenzii= recenzii.getAll(idMed);
		return new ResponseEntity<List<RecenziiModel>>(listaRecenzii, HttpStatus.OK);
	}

}
