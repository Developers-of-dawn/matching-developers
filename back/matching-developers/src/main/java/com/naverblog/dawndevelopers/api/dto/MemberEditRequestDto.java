package com.naverblog.dawndevelopers.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @implSpec  : 가볍게 바꾸는 edit은 비밀번호, 닉네임, 직업, 활동 장소가 적당해보임
 * TODO : 만약 핸드폰 번호나, 이름 변경(가명 등의 이유)에 대해서는 다른 서비스 탭 고려(고객센터)
 */
@AllArgsConstructor
@Data
public class MemberEditRequestDto {
    private String password;
    private String nickname;
    private String job;
    private String address;
}
