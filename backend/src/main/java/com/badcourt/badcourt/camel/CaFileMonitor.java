package com.badcourt.badcourt.camel;

import org.apache.camel.builder.RouteBuilder;
import org.springframework.stereotype.Component;

@Component
public class CaFileMonitor extends RouteBuilder {
    
    @Override
    public void configure() throws Exception {
      
        String sourceDirectory = "file:C://Users//vsiva6//Desktop//CanadaPost//Badmintion-Assigntment-requirements//Data?noop=true&recursive=true";
        String targetDirectory = "file:C://Users//vsiva6//Desktop//CanadaPost//Badmintion-Assigntment-requirements//Camel-Monitor/";
        from(sourceDirectory)
            .to(targetDirectory);
    }
}
