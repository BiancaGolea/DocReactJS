package com.licenta.SpringBoot.ResponseEntity;

import java.util.List;


public class ProfilCabinet {
	private List<String> listaMedici;
	private String denumire;
	private String tip;
	private String adresa;
	public List<String> getListaMedici() {
		return listaMedici;
	}
	public void setListaMedici(List<String> listaMedici) {
		this.listaMedici = listaMedici;
	}
	public String getDenumire() {
		return denumire;
	}
	public void setDenumire(String denumire) {
		this.denumire = denumire;
	}
	public String getTip() {
		return tip;
	}
	public void setTip(String tip) {
		this.tip = tip;
	}
	public String getAdresa() {
		return adresa;
	}
	public void setAdresa(String adresa) {
		this.adresa = adresa;
	}
	public ProfilCabinet() {
		super();
	}
	@Override
	public String toString() {
		return "ProfilCabinet [listaMedici=" + listaMedici + ", denumire=" + denumire + ", tip=" + tip + ", adresa="
				+ adresa + "]";
	}
	

	
}
