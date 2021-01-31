package com.naverblog.dawndevelopers.service;

import org.springframework.stereotype.Service;

import com.naverblog.dawndevelopers.domain.stack.Stack;
import com.naverblog.dawndevelopers.repository.StackRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class StackService {
    private final StackRepository stackRepository;

    public Long save(String name){
        final Stack stack = new Stack(name);
        return stackRepository.save(stack).getId();
    }
}
