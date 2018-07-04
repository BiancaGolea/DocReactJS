package com.licenta.SpringBoot.Services.ServiciiServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Models.ServiciiModel.ServiciiModel;
import com.licenta.SpringBoot.Repositorys.MediciRepository.MediciRepo;
import com.licenta.SpringBoot.Repositorys.ServiciiRepository.ServiciiRepo;

@Service
public class ServiciiServices {
	
	@Autowired
	private ServiciiRepo serviciu;
	@Autowired
	private MediciRepo medRepo;
	
	public void addServicii(ServiciiModel modelServiciu) {
		serviciu.save(modelServiciu);
	}
	
	public List<ServiciiModel> getAllServicii(long idMed){
		MediciModel medic=medRepo.findOne(idMed);
		List<ServiciiModel> listaServiciiMed=serviciu.findByMedic(medic);
		return listaServiciiMed;
	}

}
