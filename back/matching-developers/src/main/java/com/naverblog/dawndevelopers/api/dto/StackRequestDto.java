package com.naverblog.dawndevelopers.api.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class StackRequestDto {
    private String name;

    public StackRequestDto(String name) {
        this.name = name;
    }
}
