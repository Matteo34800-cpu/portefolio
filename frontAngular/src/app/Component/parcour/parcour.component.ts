import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface ParcourStep {
  id: number;
  title: string;
  year: string;
  description: string;
  parent: number | null;
}

@Component({
  selector: 'app-parcour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parcour.component.html',
  styleUrl: './parcour.component.css'
})
export class ParcourComponent implements OnInit {
  steps: ParcourStep[] = [];
  loading = true;
  error?: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<ParcourStep[]>('/assets/jsons/parcours.json').subscribe({
      next: data => {
        this.steps = data || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement du parcours';
        this.loading = false;
        console.error(err);
      }
    });
  }

  getChildren(parentId: number | null): ParcourStep[] {
    return this.steps.filter(s => s.parent === parentId);
  }

  getRootSteps(): ParcourStep[] {
    return this.steps.filter(s => s.parent === null);
  }
}
