package com.naverblog.dawndevelopers.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.naverblog.dawndevelopers.domain.stack.TechStack;

public interface StackRepository extends JpaRepository<TechStack,Long> {
    TechStack findByName(String stackName);
}
