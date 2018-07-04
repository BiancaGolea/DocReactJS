package com.licenta.SpringBoot.Models.CabinetModel;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.licenta.SpringBoot.Models.MediciModel.MediciModel;

@Entity
@Table(name = "CABINET")
public class CabinetModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IDCAB")
	private long idCab;

	@Column(nullable = false, name = "CABADRESS")
	private String cabAdress;

	@Column(name = "TIP")
	private String tip;

	@Column(name = "DENUMIRE")
	private String denumire;
	
	@Column(name="identificator",unique=true)
	private String identificator;

	@ManyToMany(cascade = CascadeType.ALL)
	@JsonBackReference
	@JoinTable(name = "MEDICI_CABINET", joinColumns = @JoinColumn(name = "IDCAB", referencedColumnName = "IDCAB"), inverseJoinColumns = @JoinColumn(name = "IDMED", referencedColumnName = "IDMED"))
	private Set<MediciModel> medici = new HashSet<MediciModel>();

	
	
	public CabinetModel(long idCab, String cabAdress, String tip, String denumire, String identificator,
			Set<MediciModel> medici) {
		super();
		this.idCab = idCab;
		this.cabAdress = cabAdress;
		this.tip = tip;
		this.denumire = denumire;
		this.identificator = identificator;
		this.medici = medici;
	}

	public CabinetModel() {
	}

	public long getIdCab() {
		return idCab;
	}

	public void setIdCab(long idCab) {
		this.idCab = idCab;
	}

	public String getCabAdress() {
		return cabAdress;
	}

	public void setCabAdress(String cabAdress) {
		this.cabAdress = cabAdress;
	}

	public String getTip() {
		return tip;
	}

	public void setTip(String tip) {
		this.tip = tip;
	}

	public String getDenumire() {
		return denumire;
	}

	public void setDenumire(String denumire) {
		this.denumire = denumire;
	}

	public Set<MediciModel> getMedici() {
		return medici;
	}

	public void setMedici(Set<MediciModel> medici) {
		this.medici = medici;
	}
	
	public void setIdentificator(String argument) {
		this.identificator=argument;
	}
	
	public String getIdentificator() {
		return identificator;
	}

	@Override
	public String toString() {
		return "CabinetModel [idCab=" + idCab + ", cabAdress=" + cabAdress + ", tip=" + tip + ", denumire=" + denumire
				+ ", medici=" + medici + "]";
	}

}
