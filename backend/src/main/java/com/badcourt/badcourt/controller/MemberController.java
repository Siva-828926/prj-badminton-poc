package com.badcourt.badcourt.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.badcourt.badcourt.model.response.BadCourtReponse;
import com.badcourt.badcourt.service.MemberService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/v1/member/")
@Slf4j
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("get/locations")
    public ResponseEntity<BadCourtReponse> getLocationDetailsHandler(@RequestParam( value = "mobileNo" , required = false) Long mobileNo) {
        log.info("Get location details handler starts");
        return ResponseEntity.ok(memberService.getLocationDetails(mobileNo));
    }

    @GetMapping("get/complexes")
    public ResponseEntity<BadCourtReponse> getComplexDetailsHandler(
            @Valid @NotNull @RequestParam("locationId") Integer locationId) {
        log.info("Get Complex details handler starts for location {}" , locationId);
        return ResponseEntity.ok(memberService.getComplexesBasedOnLocation(locationId));
    }

    @GetMapping("get/courts")
    public ResponseEntity<BadCourtReponse> getCourtDetailsHandler(@RequestParam("complexId") Integer complexId) {
        log.info("Get Courts details handler starts for complexid {}" , complexId);
        return ResponseEntity.ok(memberService.getCourtsBasedOnComplexAndLocation(complexId));

    }

}
