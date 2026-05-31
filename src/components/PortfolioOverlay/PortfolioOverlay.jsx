import React, { useMemo, useState } from "react";
import {
  campus,
  honors,
  profile,
  projects,
  publications,
  skills,
} from "../../portfolioData";
import styles from "./PortfolioOverlay.module.scss";

const PortfolioOverlay = () => {
  const [activeProject, setActiveProject] = useState(null);
  const featuredProjects = useMemo(() => projects.slice(0, 3), []);

  return (
    <div className={styles.portfolioShell}>
      <main
        className={styles.portfolioPanel}
        onWheel={(event) => event.stopPropagation()}
        onTouchMove={(event) => event.stopPropagation()}
      >
        <section className={styles.hero} id="about">
          <p className={styles.kicker}>Portfolio 2026</p>
          <h1>{profile.name}</h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.summary}>{profile.summary}</p>
          <p className={styles.intro}>{profile.intro}</p>
          <div className={styles.heroActions}>
            <a href="#work">查看工作经验</a>
            <a href="#contact">联系我</a>
          </div>
        </section>

        <section className={styles.section} id="work">
          <div className={styles.sectionHeader}>
            <p>Work Experience</p>
            <h2>工作经验与项目实践</h2>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <button
                className={styles.projectCard}
                key={project.id}
                type="button"
                onClick={() => setActiveProject(project)}
              >
                <img src={project.cover} alt="" loading="lazy" />
                <span>{project.meta}</span>
                <strong>{project.title}</strong>
                <p>{project.description}</p>
                <em>打开项目</em>
              </button>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p>Featured</p>
            <h2>重点能力线索</h2>
          </div>
          <div className={styles.featured}>
            {featuredProjects.map((project) => (
              <article key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p>Campus</p>
            <h2>在校经历</h2>
          </div>
          <div className={styles.timeline}>
            {campus.map((item) => (
              <article key={item.title}>
                <span>{item.meta}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p>Skills</p>
            <h2>相关技能</h2>
          </div>
          <div className={styles.skillGrid}>
            {skills.map(([group, ...items]) => (
              <article key={group}>
                <h3>{group}</h3>
                <div>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p>Honors & Publications</p>
            <h2>荣誉证书与期刊</h2>
          </div>
          <div className={styles.twoColumn}>
            <article>
              <h3>荣誉证书</h3>
              <div className={styles.badges}>
                {honors.map((honor) => (
                  <span key={honor}>{honor}</span>
                ))}
              </div>
            </article>
            <article>
              <h3>期刊成果</h3>
              <ul>
                {publications.map((publication) => (
                  <li key={publication}>{publication}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <h2>联系我</h2>
          <div>
            {profile.contacts.map((contact) => (
              <a key={contact.label} href={contact.href}>
                <span>{contact.label}</span>
                {contact.value}
              </a>
            ))}
          </div>
        </section>
      </main>

      {activeProject && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setActiveProject(null)}
        >
          <article
            className={styles.modal}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              type="button"
              onClick={() => setActiveProject(null)}
              aria-label="关闭项目详情"
            >
              x
            </button>
            <div className={styles.modalHeader}>
              <span>{activeProject.meta}</span>
              <h2>{activeProject.title}</h2>
              <p>{activeProject.description}</p>
            </div>
            <ul className={styles.highlights}>
              {activeProject.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {activeProject.attachment && (
              <a
                className={styles.attachment}
                href={activeProject.attachment}
                target="_blank"
                rel="noopener noreferrer"
              >
                打开完整策划作品
              </a>
            )}
            {activeProject.images.length > 0 && (
              <div className={styles.gallery}>
                {activeProject.images.map((image, index) => (
                  <a
                    href={image}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={image}
                  >
                    <img
                      src={image}
                      alt={`${activeProject.title} 项目图片 ${index + 1}`}
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            )}
          </article>
        </div>
      )}
    </div>
  );
};

export default PortfolioOverlay;
