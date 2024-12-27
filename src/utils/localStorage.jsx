const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "username": "employee - 1",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Logo Design Update",
        "description": "Update the existing company logo to match the new brand guidelines, including changes to colors, typography, and layout. Ensure the logo is versatile and works well across digital platforms, printed materials, and merchandise.",
        "date": "2024-06-05",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "API Endpoint Development",
        "description": "Develop and test the user authentication API endpoint for the web application. This includes implementing secure login, signup, and token-based authentication mechanisms. Ensure proper error handling and documentation for easy integration.",
        "date": "2024-06-02",
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "title": "User Interface Prototype",
        "description": "Create a high-fidelity prototype for the new user interface. Ensure the design is consistent with brand guidelines and user-centric, with clear navigation and intuitive layout.",
        "date": "2024-06-07",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database Optimization",
        "description": "Analyze and optimize the database to improve query performance. Refactor slow-running queries and ensure indexes are properly implemented for frequently accessed data.",
        "date": "2024-06-09",
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "title": "Content Strategy Development",
        "description": "Collaborate with the marketing team to create a comprehensive content strategy. Outline topics, formats, and publishing schedules for the next quarter.",
        "date": "2024-06-11",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Design Feedback Incorporation",
        "description": "Review feedback from stakeholders on the initial design mockups and incorporate changes into the final version.",
        "date": "2024-06-13",
        "category": "Design",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 3,
      "completed": 0,
      "failed": 2
    }
  },
  {
    "id": 2,
    "firstname": "Vivaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Team Meeting Coordination",
        "description": "Organize and coordinate the weekly team meeting, including preparing the agenda, scheduling the meeting time, and ensuring all necessary stakeholders are invited. Take notes during the meeting and distribute the minutes to all participants afterward.",
        "date": "2024-06-10",
        "category": "Management",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Bug Testing for Mobile App",
        "description": "Perform in-depth testing of the mobile application to identify bugs, inconsistencies, and potential performance issues. Document all findings with steps to reproduce, screenshots, and detailed descriptions to assist developers in resolving the issues.",
        "date": "2024-06-04",
        "category": "Testing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "title": "Competitor Analysis",
        "description": "Conduct a detailed competitor analysis, focusing on their product features, pricing strategies, marketing tactics, and customer reviews. Present insights and recommendations on how to improve our offerings and gain a competitive edge in the market.",
        "date": "2024-05-31",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Onboarding Process Improvement",
        "description": "Evaluate and refine the employee onboarding process to make it more efficient and engaging for new hires.",
        "date": "2024-06-15",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Performance Review Analysis",
        "description": "Analyze employee performance review data and prepare a summary report highlighting strengths and areas for improvement across the organization.",
        "date": "2024-06-14",
        "category": "Management",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Website Usability Testing",
        "description": "Conduct usability testing of the company's website to identify areas for improvement. Focus on navigation, responsiveness, and accessibility.",
        "date": "2024-06-08",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstname": "Diya",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Marketing Brochure Design",
        "description": "Create a visually appealing marketing brochure for the upcoming product launch. The brochure should highlight the product's key features, benefits, and pricing. Use professional design tools to ensure the final output is ready for printing and digital distribution.",
        "date": "2024-06-08",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Brand Style Guide Creation",
        "description": "Develop a comprehensive brand style guide that includes color schemes, typography, logo usage, and other branding elements.",
        "date": "2024-06-06",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Social Media Content Planning",
        "description": "Plan and schedule social media content for the next month, focusing on engagement and promotional campaigns.",
        "date": "2024-06-12",
        "category": "Management",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Customer Feedback Analysis",
        "description": "Analyze customer feedback from recent surveys to identify patterns and actionable insights. Summarize findings in a detailed report.",
        "date": "2024-06-09",
        "category": "Research",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "title": "Promotional Video Script",
        "description": "Write a script for a promotional video highlighting the key features and benefits of our flagship product. Collaborate with the media team to ensure alignment with the brand voice.",
        "date": "2024-06-14",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Survey Questions Draft",
        "description": "Draft a set of survey questions for gathering user feedback on the latest product update.",
        "date": "2024-06-03",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 3,
      "completed": 2,
      "failed": 1
    }
  }
  
  
]


const admin =
    {
      "id": 1,
      "firstname": "Ayush",
      "email": "admin@example.com",
      "password": "123"
    }

export const setLocalStorage = () =>{
  localStorage.setItem('employees' , JSON.stringify(employees))
  localStorage.setItem('admin' , JSON.stringify(admin))

}


export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem('employees'))
  const adminone = JSON.parse(localStorage.getItem('admin'))

  return {employee, adminone}
}