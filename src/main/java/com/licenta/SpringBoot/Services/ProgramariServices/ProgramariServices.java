package com.licenta.SpringBoot.Services.ProgramariServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Models.ProgramariModel.ProgramariModel;
import com.licenta.SpringBoot.Repositorys.MediciRepository.MediciRepo;
import com.licenta.SpringBoot.Repositorys.ProgramariRepository.ProgramariRepo;

@Service
public class ProgramariServices {

	@Autowired
	private ProgramariRepo programariRepo;
	@Autowired
	private MediciRepo mediciRepo;

	public void addProgramari(ProgramariModel programare) throws Exception {
		ProgramariModel programari = programariRepo.findByDataAndMedic(programare.getData(),programare.getMedic());
		if (programari == null) {
			programariRepo.save(programare);
		} else {
			throw new Exception("Error");
		}
	}
	
	public List<ProgramariModel> getAllProramari(long idMed){
		MediciModel medic=mediciRepo.findOne(idMed);
		List<ProgramariModel> listaProgramari=programariRepo.findByMedic(medic);
		return listaProgramari;
	}
}
