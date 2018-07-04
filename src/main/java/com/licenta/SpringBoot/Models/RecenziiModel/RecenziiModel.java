package com.licenta.SpringBoot.Models.RecenziiModel;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.licenta.SpringBoot.Models.MediciModel.MediciModel;

@Entity
@Table(name="RECENZIE")
public class RecenziiModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID_RECENZIE")
	private long id_recenzie;
	
	@Column(nullable=false, name="USERNAME")
	private String username;
	
	@Column(nullable=false, name="NOTASERVMED")
	private int notaServmed;
	
	@Column(nullable=false, name="NOTAAPARATURA")
	private int notaAparatura;
	
	@Column(nullable=false, name="NOTAPRET")
	private int notaPret;
	
	@Column(nullable=false, name="NOTAASPECTCAB")
	private int notaAspectcab;
	
	@Column(nullable=false, name="NOTALOCATIE")
	private int notaLocatie;
	
	@Column( name="DESCRIERE")
	private String descriere;
	
	@Column(name="DATARECENZIE")
	@Temporal(TemporalType.TIMESTAMP)
	private Date dataRecenzie;
	
	@ManyToOne
	@JoinColumn(name="IDMED")
	@JsonBackReference
	private MediciModel medic;

	public RecenziiModel() {
	}
	
	
	
	public RecenziiModel(long id_recenzie, String username, int notaServmed, int notaAparatura, int notaPret,
			int notaAspectcab, int notaLocatie, String descriere, Date dataRecenzie, MediciModel medic) {
		super();
		this.id_recenzie = id_recenzie;
		this.username = username;
		this.notaServmed = notaServmed;
		this.notaAparatura = notaAparatura;
		this.notaPret = notaPret;
		this.notaAspectcab = notaAspectcab;
		this.notaLocatie = notaLocatie;
		this.descriere = descriere;
		this.dataRecenzie = dataRecenzie;
		this.medic = medic;
	}



	public long getId_recenzie() {
		return id_recenzie;
	}

	public void setId_recenzie(long id_recenzie) {
		this.id_recenzie = id_recenzie;
	}

	public int getNotaServmed() {
		return notaServmed;
	}

	public void setNotaServmed(int notaServmed) {
		this.notaServmed = notaServmed;
	}

	public int getNotaAparatura() {
		return notaAparatura;
	}

	public void setNotaAparatura(int notaAparatura) {
		this.notaAparatura = notaAparatura;
	}

	public int getNotaPret() {
		return notaPret;
	}

	public void setNotaPret(int notaPret) {
		this.notaPret = notaPret;
	}

	public int getNotaAspectcab() {
		return notaAspectcab;
	}

	public void setNotaAspectcab(int notaAspectcab) {
		this.notaAspectcab = notaAspectcab;
	}

	public int getNotaLocatie() {
		return notaLocatie;
	}

	public void setNotaLocatie(int notaLocatie) {
		this.notaLocatie = notaLocatie;
	}

	public String getDescriere() {
		return descriere;
	}

	public void setDescriere(String descriere) {
		this.descriere = descriere;
	}

	public Date getDataRecenzie() {
		return dataRecenzie;
	}

	public void setDataRecenzie(Date dataRecenzie) {
		this.dataRecenzie = dataRecenzie;
	}

	public MediciModel getMedic() {
		return medic;
	}

	public void setMedic(MediciModel medic) {
		this.medic = medic;
	}
	
	public float getMedie() {
		return (float) ((notaAparatura+notaAspectcab+notaLocatie+notaPret+notaServmed)/5.0);
	}
	

	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}


	@Override
	public String toString() {
		return "RecenziiModel [id_recenzie=" + id_recenzie + ", username=" + username + ", notaServmed=" + notaServmed
				+ ", notaAparatura=" + notaAparatura + ", notaPret=" + notaPret + ", notaAspectcab=" + notaAspectcab
				+ ", notaLocatie=" + notaLocatie + ", descriere=" + descriere + ", dataRecenzie=" + dataRecenzie
				+ ", medic=" + medic + "]";
	}
		
}
