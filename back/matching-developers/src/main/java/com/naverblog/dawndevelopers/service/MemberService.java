package com.naverblog.dawndevelopers.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.naverblog.dawndevelopers.api.dto.MemberEditRequestDto;
import com.naverblog.dawndevelopers.api.dto.MemberJoinRequestDto;
import com.naverblog.dawndevelopers.api.dto.MemberLoginRequestDto;
import com.naverblog.dawndevelopers.api.dto.MemberResponseDto;
import com.naverblog.dawndevelopers.api.dto.ResponseLogin;
import com.naverblog.dawndevelopers.domain.member.Member;
import com.naverblog.dawndevelopers.domain.stack.MemberStack;
import com.naverblog.dawndevelopers.domain.stack.Stack;
import com.naverblog.dawndevelopers.repository.MemberRepository;
import com.naverblog.dawndevelopers.repository.MemberStackRepository;
import com.naverblog.dawndevelopers.repository.StackRepository;
import com.naverblog.dawndevelopers.util.Encrypt;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Transactional(readOnly = true)
@Service
@RequiredArgsConstructor
public class MemberService {
    private final StackRepository stackRepository;
    private final MemberRepository memberRepository;
    private final MemberStackRepository memberStackRepository;

    public Long joinMembers(MemberJoinRequestDto memberJoinRequestDto) {
        Member member = MemberJoinRequestDto.of(memberJoinRequestDto);
        Member saveMember = memberRepository.save(member);

        List<String> stackList = memberJoinRequestDto.getStacks();
        for (String stackName : stackList) {
            Stack stack = stackRepository.findByName(stackName);
            MemberStack memberStack = new MemberStack();
            memberStack.setMemberStack(member, stack);
            memberStackRepository.save(memberStack);
        }
        return saveMember.getId();
    }

    public MemberResponseDto findById(Long id) {
        Optional<Member> findMember = memberRepository.findById(id);
        return MemberResponseDto.of(findMember);
    }

    public MemberResponseDto editMember(Long id, MemberEditRequestDto memberEditRequestDto) {
        String password = memberEditRequestDto.getPassword();
        String encrypted = Encrypt.from(password);
        String nickname = memberEditRequestDto.getNickname();
        String address = memberEditRequestDto.getAddress();
        String job = memberEditRequestDto.getJob();
        memberRepository.update(id, encrypted, nickname, job, address);
        return new MemberResponseDto(nickname);
    }

    public ResponseLogin login(MemberLoginRequestDto memberLoginRequestDto) {
        final String userId = memberLoginRequestDto.getUserid();
        final String encrypt = Encrypt.from(memberLoginRequestDto.getPassword());
        log.info("current userId = {}, password = {}", userId, encrypt);
        Optional<Member> findMember = memberRepository.findByUserid(userId);
        log.info("Existence = {}", findMember.isPresent());
        long count = findMember.filter(member -> member.getPassword().equals(encrypt)).stream().count();
        return count > 0 ? ResponseLogin.SUCCESS : ResponseLogin.FAIL;
    }

}
