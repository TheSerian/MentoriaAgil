package com.mentoria.agil.backend.dto.response;

import com.mentoria.agil.backend.model.Role;

public record LoginResponseDTO(
    String token,
    String name,
    String email,
    Role role
) {}