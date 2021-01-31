package com.naverblog.dawndevelopers.api.dto;

import java.util.ArrayList;
import java.util.List;

import com.naverblog.dawndevelopers.domain.member.Member;
import com.naverblog.dawndevelopers.domain.stack.MemberStack;
import com.naverblog.dawndevelopers.domain.stack.Stack;
import com.naverblog.dawndevelopers.util.Encrypt;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class MemberJoinRequestDto {
    private String username;
    private String userid;
    private String password;
    private String email;
    private String nickname;
    private String phone;
    private String job;
    private String address;
    private List<String> stacks;

    public static Member of(MemberJoinRequestDto memberJoinRequestDto) {
        final String rawPassword = memberJoinRequestDto.getPassword();
        final String encryptPassword = Encrypt.from(rawPassword);

        return Member.builder()
                     .userid(memberJoinRequestDto.getUserid())
                     .username(memberJoinRequestDto.getUsername())
                     .password(encryptPassword)
                     .email(memberJoinRequestDto.getEmail())
                     .nickname(memberJoinRequestDto.getNickname())
                     .phone(memberJoinRequestDto.getPhone())
                     .job(memberJoinRequestDto.getJob())
                     .address(memberJoinRequestDto.getAddress())
                     .build();
    }
}
