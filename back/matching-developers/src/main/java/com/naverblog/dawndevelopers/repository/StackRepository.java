package com.naverblog.dawndevelopers.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.naverblog.dawndevelopers.domain.stack.Stack;

public interface StackRepository extends JpaRepository<Stack,Long> {
    Stack findByName(String stackName);
}
