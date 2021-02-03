package com.naverblog.dawndevelopers.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.naverblog.dawndevelopers.api.dto.MemberJoinRequestDto;
import com.naverblog.dawndevelopers.api.dto.MemberResponseDto;
import com.naverblog.dawndevelopers.domain.member.Member;
import com.naverblog.dawndevelopers.domain.stack.MemberStack;
import com.naverblog.dawndevelopers.domain.stack.Stack;
import com.naverblog.dawndevelopers.repository.MemberRepository;
import com.naverblog.dawndevelopers.repository.MemberStackRepository;
import com.naverblog.dawndevelopers.repository.StackRepository;

import lombok.RequiredArgsConstructor;

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
}
