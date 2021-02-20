package com.naverblog.dawndevelopers.domain.stack;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.naverblog.dawndevelopers.domain.BaseEntity;
import com.naverblog.dawndevelopers.domain.member.Member;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
public class MemberStack extends BaseEntity {
    @Id
    @Column(name = "member_stack_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member; //양방향

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "stack_id")
    private TechStack techStack; //단방향

    public void setMemberStack(Member member, TechStack techStack) {
        this.techStack = techStack;
        if(member != null){
            member.getStacks().remove(this);
        }
        this.member = member;
        member.getStacks().add(this);
    }
}
