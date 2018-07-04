package com.licenta.SpringBoot.Models.ProgramariModel;



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
@Table(name="Programari")
public class ProgramariModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID_PROGRAMARE")
	private long id_programare;
	
	
	@Column(nullable=false,name="DATA")
	@Temporal(TemporalType.TIMESTAMP)
	private Date data;
	
	@Column(nullable=false, name="NUME")
	private String nume;
	
	@Column(nullable=false, name="PRENUME")
	private String prenume;
	
	@Column(nullable=false, name="EMAIL")
	private String email;
	
	@Column(nullable=false, name="NRTEL")
	private String nrtel;
	
	@ManyToOne
	@JoinColumn(name="IDMED")
	@JsonBackReference
	private MediciModel medic;

	public ProgramariModel() {
	}

	
	
	public ProgramariModel(long id_programare, Date data, String nume, String prenume, String email, String nrtel,
			MediciModel medic) {
		this.id_programare = id_programare;
		this.data = data;
		this.nume = nume;
		this.prenume = prenume;
		this.email = email;
		this.nrtel = nrtel;
		this.medic = medic;
	}



	public long getId_programare() {
		return id_programare;
	}

	public void setId_programare(long id_programare) {
		this.id_programare = id_programare;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNrtel() {
		return nrtel;
	}

	public void setNrtel(String nrtel) {
		this.nrtel = nrtel;
	}

	public MediciModel getMedic() {
		return medic;
	}

	public void setMedic(MediciModel medic) {
		this.medic = medic;
	}

	@Override
	public String toString() {
		return "ProgramariModel [id_programare=" + id_programare + ", data=" + data + ", nume=" + nume + ", prenume="
				+ prenume + ", email=" + email + ", nrtel=" + nrtel + ", medic=" + medic + "]";
	}

}
