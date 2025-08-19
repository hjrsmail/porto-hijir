'use client';

import React, { useEffect, useState } from 'react';
// import { getProjects } from '@/lib/api';
import Card from '@/components/ui/project-card';
import type { Project } from '@/types';
import BlurText from '@/src/blocks/TextAnimations/BlurText/BlurText';
import { RainbowButton } from '@/src/components/magicui/rainbow-button';
import Link from 'next/link';
import supabase from '@/lib/db';

export default function ProjectPage() {

   const [projects, setProjects] = useState<Project[]>([]);
   const [loading, setLoading] = useState(true);
   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);


   // fetch data by Supabase API 
   useEffect(() => {
      const fetchProject = async () => {
         const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: true });

         if (error) console.log('error: ', error);
         else setProjects(data);
      }
      fetchProject();
   }, [supabase]);


   // handle modal
   const openModal = (project: Project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
   };

   // close modal
   const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
   };




   // fetch data by API
   // useEffect(() => {
   //    const fetchData = async () => {
   //       try {
   //          const data = await getProjects();
   //          setProjects(data);
   //       } catch (err) {
   //          console.error("Gagal mengambil data project", err);
   //       } finally {
   //          setLoading(false);
   //       }
   //    };

   //    fetchData();
   // }, []);

   // handle modal
   // useEffect(() => {
   //    if (isModalOpen) {
   //       document.body.classList.add("overflow-hidden");
   //    } else {
   //       document.body.classList.remove("overflow-hidden");
   //    }

   //    return () => {
   //       document.body.classList.remove("overflow-hidden");
   //    };
   // }, [isModalOpen]);



   return (
      <div id="project" className="relative bg-transparent px-4 py-10 sm:px-6 sm:py-12 lg:py-8 lg:px-4 2xl:px-0 lg:min-h-[750px]">
         <div className="flex flex-col justify-center items-center text-center py-6">
            <BlurText
               text="Project Experience"
               delay={150}
               animateBy="words"
               direction="top"
               className="text-2xl sm:text-4xl md:text-6xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
            />
            <BlurText
               text="Explore My Past Project Experience"
               delay={300}
               animateBy="words"
               direction="top"
               className="text-md pt-1 md:text-lg font-light text-black dark:text-gray-400"
            />
         </div>

         <div className="w-full px-3 md:px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-8 max-w-7xl text-black dark:text-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10">
               {projects.length > 0 ? (
                  projects.map((p) => (
                     <Card key={p.id} project={p} onClick={() => openModal(p)} />
                  ))
               ) : (
                  <div className="col-span-full flex flex-col items-center justify-center py-16 text-center text-gray-600 dark:text-gray-400">
                     {/* Spinner animasi */}
                     <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-400 dark:border-gray-600 mb-4" />

                     {/* Teks animasi pulse */}
                     <p className="animate-pulse text-lg font-semibold">
                        No projects found
                     </p>
                  </div>
               )}
            </div>
         </div>

         {/* Modal */}
         {isModalOpen && selectedProject && (
            <div
               className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={closeModal}>
               <div
                  className="bg-white dark:bg-darkk rounded-xl shadow-lg max-w-2xl w-full mx-4 relative overflow-hidden flex flex-col"
                  onClick={(e) => e.stopPropagation()}>
                  {/* Tombol close */}
                  <button
                     onClick={closeModal}
                     className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition">
                     ✕
                  </button>

                  {/* Gambar */}
                  <div className="w-full h-full">
                     <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                     />
                  </div>

                  {/* Detail */}
                  <div className="p-6 flex flex-col">
                     <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                        {selectedProject.title}
                     </h2>
                     <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span>{selectedProject.author}</span>
                        <span>•</span>
                        <span>
                           {new Date(selectedProject.created_at).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                           })}
                        </span>

                     </div>

                     {/* Deskripsi */}
                     <div
                        className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-justify "
                        dangerouslySetInnerHTML={{ __html: selectedProject.description }}
                     />


                     {/* Link */}
                     <div className="flex items-center gap-4 mt-auto">
                        {selectedProject.demo_url && (
                           <RainbowButton variant="outline">
                              <Link
                                 href={selectedProject.demo_url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 Lihat Project
                              </Link>
                           </RainbowButton>

                        )}
                        {selectedProject.github_url && (
                           <RainbowButton variant="outline">
                              <Link
                                 href={selectedProject.github_url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 Lihat GitHub
                              </Link>
                           </RainbowButton>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         )}

      </div>
   );
}
