package com.licenta.SpringBoot.ResponseEntity;

import java.util.List;

public class SpecializareMedici {
		private long id;
		private String nume;
		private String prenume;
		private List<String> adrese;
		private List<String> numereTel;
		private float medieRecenzie;
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
		public List<String> getAdrese() {
			return adrese;
		}
		public void setAdrese(List<String> adrese) {
			this.adrese = adrese;
		}
		public List<String> getNumereTel() {
			return numereTel;
		}
		public void setNumereTel(List<String> numereTel) {
			this.numereTel = numereTel;
		}
		public float getMedieRecenzie() {
			return medieRecenzie;
		}
		public void setMedieRecenzie(float medieRecenzie) {
			this.medieRecenzie = medieRecenzie;
		}
		
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public SpecializareMedici(String nume, String prenume, List<String> adrese, List<String> numereTel,
				float medieRecenzie) {
			super();
			this.nume = nume;
			this.prenume = prenume;
			this.adrese = adrese;
			this.numereTel = numereTel;
			this.medieRecenzie = medieRecenzie;
		}
		public SpecializareMedici() {
			super();
		}
		@Override
		public String toString() {
			return "SpecializareMedici [id=" + id + ", nume=" + nume + ", prenume=" + prenume + ", adrese=" + adrese
					+ ", numereTel=" + numereTel + ", medieRecenzie=" + medieRecenzie + "]";
		}
		
	}
