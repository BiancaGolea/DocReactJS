package com.licenta.SpringBoot.Services.MediciServices;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.licenta.SpringBoot.Models.CabinetModel.CabinetModel;
import com.licenta.SpringBoot.Models.MediciModel.MediciModel;
import com.licenta.SpringBoot.Models.ProgramModel.ProgramModel;
import com.licenta.SpringBoot.Models.RecenziiModel.RecenziiModel;
import com.licenta.SpringBoot.Repositorys.CabinetRepository.CabinetRepo;
import com.licenta.SpringBoot.Repositorys.MediciRepository.MediciRepo;
import com.licenta.SpringBoot.ResponseEntity.ProfilMedic;
import com.licenta.SpringBoot.ResponseEntity.SpecializareMedici;
import com.licenta.SpringBoot.Services.CabinetServices.CabinetServices;
import com.licenta.SpringBoot.Services.SpecializareServices.SpecializareService;

@Service
public class MediciServices {

	@Autowired
	private MediciRepo mediciRepo;
	@Autowired
	private SpecializareService specializareService;
	@Autowired
	private CabinetServices serviciuCabinet;
	@Autowired
	private CabinetRepo cabRepo;

	public void addMedic(MediciModel medicModel) {
		MediciModel newMedic = medicModel;
		List<String> specializariList = medicModel.getSpecializare();
		Set<CabinetModel> cabineteList = medicModel.getCabinete();
		Set<CabinetModel> cabineteMedicList = new HashSet<>();
		newMedic.setCabinete(cabineteMedicList);
		for (String specializare : specializariList) {
			specializareService.addSpecializare(specializare);
		}
		for (CabinetModel cabinet : cabineteList) {
			if (serviciuCabinet.addCabinet(cabinet) != null) {
				serviciuCabinet.addCabinet(cabinet);
				cabineteMedicList.add(
						cabRepo.findByIdentificator(cabinet.getCabAdress() + cabinet.getDenumire() + cabinet.getTip()));
			} else {
				cabineteMedicList.add(
						cabRepo.findByIdentificator(cabinet.getCabAdress() + cabinet.getDenumire() + cabinet.getTip()));
			}
		}
		newMedic.setCabinete(cabineteMedicList);
		mediciRepo.save(newMedic);
	}

	public void deleteMedic(MediciModel medicModel) {
		MediciModel med = new MediciModel();
		med = mediciRepo.findByEmail(medicModel.getEmail());
		mediciRepo.delete(med);
	}
	
	public MediciModel getidMed(String username) {
		MediciModel medId=new MediciModel();
		MediciModel medic=mediciRepo.findByApplicationUser(username);
		medId.setIdMed(medic.getIdMed());
		return medId;
	}
	
	public ProfilMedic getMedic(long id) {
		ProfilMedic profilMedic=new ProfilMedic();
		MediciModel obiect=mediciRepo.findOne(id);
		profilMedic.setId(obiect.getIdMed());
		profilMedic.setNume(obiect.getNume());
		profilMedic.setPrenume(obiect.getPrenume());
		profilMedic.setEmail(obiect.getEmail());
		profilMedic.setFacebook(obiect.getFacebook());
		profilMedic.setNrTel(obiect.getNumereTel());
		profilMedic.setSpecializare(obiect.getSpecializare());
		
		Set<CabinetModel> listaCabinete=obiect.getCabinete();
		List<String> lista=new ArrayList<>();
		for(CabinetModel cabinete:listaCabinete) {
			lista.add(cabinete.getDenumire()+" "+cabinete.getCabAdress());
		
		}
		profilMedic.setAdresaCab(lista);
		
		Set<RecenziiModel> listaRecenzii=obiect.getRecenzii();
		int nrRecenzii=listaRecenzii.size();
		float sumaP=0,sumaA=0, sumaS=0;
		for(RecenziiModel recenzii:listaRecenzii) {
			sumaP+=recenzii.getNotaPret();
			sumaA+=recenzii.getNotaAparatura();
			sumaS+=recenzii.getNotaServmed();
		}
		profilMedic.setMediePret(sumaP==0?0:sumaP/nrRecenzii);
		profilMedic.setMedieAparatura(sumaA==0?0:sumaA/nrRecenzii);
		profilMedic.setMedieServMedicale(sumaS==0?0:sumaS/nrRecenzii);
	
		Set<ProgramModel> orar=obiect.getProgram();
		List<String> listaOrar=new ArrayList<>();
		for(ProgramModel programLucru:orar) {
			
			listaOrar.add(programLucru.getZi()+" "+programLucru.getOraStart()+" "+programLucru.getOraFinal());
		}
		profilMedic.setProgram(listaOrar);
		
		return profilMedic;
	}
	
	
	
	public List<SpecializareMedici> selectMedici(String specializare) { 
		List<SpecializareMedici> listaMedici=new ArrayList<>();
		List<MediciModel> listaSpecializareMedic=mediciRepo.findBySpecializare(specializare);
		for(MediciModel element:listaSpecializareMedic) {
			SpecializareMedici obiect=new SpecializareMedici();
			obiect.setId(element.getIdMed());
			obiect.setNume(element.getNume());
			obiect.setPrenume(element.getPrenume());
			obiect.setNumereTel(element.getNumereTel());
			List<String> adrese=new ArrayList<>();
			Set<CabinetModel> listaAdresaCabinet= element.getCabinete();
			for(CabinetModel cabinet:listaAdresaCabinet) {
				adrese.add(cabinet.getCabAdress());
			}
			obiect.setAdrese(adrese);
			
			float medie=0;
			int numarNote=0;
			Set<RecenziiModel> recenziiList=element.getRecenzii();
			for(RecenziiModel recenzie:recenziiList) {
				System.out.println("recenzie:"+recenzie.getMedie());
				medie+=recenzie.getMedie();
				numarNote++;
			}
			obiect.setMedieRecenzie((float) medie/numarNote);
			listaMedici.add(obiect);
		}
		return listaMedici;
	}
	
	
}
