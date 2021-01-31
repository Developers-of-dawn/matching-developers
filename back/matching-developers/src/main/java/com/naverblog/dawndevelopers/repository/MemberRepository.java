package com.naverblog.dawndevelopers.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.naverblog.dawndevelopers.domain.member.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
