import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    ChefForm: {
                        Title: "Chef",
                        Filters: "Filters",
                        City: "City",
                        State: "State",
                        Name: "Name",
                        Qualification: "Qualification",
                        Email: "Email",
                        ContactNumber: "Contact Number",
                        Cuisine: 'Cuisine',
                        Salary: 'Salary',
                        Experience: 'Experience',
                        Cuisines: 'Cuisines',
                        Designation: 'Designation',
                        Remarks: 'Remarks',
                        SharedFor: 'Shared For',
                        SalaryRange: 'Salary Range',
                        Reset: 'Reset',
                        Search: 'Search',
                        LeadForm: 'Lead Form',
                        BasicDetails: 'Basic Details',
                        Role: 'Role',
                        ProfessionalDetails: 'Professional Details',
                        ClearLead: 'Clear Lead',
                        AddLead: 'Add Lead',
                        ChefRole: 'Chef',
                        PartyCookRole: 'Party Cook',
                    }
                }
            },
            es: {
                translation: {
                    ChefForm: {
                        Title: "Chef",
                        Filters: "Filtros",
                        City: "Ciudad",
                        State: "Estado",
                        Name: "Nombre",
                        Qualification: "Calificación",
                        Email: "Correo electrónico",
                        ContactNumber: "Número de contacto",
                        Cuisine: "Cocina",
                        Salary: "Salario",
                        Experience: "Experiencia",
                        Cuisines: "Cocinas",
                        Designation: "Designación",
                        Remarks: "Observaciones",
                        SharedFor: "Compartido Para",
                        SalaryRange: "Rango Salarial",
                        Reset: "Restablecer",
                        Search: "Buscar",
                        LeadForm: "Formulario de Lead",
                        BasicDetails: "Detalles Básicos",
                        Role: "Rol",
                        ProfessionalDetails: "Detalles Profesionales",
                        ClearLead: "Limpiar Lead",
                        AddLead: "Agregar Lead",
                        ChefRole: "Chef",
                        PartyCookRole: "Cocinero de Fiesta",
                    }
                }
            },
            fr: {
                translation: {
                    ChefForm: {
                        Title: "Chef",
                        Filters: "Filtres",
                        City: "Ville",
                        State: "État",
                        Name: "Nom",
                        Qualification: "Qualification",
                        Email: "Email",
                        ContactNumber: "Numéro de contact",
                        Cuisine: "Cuisine",
                        Salary: "Salaire",
                        Experience: "Expérience",
                        Cuisines: "Cuisines",
                        Designation: "Désignation",
                        Remarks: "Remarques",
                        SharedFor: "Partagé Pour",
                        SalaryRange: "Plage de Salaire",
                        Reset: "Réinitialiser",
                        Search: "Rechercher",
                        LeadForm: "Formulaire de Lead",
                        BasicDetails: "Détails de Base",
                        Role: "Rôle",
                        ProfessionalDetails: "Détails Professionnels",
                        ClearLead: "Effacer le Lead",
                        AddLead: "Ajouter un Lead",
                        ChefRole: "Chef",
                        PartyCookRole: "Cuisinier de Fête",
                    }
                }
            },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
