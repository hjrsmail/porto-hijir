'use client';
import React, { useEffect, useState } from 'react';
import { getProjects } from '@/lib/api'; // 
import Card from '@/components/ui/project-card';
import type { Project } from '@/types';

export default function ProjectPage() {
   const [projects, setProjects] = useState<Project[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const data = await getProjects();
            setProjects(data);
         } catch (err) {
            console.error("Gagal mengambil data project", err);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   return (
      <div
         id="project"
         className="relative bg-transparent px-4 py-10 sm:px-6 sm:py-12 lg:py-8 lg:px-2 lg:min-h-[750px]"
      >
         <div className="flex flex-col justify-center items-center text-center py-6">
            <p className="text-2xl sm:text-4xl md:text-6xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
               Project Experience
            </p>
            <p className="text-md pt-1 md:text-lg font-light text-black dark:text-gray-400">
               Explore My Past Project Experience
            </p>
         </div>

         <div className="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-8 max-w-7xl text-black dark:text-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
               {projects.length > 0 ? (
                  projects.map((p) => <Card key={p.id} project={p} />)
               ) : (
                  <p className="text-black italic dark:text-gray-500">No projects found.</p>
               )}
            </div>
         </div>
      </div>
   );
}
