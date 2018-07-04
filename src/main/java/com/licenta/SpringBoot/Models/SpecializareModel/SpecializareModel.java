package com.licenta.SpringBoot.Models.SpecializareModel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name="SPECIALIZARE")
public class SpecializareModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID_SPECIALIZARE")
	private long id_specializare;
	
	@Column(nullable=false, unique=true, name="DENUMIRESPECIALIZARE")
	private String denumireSpecializare;

	
	public SpecializareModel() {
	}
	
	
	public SpecializareModel(long id_specializare, String denumireSpecializare) {
		super();
		this.id_specializare = id_specializare;
		this.denumireSpecializare = denumireSpecializare;
	}



	public long getId_specializare() {
		return id_specializare;
	}

	public void setId_specializare(long id_specializare) {
		this.id_specializare = id_specializare;
	}

	public String getDenumireSpecializare() {
		return denumireSpecializare;
	}

	public void setDenumireSpecializare(String denumireSpecializare) {
		this.denumireSpecializare = denumireSpecializare;
	}


	@Override
	public String toString() {
		return "SpecializareModel [id_specializare=" + id_specializare + ", denumireSpecializare="
				+ denumireSpecializare +  "]";
	}
}
