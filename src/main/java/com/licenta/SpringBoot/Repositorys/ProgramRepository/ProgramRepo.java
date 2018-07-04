package com.licenta.SpringBoot.Repositorys.ProgramRepository;

import org.springframework.data.repository.CrudRepository;

import com.licenta.SpringBoot.Models.ProgramModel.ProgramModel;

public interface ProgramRepo extends CrudRepository<ProgramModel, Long>{

}
