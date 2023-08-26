import React, { useRef, useState, useEffect } from 'react';
import { ProjectSummary } from './ProjectSummary';

import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import twrTextureLarge from 'assets/twitter-clone-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import twrTexture from 'assets/twitter-clone-dark.jpg';
import { VisuallyHidden } from 'components/VisuallyHidden';

import ArrowRight from 'assets/arrow-right.svg';

import styles from './Projects.module.css';

const Projects = ({ id }) => {
    const [visibleSections, setVisibleSections] = useState([]);

    const projects = [
        {
            id: "project-1",
            title: "Twitter Clone",
            description: "A twitter clone made using NextJS 13 with App Router and Supabase.",
            buttonText: "View website",
            buttonLink: "https://twitter-clone-seven-ivory.vercel.app/",
            model: {
                type: 'laptop',
                alt: 'Twitter Clone',
                textures: [
                    {
                        srcSet: [twrTexture, twrTextureLarge],
                        placeholder: sprTexturePlaceholder,
                    },
                ],
            },
            ref: useRef()
        },
        {
            id: "project-2",
            title: "Coming soon",
            description: "Next project will be here",
            buttonText: "View website",
            buttonLink: "/",
            model: {
                type: 'phone',
                alt: 'App login screen',
                textures: [
                    {
                        srcSet: [gamestackTexturePlaceholder, gamestackTexturePlaceholder],
                        placeholder: gamestackTexturePlaceholder,
                    },
                    {
                        srcSet: [gamestackTexturePlaceholder, gamestackTexturePlaceholder],
                        placeholder: gamestackTexturePlaceholder,
                    },
                ],
            },
            ref: useRef()
        },
        // {
        //     id: "project-3",
        //     title: "Biomedical image collaboration",
        //     description: "Increasing the amount of collaboration in Slice, an app for biomedical imaging",
        //     buttonText: "View project",
        //     buttonLink: "/projects/slice",
        //     model: {
        //         type: 'laptop',
        //         alt: 'Annotating a biomedical image in the Slice app',
        //         textures: [
        //             {
        //                 srcSet: [sliceTexture, sliceTextureLarge],
        //                 placeholder: sliceTexturePlaceholder,
        //             },
        //         ],
        //     },
        //     ref: useRef()
        // }
    ];

    const containerRef = useRef();

    useEffect(() => {
        const sections = projects.map(proj => proj.ref);

        const sectionObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = entry.target;
                        observer.unobserve(section);
                        if (visibleSections.includes(section)) return;
                        setVisibleSections(prevSections => [...prevSections, section]);
                    }
                });
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
        );

        sections.forEach(section => {
            sectionObserver.observe(section.current);
        });

        return () => {
            sectionObserver.disconnect();
        };
    }, [visibleSections]);

    let startx = 0;
    let diffx = 0;
    let drag = false;

    function handleMouseDown(e) {
        const el = containerRef.current;
        if (!e) { e = window.event; }
        if (e.target && e.target.nodeName === 'IMG') {
            e.preventDefault();
        } else if (e.srcElement && e.srcElement.nodeName === 'IMG') {
            e.returnValue = false;
        }
        startx = e.clientX + el.scrollLeft;
        diffx = 0;
        drag = true;
    }

    function handleMouseMove(e) {
        const el = containerRef.current;
        if (drag === true) {
            if (!e) { e = window.event; }
            diffx = (startx - (e.clientX + el.scrollLeft));
            el.scrollLeft += diffx;
        }
    }

    function handleMouseUp(e) {
        const el = containerRef.current;
        if (!e) { e = window.event; }
        drag = false;
        var start = 1,
            animate = function () {
                var step = Math.sin(start);
                if (step <= 0) {
                    window.cancelAnimationFrame(animate);
                } else {
                    el.scrollLeft += diffx * step;
                    start -= 0.02;
                    window.requestAnimationFrame(animate);
                }
            };
        animate();
    }

    const scrollContainer = () => {
        var x = 1; //x-axis pixel displacement
        var y = 1; //delay in milliseconds
        const intId = setInterval(function () {
            const firstElementRect = containerRef.current.firstElementChild.getBoundingClientRect();
            if (firstElementRect.right <= 0) {
                clearInterval(intId);
            }
            containerRef.current.scrollBy(x, 0);
            x = x + 1; //if you want to increase speed simply increase increment interval
        }, y);
    };

    return (
        <div
            id={id}
            className={styles.projectsContainer}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            ref={containerRef}
        >

            {projects.map((project, i) => (
                <ProjectSummary
                    key={project.id}
                    id={project.id}
                    sectionRef={project.ref}
                    visible={visibleSections.includes(project.ref.current)}
                    index={i + 1}
                    title={project.title}
                    description={project.description}
                    buttonText={project.buttonText}
                    buttonLink={project.buttonLink}
                    model={project.model}
                />
            ))}
            <span
                className={styles.mobileScrollIndicator}
                data-status={'entered'}
                data-hidden={false}
                onClick={scrollContainer}
            >
                <VisuallyHidden>Scroll to view more</VisuallyHidden>
                <ArrowRight aria-hidden />
            </span>

        </div>
    );
};

export default Projects;