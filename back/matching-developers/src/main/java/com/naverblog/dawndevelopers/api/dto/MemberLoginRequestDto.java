package com.naverblog.dawndevelopers.api.dto;

import lombok.Data;

@Data
public class MemberLoginRequestDto {
    private String userId;
    private String password;
}
