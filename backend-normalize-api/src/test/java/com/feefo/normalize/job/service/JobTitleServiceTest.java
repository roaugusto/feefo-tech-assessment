package com.feefo.normalize.job.service;

import com.feefo.normalize.job.exception.BadRequestException;
import com.feefo.normalize.job.model.JobTitleEntity;
import com.feefo.normalize.job.repository.JobTitleRepository;
import com.feefo.normalize.job.service.impl.JobTitleServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class JobTitleServiceTest {

    @Mock
    private JobTitleRepository jobTitleRepository;

    @InjectMocks
    private JobTitleServiceImpl jobTitleService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetJobTitleNormalizedWithEmptyTitle() {
        when(jobTitleRepository.findAll()).thenReturn(getJobTitles());
        BadRequestException exception = assertThrows(BadRequestException.class, () -> {
            jobTitleService.getJobTitleNormalized("");
        });

        assertEquals("Job title should be informed!", exception.getMessage());
    }

    @Test
    void testGetJobTitleNormalizedWithValidTitle() {
        List<JobTitleEntity> jobTitles = getJobTitles();
        when(jobTitleRepository.findAll()).thenReturn(jobTitles);

        assertAll("Normalized Title Check",
                () -> assertEquals("Software Engineer", jobTitleService.getJobTitleNormalized("Java engineer")),
                () -> assertEquals("Software Engineer", jobTitleService.getJobTitleNormalized("C# engineer")),
                () -> assertEquals("Accountant", jobTitleService.getJobTitleNormalized("Accountant")),
                () -> assertEquals("Accountant", jobTitleService.getJobTitleNormalized("Chief Accountant"))
        );
    }

    @Test
    void testGetJobTitleNormalizedWithNoMatchingTitle() {
        when(jobTitleRepository.findAll()).thenReturn(getJobTitles());
        BadRequestException exception = assertThrows(BadRequestException.class, () -> {
            jobTitleService.getJobTitleNormalized("Non Existent Job");
        });

        assertEquals("There is no data enough to normalize the job title!", exception.getMessage());
    }

    private List<JobTitleEntity> getJobTitles() {
        return Arrays.asList(
                new JobTitleEntity(UUID.randomUUID(), "Software Engineer"),
                new JobTitleEntity(UUID.randomUUID(),"QA Engineer"),
                new JobTitleEntity(UUID.randomUUID(),"DevOps Engineer"),
                new JobTitleEntity(UUID.randomUUID(),"Product Manager" ),
                new JobTitleEntity(UUID.randomUUID(),"Scrum Master"),
                new JobTitleEntity(UUID.randomUUID(),"Architect"),
                new JobTitleEntity(UUID.randomUUID(),"Accountant"),
                new JobTitleEntity(UUID.randomUUID(),"Project Manager"),
                new JobTitleEntity(UUID.randomUUID(),"Data Scientist"),
                new JobTitleEntity(UUID.randomUUID(),"Developer")
        );
    }

}
