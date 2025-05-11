import React from 'react';
import {
    FaReact, FaNodeJs, FaVuejs, FaAngular, FaSass, FaGitAlt, FaDocker,FaDatabase 
} from 'react-icons/fa';
import {
    SiTailwindcss, SiExpress, SiPrisma, SiMysql, SiPostgresql, SiMongodb,
    SiNestjs, SiDjango, SiLaravel, SiRedis, SiGraphql, SiRedux, SiNextdotjs,
    SiFlutter, SiDart, SiFirebase, SiDotnet,
} from 'react-icons/si';

interface SkillTagProps {
    name: string;
    type?: 'frontend' | 'backend' | 'database' | 'other';
}

const SkillTag: React.FC<SkillTagProps> = ({ name, type = 'other' }) => {
    const key = name.toLowerCase();

    const getColorClass = () => {
        switch (key) {
            // Frontend
            case 'react':
            case 'reactjs':
                return 'bg-blue-500/30 hover:bg-blue-500/50';
            case 'next':
            case 'nextjs':
                return 'bg-gray-800/30 hover:bg-gray-800/50';
            case 'tailwind':
            case 'tailwind css':
                return 'bg-sky-500/30 hover:bg-sky-500/50';
            case 'vue':
            case 'vuejs':
                return 'bg-emerald-500/30 hover:bg-emerald-500/50';
            case 'angular':
                return 'bg-red-500/30 hover:bg-red-500/50';
            case 'sass':
                return 'bg-pink-400/30 hover:bg-pink-400/50';
            case 'redux':
                return 'bg-purple-700/30 hover:bg-purple-700/50';
            case 'flutter':
                return 'bg-cyan-500/30 hover:bg-cyan-500/50';
            case 'dart':
                return 'bg-blue-400/30 hover:bg-blue-400/50';

            // Backend
            case 'csharp':
            case 'c#':
                return 'bg-purple-800/30 hover:bg-purple-800/50';
            case 'node':
            case 'nodejs':
                return 'bg-green-600/30 hover:bg-green-600/50';
            case 'express':
            case 'expressjs':
                return 'bg-zinc-600/30 hover:bg-zinc-600/50';
            case 'nestjs':
                return 'bg-red-600/30 hover:bg-red-600/50';
            case 'django':
                return 'bg-green-800/30 hover:bg-green-800/50';
            case 'laravel':
                return 'bg-red-700/30 hover:bg-red-700/50';
            case 'fastapi':
                return 'bg-teal-600/30 hover:bg-teal-600/50';
            case 'graphql':
                return 'bg-pink-600/30 hover:bg-pink-600/50';

            // Database
            case 'prisma':
                return 'bg-purple-600/30 hover:bg-purple-600/50';
            case 'mysql':
                return 'bg-orange-500/30 hover:bg-orange-500/50';
            case 'mssql':
            case 'sql server':
                return 'bg-red-700/30 hover:bg-red-700/50';
            case 'postgres':
            case 'postgresql':
                return 'bg-indigo-600/30 hover:bg-indigo-600/50';
            case 'mongodb':
                return 'bg-green-700/30 hover:bg-green-700/50';
            case 'redis':
                return 'bg-rose-600/30 hover:bg-rose-600/50';
            case 'firebase':
                return 'bg-amber-500/30 hover:bg-amber-500/50';

            // Other
            case 'docker':
                return 'bg-blue-400/30 hover:bg-blue-400/50';
            case 'git':
                return 'bg-orange-600/30 hover:bg-orange-600/50';

            default:
                return 'bg-gray-500/30 hover:bg-gray-500/50';
        }
    };

    const getFrameworkIcon = () => {
        switch (key) {
            case 'react':
            case 'reactjs':
                return <FaReact className="mr-2" />;
            case 'next':
            case 'nextjs':
                return <SiNextdotjs className="mr-2" />;
            case 'tailwind':
            case 'tailwind css':
                return <SiTailwindcss className="mr-2" />;
            case 'vue':
            case 'vuejs':
                return <FaVuejs className="mr-2" />;
            case 'angular':
                return <FaAngular className="mr-2" />;
            case 'sass':
                return <FaSass className="mr-2" />;
            case 'redux':
                return <SiRedux className="mr-2" />;
            case 'flutter':
                return <SiFlutter className="mr-2" />;
            case 'dart':
                return <SiDart className="mr-2" />;

            case 'node':
            case 'nodejs':
                return <FaNodeJs className="mr-2" />;
            case 'express':
            case 'expressjs':
                return <SiExpress className="mr-2" />;
            case 'nestjs':
                return <SiNestjs className="mr-2" />;
            case 'django':
                return <SiDjango className="mr-2" />;
            case 'laravel':
                return <SiLaravel className="mr-2" />;
            case 'graphql':
                return <SiGraphql className="mr-2" />;
            case 'csharp':
            case 'c#':
                return <SiDotnet className="mr-2" />;
            case 'mssql':
            case 'sql server':
                return <FaDatabase  className="mr-2" />;

            case 'prisma':
                return <SiPrisma className="mr-2" />;
            case 'mysql':
                return <SiMysql className="mr-2" />;
            case 'postgres':
            case 'postgresql':
                return <SiPostgresql className="mr-2" />;
            case 'mongodb':
                return <SiMongodb className="mr-2" />;
            case 'redis':
                return <SiRedis className="mr-2" />;
            case 'firebase':
                return <SiFirebase className="mr-2" />;

            case 'docker':
                return <FaDocker className="mr-2" />;
            case 'git':
                return <FaGitAlt className="mr-2" />;

            default:
                return null;
        }
    };

    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white
      ${getColorClass()} hover:-translate-y-1 transition-all duration-300 ease-in-out m-1`}
        >
            {getFrameworkIcon()}
            {name}
        </span>
    );
};

export default SkillTag;
