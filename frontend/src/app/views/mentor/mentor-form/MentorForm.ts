import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MentorService } from '../../../services/mentor.service';

@Component({
  selector: 'app-mentor-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mentor-form.html',
  styleUrl: './mentor-form.css'
})
export class MentorFormComponent {
  private fb = inject(FormBuilder);
  private mentorService = inject(MentorService);

  mentorForm = this.fb.group({
    specialty: ['', Validators.required],
    experienceYears: [null, [Validators.required, Validators.min(0)]],
    bio: ['', [Validators.required, Validators.maxLength(500)]],
    skills: ['', Validators.required]
  });

  enviar() {
    if (this.mentorForm.valid) {
      // Transforma a string de skills em array antes de enviar
      const rawValue = this.mentorForm.value;
      const payload = {
        ...rawValue,
        skills: typeof rawValue.skills === 'string' ? rawValue.skills.split(',') : []
      };

      this.mentorService.createProfile(payload as any).subscribe({
        next: () => alert('Perfil criado!'),
        error: (err) => console.error('Erro no cadastro', err)
      });
    }
  }
}
