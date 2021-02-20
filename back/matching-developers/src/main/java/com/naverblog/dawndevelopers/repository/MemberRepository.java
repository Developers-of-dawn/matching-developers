package com.naverblog.dawndevelopers.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.naverblog.dawndevelopers.domain.member.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
    @Transactional
    @Modifying
    @Query("update Member m set m.password =:encrypted, m.nickname =:nickname, m.job =:job , m.address =:address where m.id =:id")
    void update(Long id, String encrypted, String nickname, String job, String address);

    Optional<Member> findByUserId(String userId);
}
