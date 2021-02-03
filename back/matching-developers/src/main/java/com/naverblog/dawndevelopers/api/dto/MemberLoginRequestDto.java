package com.naverblog.dawndevelopers.api.dto;

import lombok.Data;

@Data
public class MemberLoginRequestDto {
    private String userid;
    private String password;
}
