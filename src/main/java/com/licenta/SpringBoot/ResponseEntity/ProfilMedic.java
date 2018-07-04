package com.licenta.SpringBoot.ResponseEntity;

import java.util.List;

public class ProfilMedic {
	private long id;
	private String nume;
	private String prenume;
	private List<String> specializare;
	private String facebook;
	private String email;
	private List<String> nrTel;
	private List<String> adresaCab;
	private List<String> program;
	private float mediePret;
	private float medieServMedicale;
	private float medieAparatura;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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
	public List<String> getSpecializare() {
		return specializare;
	}
	public void setSpecializare(List<String> specializare) {
		this.specializare = specializare;
	}
	public String getFacebook() {
		return facebook;
	}
	public void setFacebook(String facebook) {
		this.facebook = facebook;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public List<String> getNrTel() {
		return nrTel;
	}
	public void setNrTel(List<String> nrTel) {
		this.nrTel = nrTel;
	}
	public List<String> getAdresaCab() {
		return adresaCab;
	}
	public void setAdresaCab(List<String> adresaCab) {
		this.adresaCab = adresaCab;
	}
	public List<String> getProgram() {
		return program;
	}
	public void setProgram(List<String> program) {
		this.program = program;
	}
	
	public float getMediePret() {
		return mediePret;
	}
	public void setMediePret(float mediePret) {
		this.mediePret = mediePret;
	}
	public float getMedieServMedicale() {
		return medieServMedicale;
	}
	public void setMedieServMedicale(float medieServMedicale) {
		this.medieServMedicale = medieServMedicale;
	}
	public float getMedieAparatura() {
		return medieAparatura;
	}
	public void setMedieAparatura(float medieAparatura) {
		this.medieAparatura = medieAparatura;
	}
	@Override
	public String toString() {
		return "ProfilMedic [id=" + id + ", nume=" + nume + ", prenume=" + prenume + ", specializare=" + specializare
				+ ", facebook=" + facebook + ", email=" + email + ", nrTel=" + nrTel + ", adresaCab=" + adresaCab
				+ ", program=" + program + ", mediePret=" + mediePret + ", medieServMedicale=" + medieServMedicale
				+ ", medieAparatura=" + medieAparatura + "]";
	}
	
	
	
}
