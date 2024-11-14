package com.badcourt.badcourt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.badcourt.badcourt.model.request.AddNewCourtRequest;
import com.badcourt.badcourt.service.AdminService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1/admin/")
@Slf4j
public class AdminController {

    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("courts/add")
    public ResponseEntity<?> addNewCourtHandler(@RequestParam("image") @NotNull  MultipartFile courtImg,
            @Valid @ModelAttribute AddNewCourtRequest addNewCourtRequest) {
        log.info("Add new court handler starts for user {}", addNewCourtRequest.getMobileNo());
        return ResponseEntity.ok(adminService.addNewCourt(addNewCourtRequest , courtImg));
    }

}
