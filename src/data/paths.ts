import { LearningPath } from '@/types';
export const learningPaths: LearningPath[]=[
{id:'p1',slug:'meccanica-da-zero',title:'Meccanica da zero',description:'Dalle basi vettoriali alla dinamica.',subject:'Fisica',level:'Base',estimatedDuration:'4 settimane',modules:['Vettori','Forze','Moto'],lessons:['l2','l6'],exercises:['e1','e2'],animations:['a1'],progress:62},
{id:'p2',slug:'analisi-matematica-1',title:'Analisi matematica I',description:'Limiti, derivate e integrali con visualizzazioni.',subject:'Matematica',level:'Intermedio',estimatedDuration:'6 settimane',modules:['Limiti','Derivate','Integrali'],lessons:['l1','l5'],exercises:['e3','e4'],animations:['a5','a6'],progress:45},
{id:'p3',slug:'elettromagnetismo-visuale',title:'Elettromagnetismo visuale',description:'Campi e potenziale con simulazioni.',subject:'Fisica',level:'Intermedio',estimatedDuration:'5 settimane',modules:['Carica','Campo','Applicazioni'],lessons:['l4'],exercises:['e6'],animations:['a3'],progress:30}
];
