package com.licenta.SpringBoot.Repositorys.CabinetRepository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.licenta.SpringBoot.Models.CabinetModel.CabinetModel;
import com.licenta.SpringBoot.Models.MediciModel.MediciModel;

public interface CabinetRepo extends CrudRepository<CabinetModel, Long> {
	List<CabinetModel> findByDenumireAndCabAdress(String denumire, String cab_adress);
	CabinetModel findByIdentificator(String identificator);
}
