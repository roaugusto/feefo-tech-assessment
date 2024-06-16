package com.feefo.normalize.job.controller;

import com.feefo.normalize.job.dto.JobTitleResponseDTO;
import com.feefo.normalize.job.dto.Response;
import com.feefo.normalize.job.service.JobTitleService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/job-title")
@Tag(name = "Job Title")
public class JobTitleController {

    private final JobTitleService jobTitleService;

    JobTitleController(JobTitleService jobTitleService) {
        this.jobTitleService = jobTitleService;
    }

    @GetMapping("/normalize")
    public ResponseEntity<Response<JobTitleResponseDTO>> getJobTitleNormalized(String jobTitle) {
        String normalizedJobTitle = jobTitleService.getJobTitleNormalized(jobTitle);

        JobTitleResponseDTO jobTitleResponseDTO = new JobTitleResponseDTO();
        jobTitleResponseDTO.setJobTitleNormalized(normalizedJobTitle);

        Response<JobTitleResponseDTO> response = new Response<>(HttpStatus.OK.value(), "OK", jobTitleResponseDTO);
        return ResponseEntity.ok(response);
    }
}
