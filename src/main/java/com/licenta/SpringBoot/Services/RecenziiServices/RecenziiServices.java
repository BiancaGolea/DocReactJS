package com.licenta.SpringBoot.Services.RecenziiServices;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Models.RecenziiModel.RecenziiModel;
import com.licenta.SpringBoot.Repositorys.MediciRepository.MediciRepo;
import com.licenta.SpringBoot.Repositorys.RecenziiRepository.RecenziiRepo;

@Service
public class RecenziiServices {
	@Autowired
	private RecenziiRepo recenzieRepo;
	@Autowired
	private MediciRepo mediciRepo;

	public void addRecenzie(RecenziiModel recenzie) {
		recenzieRepo.save(recenzie);
	}

	public List<RecenziiModel> getAll(long idMed) {
		System.out.println("@Service");
		
		MediciModel medic = mediciRepo.findOne(idMed);
		List<RecenziiModel> listaRecenzii = recenzieRepo.findByMedic(medic);
		return listaRecenzii;
	}
}
