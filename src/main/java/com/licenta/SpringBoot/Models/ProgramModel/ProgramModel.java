package com.licenta.SpringBoot.Models.ProgramModel;


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
@Table(name="PROGRAM")
public class ProgramModel {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID_PROGRAM")
	private long id_program;
	
	@Column (nullable=false, name="ZI")
	private String zi;
	
	@Column(nullable=false, name="ORASTART")
	@Temporal(TemporalType.TIMESTAMP)
	private Date oraStart;
	
	@Column(nullable=false, name="ORAFINAL")
	@Temporal(TemporalType.TIMESTAMP)
	private Date oraFinal;
	
	@ManyToOne
	@JoinColumn(name="IDMED")
	@JsonBackReference
	private MediciModel medic;

	public ProgramModel() {
	}
	
	public ProgramModel(long id_program, String zi, Date oraStart, Date oraFinal, MediciModel medic) {
		super();
		this.id_program = id_program;
		this.zi = zi;
		this.oraStart = oraStart;
		this.oraFinal = oraFinal;
		this.medic = medic;
	}



	public long getId_program() {
		return id_program;
	}

	public void setId_program(long id_program) {
		this.id_program = id_program;
	}

	public String getZi() {
		return zi;
	}

	public void setZi(String zi) {
		this.zi = zi;
	}

	public Date getOraStart() {
		return oraStart;
	}

	public void setOraStart(Date oraStart) {
		this.oraStart = oraStart;
	}

	public Date getOraFinal() {
		return oraFinal;
	}

	public void setOraFinal(Date oraFinal) {
		this.oraFinal = oraFinal;
	}

	public MediciModel getMedic() {
		return medic;
	}

	public void setMedic(MediciModel medic) {
		this.medic = medic;
	}

	@Override
	public String toString() {
		return "ProgramModel [id_program=" + id_program + ", zi=" + zi + ", oraStart=" + oraStart + ", oraFinal="
				+ oraFinal + ", medic=" + medic + "]";
	}

}
