package com.naverblog.dawndevelopers.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.naverblog.dawndevelopers.api.dto.MemberEditRequestDto;
import com.naverblog.dawndevelopers.api.dto.MemberJoinRequestDto;
import com.naverblog.dawndevelopers.api.dto.MemberLoginRequestDto;
import com.naverblog.dawndevelopers.api.dto.ResponseLogin;
import com.naverblog.dawndevelopers.service.MemberService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/member/{id}")
    public ResponseEntity<?> getMember(@PathVariable("id") Long id) {
        return ResponseEntity.ok(memberService.findById(id));
    }

    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody MemberJoinRequestDto memberJoinRequestDto) {
        Long memberId = memberService.joinMembers(memberJoinRequestDto);
        return ResponseEntity.ok(memberId + "로 저장되었습니다.");
    }

    @PatchMapping("/edit/{id}") // TODO : Browser 에서 PatchMapping 고려
    public ResponseEntity<?> edit(@PathVariable("id") Long id, @RequestBody MemberEditRequestDto memberEditRequestDto) {
        return ResponseEntity.ok(memberService.editMember(id, memberEditRequestDto));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody MemberLoginRequestDto memberLoginRequestDto){
        return ResponseLogin.getLoginResponse( memberService.login(memberLoginRequestDto));
    }

}
