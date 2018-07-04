package com.licenta.SpringBoot.Services.SpecializareServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.SpecializareModel.SpecializareModel;
import com.licenta.SpringBoot.Repositorys.SpecializareRepository.SpecializareRepo;

@Service
public class SpecializareService {
	
	@Autowired
	private SpecializareRepo specializare;
	
	
	public void addSpecializare(String denumireSpecializare) {
		SpecializareModel specializareModel=new SpecializareModel();
		specializareModel.setDenumireSpecializare(denumireSpecializare);
		if(specializare.findByDenumireSpecializare(denumireSpecializare)==null) {
		specializare.save(specializareModel);
		}
	}
	
	public List<SpecializareModel> getSpecializareList (){
		List<SpecializareModel> listaSpecializari= (List<SpecializareModel>) specializare.findAll();
		return listaSpecializari;
	}

}
