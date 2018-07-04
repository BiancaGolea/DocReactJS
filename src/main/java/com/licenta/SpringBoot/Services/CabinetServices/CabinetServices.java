package com.licenta.SpringBoot.Services.CabinetServices;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.CabinetModel.CabinetModel;
import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Models.ServiciiModel.ServiciiModel;
import com.licenta.SpringBoot.Repositorys.CabinetRepository.CabinetRepo;
import com.licenta.SpringBoot.Repositorys.MediciRepository.MediciRepo;
import com.licenta.SpringBoot.ResponseEntity.ProfilCabinet;

@Service
public class CabinetServices {
	
	@Autowired
	private CabinetRepo cabinetRepo;
	@Autowired
	private MediciRepo mediciRepo;
	
	public CabinetModel addCabinet (CabinetModel newCabinet) {
		List<CabinetModel> listaCabinete=cabinetRepo.findByDenumireAndCabAdress(newCabinet.getDenumire(), newCabinet.getCabAdress());
		CabinetModel cabineteMedic=new CabinetModel();
		if(listaCabinete.isEmpty()) {
		CabinetModel cabinetToAdd=newCabinet;
		cabinetToAdd.setIdentificator(newCabinet.getCabAdress()+newCabinet.getDenumire()+newCabinet.getTip());
		cabinetRepo.save(cabinetToAdd);
		cabineteMedic=(cabinetRepo.findByIdentificator(cabinetToAdd.getIdentificator()));
		}
		return cabineteMedic;
	} 
	
	public void deleteCabinet(CabinetModel delCabinet) {
		List<CabinetModel> listaCabinete=cabinetRepo.findByDenumireAndCabAdress(delCabinet.getDenumire(), delCabinet.getCabAdress());
		cabinetRepo.delete(listaCabinete);
	}
	
	public List<CabinetModel> getAllCabinete(){
		List<CabinetModel> listaCabinete=(List<CabinetModel>) cabinetRepo.findAll();
		return listaCabinete;
		
	}
	
	public ProfilCabinet profilCabinet(long id) {
		ProfilCabinet profilCabinet=new ProfilCabinet();
		CabinetModel cabinetModel=cabinetRepo.findOne(id);
		profilCabinet.setDenumire(cabinetModel.getDenumire());
		profilCabinet.setAdresa(cabinetModel.getCabAdress());
		profilCabinet.setTip(cabinetModel.getTip());
		Set<MediciModel> listaMedici= cabinetModel.getMedici();
		List<String> medici= new ArrayList<>();
		for(MediciModel medic:listaMedici) {
			medici.add(medic.getNume()+"  "+medic.getPrenume());
		}
		profilCabinet.setListaMedici(medici);
		return profilCabinet;
	}

}
