import React from "react";

export default function Portfolio(){
    const projects = [
        {
        title: "Project Alpha",
        desc: "Custom CRM solution with Salesforce integration.",
        },
        {
        title: "Project Beta",
        desc: "E-commerce platform built with React & Node.js.",
        },
        {
        title: "Project Gamma",
        desc: "Analytics dashboard with data visualization.",
        },
    ]
    return(
        <section id="portfolio" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Portfolio
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    A selection of projects we’ve delivered for clients worldwide.
                </p>

                {/* Projects Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,i)=>(
                        <div key={i} className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
                            <div className="h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                                <span className="text-gray-400">[ Image ]</span>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-600">
                                {project.title}
                            </h3>
                            <p className="mt-2 text-gray-600">{project.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}