package com.badcourt.badcourt.exception;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.DefaultMessageCodesResolver;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.badcourt.badcourt.constants.BadcourtConstants;
import com.badcourt.badcourt.model.response.ErrorResponse;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class BadcourtException {

    @ExceptionHandler
    public ResponseEntity<ErrorResponse> handleException(Exception ex) {

        if (ex instanceof MethodArgumentNotValidException) {
            MethodArgumentNotValidException methodArgumentNotValidException = (MethodArgumentNotValidException) ex;
            List<String> errors = methodArgumentNotValidException.getBindingResult().getFieldErrors().stream()
                    .map(DefaultMessageSourceResolvable::getDefaultMessage).collect(Collectors.toList());
            String errorMessages = String.join(",", errors);
            return buildErrorResponse(errorMessages, BadcourtConstants.METHOD_ARGUMENT_INVALID, HttpStatus.BAD_REQUEST);
        }
        return null;

    }

    private ResponseEntity<ErrorResponse> buildErrorResponse(String errorMsg, Integer errorCode,
            HttpStatusCode httpStatusCode) {
        return new ResponseEntity<>(ErrorResponse.builder().errorCode(errorCode).errorMsg(errorMsg).build(),
                httpStatusCode);
    }

}
