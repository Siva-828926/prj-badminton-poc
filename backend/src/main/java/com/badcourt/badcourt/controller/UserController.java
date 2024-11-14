package com.badcourt.badcourt.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.badcourt.badcourt.model.response.BadCourtReponse;
import com.badcourt.badcourt.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1/users/")
@Slf4j
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("get/locations")
    public ResponseEntity<BadCourtReponse> getLocationDetailsHandler()
    {
        log.info("Get location details handler starts");
        return ResponseEntity.ok(userService.getLocationDetails());
    }

}
