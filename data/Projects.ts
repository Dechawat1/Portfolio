export const projects = [
    {
        id: 1,
        title: "Ecommerce-2024",
        description: "เว็ปเกี่ยวกับอุปกรณ์ไอที มีระบบล็อคอิน ระบบตะกร้า ระบบค้นหา ระบบจ่ายเงิน ระบบติดตามสถานะ ระบบแอดมิน.",
        language: [
            { name: "ReactJs", type: "frontend" },
            { name: "Tailwind CSS", type: "frontend" },
            { name: "NodeJs", type: "backend" },
            { name: "ExpressJs", type: "backend" },
            { name: "Prisma", type: "database" },
            { name: "Mysql", type: "database" }
        ],
        image: "/images/project1.png",
        live: "",
        github: "https://github.com/Dechawat1/ecommerce-2024",
    },
    {
        id: 2,
        title: "Windows Application KU FAIR C#",
        description: "แอปพลิเคชันสำหรับการจัดการงานภายในมหาวิทยาลัยเกษตรศาสตร์ โดยใช้ C# และ SQL Server เป็นฐานข้อมูล.",
        language: [
            { name: "csharp", type: "frontend" },           
            { name: "Mssql", type: "backend" },
        ],
        image: "/images/project2.png",
        live: "",
        github: "https://github.com/Dechawat1/Kufair-C-",
    },
    {
        id: 3,
        title: "Movie-Reservation-System",
        description: "ระบบจองตั๋วภาพยนตร์ ที่มีการจัดการผู้ใช้, ภาพยนตร์, รอบฉาย และการจองที่นั่ง โดยใช้ NodeJs เป็น Backend และ postgresql เป็นฐานข้อมูล มี Prisma เป็น ORM",
        language: [
            { name: "NodeJs", type: "backend" },
            { name: "ExpressJs", type: "backend" },
            { name: "Prisma", type: "database" },
            { name: "Postgresql", type: "database" },
        ],
        image: "/images/project3.png",
        live: "https://roadmap.sh/projects/movie-reservation-system",
        github: "https://github.com/Dechawat1/Movie-Reservation-System",
    }
]