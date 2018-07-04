package com.licenta.SpringBoot.Models.MediciModel;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

import com.licenta.SpringBoot.Models.CabinetModel.CabinetModel;
import com.licenta.SpringBoot.Models.ProgramModel.ProgramModel;
import com.licenta.SpringBoot.Models.ProgramariModel.ProgramariModel;
import com.licenta.SpringBoot.Models.RecenziiModel.RecenziiModel;
import com.licenta.SpringBoot.Models.ServiciiModel.ServiciiModel;


@Entity
@Table(name="MEDICI")
public class MediciModel {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="IDMED")
	private long idMed;
	
	@Column(nullable=false, name="NUME")
	private String nume;
	
	@Column(nullable=false, name="PRENUME")
	private String prenume;
	
	@ElementCollection
	@Column(nullable=false, name="NUMERETEL")
	private List<String> numereTel=new ArrayList<>();
	
	@Column(nullable=false, unique=true, name="EMAIL")
	private String email;
	
	@Column(unique=true, name="FACEBOOK")
	private String facebook;
	
	@Column(unique=true, name="APPLICATIONUSER")
	private String applicationUser;
	
	@ManyToMany
	@JoinTable(name = "MEDICI_CABINET", 
		joinColumns = @JoinColumn(name = "IDMED", referencedColumnName = "IDMED"), 
		inverseJoinColumns = @JoinColumn(name = "IDCAB", referencedColumnName = "IDCAB"))
	private Set<CabinetModel> cabinete = new HashSet<CabinetModel>();

	@ElementCollection
	@Column(name="Specializare", nullable=false)
	private List<String> specializare = new  ArrayList<>();

	@OneToMany(mappedBy="medic", cascade=CascadeType.ALL)
	private Set<ProgramModel> program = new HashSet<ProgramModel>();
	
	@OneToMany(mappedBy="medic", cascade=CascadeType.ALL)
	private Set<ServiciiModel> servicii = new HashSet<ServiciiModel>();
	
	@OneToMany(mappedBy="medic", cascade=CascadeType.ALL)
	private Set<ProgramariModel> programari = new HashSet<ProgramariModel>();

	
	@OneToMany(mappedBy="medic", cascade=CascadeType.ALL)
	private Set<RecenziiModel> recenzii = new HashSet<RecenziiModel>();


	public MediciModel() {
	}


	public long getIdMed() {
		return idMed;
	}


	public void setIdMed(long idMed) {
		this.idMed = idMed;
	}


	public String getNume() {
		return nume;
	}


	public void setNume(String nume) {
		this.nume = nume;
	}


	public String getPrenume() {
		return prenume;
	}


	public void setPrenume(String prenume) {
		this.prenume = prenume;
	}


	public List<String> getNumereTel() {
		return numereTel;
	}


	public void setNumereTel(List<String> numereTel) {
		this.numereTel = numereTel;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getFacebook() {
		return facebook;
	}


	public void setFacebook(String facebook) {
		this.facebook = facebook;
	}


	public Set<CabinetModel> getCabinete() {
		return cabinete;
	}


	public void setCabinete(Set<CabinetModel> cabinete) {
		this.cabinete = cabinete;
	}


	public List<String> getSpecializare() {
		return specializare;
	}


	public void setSpecializare(List<String> specializare) {
		this.specializare = specializare;
	}


	public Set<ProgramModel> getProgram() {
		return program;
	}


	public void setProgram(Set<ProgramModel> program) {
		this.program = program;
	}


	public Set<ServiciiModel> getServicii() {
		return servicii;
	}


	public void setServicii(Set<ServiciiModel> servicii) {
		this.servicii = servicii;
	}


	public Set<ProgramariModel> getProgramari() {
		return programari;
	}


	public void setProgramari(Set<ProgramariModel> programari) {
		this.programari = programari;
	}


	public Set<RecenziiModel> getRecenzii() {
		return recenzii;
	}


	public void setRecenzii(Set<RecenziiModel> recenzii) {
		this.recenzii = recenzii;
	}


	public MediciModel(long idMed, String nume, String prenume, List<String> numereTel, String email, String facebook,
			Set<CabinetModel> cabinete, List<String> specializare, Set<ProgramModel> program,
			Set<ServiciiModel> servicii, Set<ProgramariModel> programari, Set<RecenziiModel> recenzii) {
		super();
		this.idMed = idMed;
		this.nume = nume;
		this.prenume = prenume;
		this.numereTel = numereTel;
		this.email = email;
		this.facebook = facebook;
		this.cabinete = cabinete;
		this.specializare = specializare;
		this.program = program;
		this.servicii = servicii;
		this.programari = programari;
		this.recenzii = recenzii;
	}

	
	public String getApplicationUser() {
		return applicationUser;
	}


	public void setApplicationUser(String applicationUser) {
		this.applicationUser = applicationUser;
	}


	@Override
	public String toString() {
		return "MediciModel [idMed=" + idMed + ", nume=" + nume + ", prenume=" + prenume + ", numereTel=" + numereTel
				+ ", email=" + email + ", facebook=" + facebook + ", cabinete=" + cabinete + ", specializare="
				+ specializare + ", program=" + program + ", servicii=" + servicii + ", programari=" + programari
				+ ", recenzii=" + recenzii + "]";
	}
	

}
