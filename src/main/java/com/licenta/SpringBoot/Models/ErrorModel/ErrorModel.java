package com.licenta.SpringBoot.Models.ErrorModel;

public class ErrorModel {
	
	private String message;
	private int code;
	
	
	public ErrorModel() {
		
	}
	public ErrorModel(String message, int code) {
		
		this.message = message;
		this.code = code;
	}
	public String getMessage() {
		return message;

	}
	public void setMessage(String message) {
		this.message = message;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	@Override
	public String toString() {
		return "ErrorModel [message=" + message + ", code=" + code + "]";
	}
	
	

}
