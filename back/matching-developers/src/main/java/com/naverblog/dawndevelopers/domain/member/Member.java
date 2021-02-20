package com.naverblog.dawndevelopers.domain.member;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.naverblog.dawndevelopers.domain.BaseEntity;
import com.naverblog.dawndevelopers.domain.stack.MemberStack;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
public class Member extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    private String userid;
    private String password;
    private String email;
    private String nickname;
    private String phone;
    private String job;
    private String address;

    @OneToMany(mappedBy = "member")
    private Set<MemberStack> stacks = new HashSet<>();

    @Builder
    public Member(String userid, String password, String email, String nickname, String phone, String job, String address) {
        this.userid = userid;
        this.password = password;
        this.email = email;
        this.nickname = nickname;
        this.phone = phone;
        this.job = job;
        this.address = address;
    }

}
