package com.badcourt.badcourt.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1/test/")
@Slf4j
public class TestController {

    @GetMapping("check")
    public ResponseEntity<String> testApi() {
        return ResponseEntity.ok(" I am working fine! Code More!!");
    }

}
