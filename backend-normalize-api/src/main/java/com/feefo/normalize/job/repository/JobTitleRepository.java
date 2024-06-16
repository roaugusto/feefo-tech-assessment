package com.feefo.normalize.job.repository;

import com.feefo.normalize.job.model.JobTitleEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface  JobTitleRepository extends CrudRepository<JobTitleEntity, UUID> {
}
