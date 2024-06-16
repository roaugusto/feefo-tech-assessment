package com.feefo.normalize.job.config;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;


@Getter
public class ApplicationProperties {

    @Value("${database.hostname}")
    private String databaseHostname;

    @Value("${database.databasename:feefo}")
    private String databaseName;

    @Value("${database.username}")
    private String databaseUsername;

    @Value("${database.password}")
    private String databasePassword;

}
