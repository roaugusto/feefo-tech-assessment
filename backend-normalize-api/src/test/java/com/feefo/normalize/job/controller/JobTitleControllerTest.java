package com.feefo.normalize.job.controller;

import com.feefo.normalize.job.service.JobTitleService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.Mockito.*;

public class JobTitleControllerTest {

    @Mock
    private JobTitleService jobTitleService;

    @InjectMocks
    private JobTitleController jobTitleController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetJobTitleNormalized() {
        String jobTitle = "Java Engineer";

        jobTitleController.getJobTitleNormalized(jobTitle);

        verify(jobTitleService, times(1)).getJobTitleNormalized(jobTitle);
    }
}
