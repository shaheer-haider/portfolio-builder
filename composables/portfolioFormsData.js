export default [
    {
        "id": "location",
        "label": "Location",
        "completed": true,
        "formData": [
            {
                "id": "city",
                "label": "What city do you live in?",
                "value": "",
                "type": "text",
                "required": true,
                "placeholder": "Sunnyvale, CA, USA"
            },
            {
                "id": "us_work_authorization",
                "label": "Are you legally authorized to work in the United States?",
                "value": "",
                "type": "radio",
                "required": true,
                "options": () => [
                    {
                        "label": "Yes",
                        "value": "yes"
                    },
                    {
                        "label": "No",
                        "value": "no"
                    }
                ]
            },
            {
                "id": "us_sponsorship_requirement",
                "label": "Will you now, or will you in the future, require sponsorship for employment visa status to work legally in the United States?",
                "value": "",
                "type": "radio",
                "required": true,
                "options": () => [
                    {
                        "label": "Yes",
                        "value": "yes"
                    },
                    {
                        "label": "No",
                        "value": "no"
                    }
                ]
            },
            {
                "id": "open_remotely",
                "label": "Are you open to working remotely?",
                "value": "",
                "type": "radio",
                "required": true,
                "options": () => [
                    {
                        "label": "Yes",
                        "value": "yes"
                    },
                    {
                        "label": "No",
                        "value": "no"
                    }
                ]
            },
            {
                "id": "willing_to_relocate",
                "label": "Are you willing to relocate?",
                "value": "",
                "type": "radio",
                "required": true,
                "options": () => [
                    {
                        "label": "Yes",
                        "value": "yes"
                    },
                    {
                        "label": "No",
                        "value": "no"
                    }
                ]
            },
            {
                "id": "place_to_relocate",
                "label": "Were would you consider relocating to?",
                "value": [],
                "type": "checkbox",
                "required": true,
                "options": () => [
                    {
                        "label": "San Francisco Bay Area",
                        "value": "San Francisco Bay Area"
                    },
                    {
                        "label": "New York City",
                        "value": "New York City"
                    },
                    {
                        "label": "Anywhere in the US",
                        "value": "Anywhere in the US"
                    }
                ]
            },
            {
                "id": "more_place_to_relocate",
                "label": "Where else would you relocate? (cities, regions, countries, etc.)",
                "value": "",
                "type": "text",
                "required": true,
                "placeholder": "Sunnyvale, CA, USA"
            }
        ]
    },
    {
        "id": "role",
        "label": "Role",
        "completed": true,
        "formData": [
            {
                "id": "job_function",
                "label": "What job function best fits what you're looking for?",
                "value": "",
                "type": "radio",
                "required": true,
                "options": () => [
                    {
                        "label": "Engineering",
                        "value": "Engineering",
                        "mini_label": "Software, hardware and data"
                    },
                    {
                        "label": "Design",
                        "value": "Design",
                        "mini_label": "Web, mobile, UI/UX, illustration and 3D"
                    },
                    {
                        "label": "Product",
                        "value": "Product",
                        "mini_label": "Product management and operations"
                    },
                    {
                        "label": "Science",
                        "value": "Science",
                        "mini_label": "Biology, chemistry, healthcare and research"
                    },
                    {
                        "label": "Sales",
                        "value": "Sales",
                        "mini_label": "Sales, partnerships and business development"
                    },
                    {
                        "label": "Marketing",
                        "value": "Marketing",
                        "mini_label": "Growth, content, SEO and branding"
                    },
                    {
                        "label": "Support",
                        "value": "Support",
                        "mini_label": "Customer service and support"
                    },
                    {
                        "label": "Recruiting & HR",
                        "value": "Recruiting & HR",
                        "mini_label": "Sourcing, recruiting and people ops"
                    },
                    {
                        "label": "Operations",
                        "value": "Operations",
                        "mini_label": "Chief of staff, operational analysis, exec assistant    "
                    },
                    {
                        "label": "Finance",
                        "value": "Finance"
                    },
                    {
                        "label": "Legal",
                        "value": "Legal"
                    }
                ]
            },
            {
                "id": "interested_engineering_role",
                "label": "Which engineering roles are you most interested in? (Choose up to four)",
                "value": [],
                "type": "multi-select",
                "required": true,
                "options": () => [
                    {
                        "label": "Software Engineering",
                        "value": "Software Engineering"
                    },
                    {
                        "label": "Hardware Engineering",
                        "value": "Hardware Engineering"
                    }
                ],
                focusInput: false,
            },
            {
                "id": "github",
                "label": "Github?",
                "value": "",
                "type": "text",
                "required": true,
                "placeholder": "https://github.com/..."
            },
            {
                "id": "is_college_or_bootcamp_student",
                "label": "Are you a full-time student at a school or bootcamp?",
                "value": "",
                "type": "radio",
                "required": true,
                "options": () => [
                    {
                        "label": "Yes",
                        "value": "yes"
                    },
                    {
                        "label": "No",
                        "value": "no"
                    }
                ]
            },
            {
                "id": "name_of_institution",
                "label": "What is the name of the school or bootcamp you are attending?",
                "value": "",
                "type": "text",
                "required": true,
                "placeholder": "",
                "condition": "is_college_or_bootcamp_student"
            },
            {
                "id": "graduation_month_year",
                "label": "When do you graduate?",
                "value": {
                    "month": null,
                    "year": null
                },
                "type": "month_year",
                "required": true,
                "placeholder": "",
                "condition": "is_college_or_bootcamp_student"
            },
            {
                "id": "interested_role",
                "label": "What kinda role you interested in?",
                "value": "",
                "type": "radio",
                "required": true,
                "options": () => [
                    {
                        "label": "An Internship (During the summer)",
                        "value": "internship"
                    },
                    {
                        "label": "A full-time role after graduation",
                        "value": "full-time"
                    }
                ],
                "condition": "is_college_or_bootcamp_student"
            },
            {
                "id": "job_type_interest",
                "label": "What job type(s) are you most interested in?",
                "value": [],
                "type": "checkbox",
                "required": true,
                "options": () => [
                    {
                        "label": "Full-time employee",
                        "value": "Full-time employee"
                    },
                    {
                        "label": "Contractor",
                        "value": "Contractor"
                    },
                    {
                        "label": "Cofounder",
                        "value": "Cofounder"
                    }
                ],
                "condition": "is_college_or_bootcamp_student",
                "negative": true
            },
            {
                "id": "years_of_experience_in_software_engineering",
                "label": "How many years of professional experience in software engineering do you have?",
                "value": "",
                "type": "text",
                "required": true,
                "placeholder": "",
                "condition": "is_college_or_bootcamp_student",
                "negative": true
            }
        ]
    },
    {
        "id": "experience",
        "label": "Experience",
        "tagline": "Fill out your education and experience manually or <a href='#' class='text-bgBright'>click here</a> to upload a resume or LinkedIn profile.",
        "completed": false,
        "formData": [
            {
                "id": "work_history",
                "label": "Work History",
                "value": "",
                "type": "work_history",
                "required": true
            },
            {
                "id": "education",
                "label": "Education",
                "value": "",
                "type": "education",
                "required": true
            }
        ]
    },
    {
        "id": "skills",
        "label": "Skills",
        "completed": false,
        "formData": [
            {
                "id": "skills",
                "label": "Which technologies/skills are you most experienced and interested in working with? (Choose up to 10)",
                "value": [],
                "type": "skills",
                "required": true,
                "options": () => [
                    "Python",
                    "HTML",
                    "JavaScript",
                    "TypeScript",
                    "AWS",
                    "Scrapping",
                    "DevOps",
                    "Java",
                    "Azure",
                    "Project Management",
                    "NS Lookup",
                    "Ethical Hacking",
                    "Audit and compliance"
                ]
            }
        ]
    }
]
