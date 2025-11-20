// localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "samyak",
    email: "employee1@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Prepare project report",
        description: "Summarize the current progress on client project Alpha.",
        date: "2025-11-10",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix login issue",
        description: "Debug and fix the user authentication problem.",
        date: "2025-11-11",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Discuss next sprint goals with the dev team.",
        date: "2025-11-12",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    firstName: "bhardwaj",
    email: "employee2@company.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 3,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design homepage banner",
        description: "Create a new hero banner for the upcoming sale.",
        date: "2025-11-10",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update CSS styles",
        description: "Improve color contrast and font sizes for accessibility.",
        date: "2025-11-11",
        category: "Frontend",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client feedback review",
        description: "Review and implement suggestions from the client.",
        date: "2025-11-12",
        category: "Client Work",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix image rendering bug",
        description: "Resolve issue with images not loading on mobile devices.",
        date: "2025-11-13",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    firstName: "raturi",
    email: "employee3@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 4,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "API documentation",
        description: "Write API documentation for user module endpoints.",
        date: "2025-11-09",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Database optimization",
        description: "Optimize MongoDB queries for faster load time.",
        date: "2025-11-10",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team training session",
        description: "Conduct a short training on Git workflow.",
        date: "2025-11-11",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix API timeout error",
        description: "Investigate and fix timeout issue in user routes.",
        date: "2025-11-12",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Code review",
        description: "Review teammate’s pull requests and give feedback.",
        date: "2025-11-13",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstName: "neeraj",
    email: "employee4@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 5,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Test new login flow",
        description: "Perform unit and integration tests on new auth module.",
        date: "2025-11-09",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update dependencies",
        description: "Upgrade project dependencies to latest versions.",
        date: "2025-11-10",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare deployment",
        description: "Set up staging environment for next version release.",
        date: "2025-11-12",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Create testing report",
        description: "Summarize QA test results and share with the team.",
        date: "2025-11-13",
        category: "QA",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 5,
    firstName: "raunac",
    email: "employee5@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 6,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Write weekly blog post",
        description: "Write a tech article for the company blog.",
        date: "2025-11-09",
        category: "Content",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Post on social media",
        description: "Promote the new feature release on all platforms.",
        date: "2025-11-10",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: true,
        failed: false
      },
      {
        title: "Create analytics report",
        description: "Generate performance analytics for campaign results.",
        date: "2025-11-11",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Prepare client proposal",
        description: "Draft proposal for potential partnership with TechNova.",
        date: "2025-11-13",
        category: "Business",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = {
  id: 101,
  firstName: "vipin",
  email: "admin@company.com",
  password: "123"
};





export const setLocalStorage = ()=>{
   localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('Admin',JSON.stringify(admin))
}


export const getLocalStorage = ()=>{
      const employees = JSON.parse(localStorage.getItem('employees'))
      const Admin = JSON.parse(localStorage.getItem('Admin'))
      
  return{employees,Admin}
}