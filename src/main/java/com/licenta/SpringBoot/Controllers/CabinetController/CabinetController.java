package com.licenta.SpringBoot.Controllers.CabinetController;

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

import com.licenta.SpringBoot.Models.CabinetModel.CabinetModel;
import com.licenta.SpringBoot.ResponseEntity.ProfilCabinet;
import com.licenta.SpringBoot.ResponseEntity.ProfilMedic;
import com.licenta.SpringBoot.Services.CabinetServices.CabinetServices;

@RestController
@RequestMapping(value="/cabinet")
public class CabinetController {
	
	@Autowired
	private CabinetServices cabinetServices;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/add", method=RequestMethod.POST)
	public ResponseEntity<Void> addCabinet(@RequestBody CabinetModel newCabinet) {
		System.out.println("addCabinet:"+ newCabinet.toString());
		try {
		cabinetServices.addCabinet(newCabinet);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
		}catch(Exception e) {
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
			
		}
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/delete", method=RequestMethod.DELETE)
	public ResponseEntity<Void> deleteCabinet(@RequestBody CabinetModel newCabinet) {
		System.out.println("deleteCabinet:"+ newCabinet.toString());
		try {
		cabinetServices.deleteCabinet(newCabinet);
		return new ResponseEntity<Void>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
			
		}
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/getAllCabinete", method=RequestMethod.GET)
	public ResponseEntity<List<CabinetModel>> getCabinete(){
		List<CabinetModel> listaCabiente=cabinetServices.getAllCabinete();
		return new ResponseEntity<List<CabinetModel>>(listaCabiente, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value = "/getProfilCabinet/{id}", method = RequestMethod.GET)
	public ResponseEntity<ProfilCabinet> getProfilCabinet(@PathVariable("id") long id) {
		return new ResponseEntity<ProfilCabinet>(cabinetServices.profilCabinet(id),HttpStatus.OK);
	}
	

}

