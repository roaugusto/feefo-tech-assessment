package com.feefo.normalize.job.service.impl;

import com.feefo.normalize.job.exception.BadRequestException;
import com.feefo.normalize.job.model.JobTitleEntity;
import com.feefo.normalize.job.repository.JobTitleRepository;
import com.feefo.normalize.job.service.JobTitleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobTitleServiceImpl implements JobTitleService {

    private final JobTitleRepository jobTitleRepository;

    public JobTitleServiceImpl(JobTitleRepository jobTitleRepository) {
        this.jobTitleRepository = jobTitleRepository;
    }

    @Override
    public String getJobTitleNormalized(String title) {
        List<JobTitleEntity> jobTitles = (List<JobTitleEntity>) jobTitleRepository.findAll();

        if (title.trim().equals("")) {
            throw new BadRequestException("Job title should be informed!");
        }

        double maxScore = 0;
        String bestMatch = "";

        for (JobTitleEntity jobTitle : jobTitles) {
            String idealTitle = jobTitle.getName();
            double score = calculateScore(title, idealTitle);
            if (score > maxScore) {
                maxScore = score;
                bestMatch = idealTitle;
            }
        }

        if (bestMatch.equals("")) {
            throw new BadRequestException("There is no data enough to normalize the job title!");
        }

        return bestMatch;
    }

    private double calculateScore(String inputTitle, String idealTitle) {
        String[] inputWords = inputTitle.split(" ");
        String[] idealWords = idealTitle.split(" ");
        double score = 0;

        for (String inputWord : inputWords) {
            for (String idealWord : idealWords) {
                if (inputWord.equalsIgnoreCase(idealWord)) {
                    score++;
                    break;
                }
            }
        }

        return score / Math.max(inputWords.length, idealWords.length);
    }
}
