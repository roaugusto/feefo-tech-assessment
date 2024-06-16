package com.feefo.normalize.job.config;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;

@Configuration
public class AppConfig {

    @Bean
    public ApplicationProperties applicationProperties() {
        return new ApplicationProperties();
    }

    @Primary
    @Bean(name = "dataSource")
    public DataSource hikariDataSource(ApplicationProperties applicationProperties) {
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:postgresql://%s/%s".formatted(applicationProperties().getDatabaseHostname(),
                applicationProperties().getDatabaseName()));
        ds.setUsername(applicationProperties().getDatabaseUsername());
        ds.setPassword(applicationProperties().getDatabasePassword());
        ds.setMaximumPoolSize(3);
        ds.setAutoCommit(true);
        ds.addDataSourceProperty("gssEncMode", "disable");
        return ds;
    }

}
