package com.naverblog.dawndevelopers.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.naverblog.dawndevelopers.api.dto.MemberJoinRequestDto;
import com.naverblog.dawndevelopers.service.MemberService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class MemberController {
    private final MemberService memberService;

    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody MemberJoinRequestDto memberJoinRequestDto){
        Long memberId = memberService.joinMembers(memberJoinRequestDto);
        return ResponseEntity.ok(memberId+"로 저장되었습니다.");
    }
}
