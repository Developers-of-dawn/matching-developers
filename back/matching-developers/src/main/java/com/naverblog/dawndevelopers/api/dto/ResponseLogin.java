package com.naverblog.dawndevelopers.api.dto;

import org.springframework.http.ResponseEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ResponseLogin {
    SUCCESS("로그인에 성공하였습니다."),
    FAIL("로그인에 실패하였습니다.");

    private final String message;
    public static ResponseEntity<?> getLoginResponse(ResponseLogin responseLogin) {
        return ResponseEntity.ok(responseLogin.getMessage());
    }
}