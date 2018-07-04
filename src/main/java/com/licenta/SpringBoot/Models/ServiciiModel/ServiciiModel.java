package com.licenta.SpringBoot.Models.ServiciiModel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.licenta.SpringBoot.Models.MediciModel.MediciModel;

@Entity
@Table(name="SERVICII")
public class ServiciiModel {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private long id;
	
	@Column(nullable=false, name="DENUMIRE" )
	private String denumire;
	
	@Column(nullable=false, name="PRET")
	private String pret;
	
	@ManyToOne
	@JoinColumn(name="IDMED")
	@JsonBackReference
	private MediciModel medic;

	
	
	public ServiciiModel() {
		super();
	}

	public ServiciiModel(long id, String denumire, String pret, MediciModel medic) {
		super();
		this.id = id;
		this.denumire = denumire;
		this.pret = pret;
		this.medic = medic;
	}

	@Override
	public String toString() {
		return "ServiciiModel [id=" + id + ", denumire=" + denumire + ", pret=" + pret + ", medic=" + medic + "]";
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDenumire() {
		return denumire;
	}

	public void setDenumire(String denumire) {
		this.denumire = denumire;
	}

	public String getPret() {
		return pret;
	}

	public void setPret(String pret) {
		this.pret = pret;
	}

	public MediciModel getMedic() {
		return medic;
	}

	public void setMedic(MediciModel medic) {
		this.medic = medic;
	}
	
	

}
