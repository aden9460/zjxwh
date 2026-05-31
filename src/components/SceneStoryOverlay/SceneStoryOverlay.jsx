import React from "react";
import { campus, honors, projects, publications, skills } from "../../portfolioData";
import styles from "./SceneStoryOverlay.module.scss";

const SceneStoryOverlay = ({ progress, onProjectOpen }) => {
  return (
    <div className={styles.storyShell}>
      <div className={styles.progressRail} aria-hidden="true">
        <span style={{ height: `${Math.round(progress * 100)}%` }} />
      </div>

      <aside className={styles.quickPanel}>
        {progress < 0.67 && (
          <>
            <span>项目入口</span>
            {projects.slice(0, 6).map((project) => (
              <button
                type="button"
                key={project.id}
                onClick={() => onProjectOpen(project)}
              >
                {project.title}
              </button>
            ))}
          </>
        )}

        {progress >= 0.67 && progress < 0.84 && (
          <>
            <span>在校与技能</span>
            {campus.map((item) => (
              <article key={item.title}>
                <b>{item.title}</b>
                <p>{item.text}</p>
              </article>
            ))}
            <div className={styles.skillLine}>
              {skills.slice(0, 3).map(([group]) => (
                <em key={group}>{group}</em>
              ))}
            </div>
          </>
        )}

        {progress >= 0.84 && (
          <>
            <span>成果</span>
            <div className={styles.honorLine}>
              {honors.slice(0, 4).map((honor) => (
                <em key={honor}>{honor}</em>
              ))}
            </div>
            <article>
              <b>期刊成果</b>
              <p>{publications[0]}</p>
            </article>
          </>
        )}
      </aside>
    </div>
  );
};

export default SceneStoryOverlay;
