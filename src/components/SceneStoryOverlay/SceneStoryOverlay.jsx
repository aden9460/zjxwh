import React, { useMemo } from "react";
import { campus, honors, profile, projects, publications, skills } from "../../portfolioData";
import styles from "./SceneStoryOverlay.module.scss";

const storySteps = [
  {
    start: 0,
    end: 0.18,
    eyebrow: "About",
    title: "郑嘉雯",
    text: profile.summary,
    detail: profile.intro,
  },
  {
    start: 0.18,
    end: 0.42,
    eyebrow: "Work",
    title: "AI 赋能内容运营",
    text: "从美妆投放、达人筛选到多模态内容分析，将平台数据和内容策略连接成可执行的增长动作。",
    projectIds: ["proya", "wuchan"],
  },
  {
    start: 0.42,
    end: 0.67,
    eyebrow: "Projects",
    title: "私域、新媒体与数字文旅",
    text: "用账号孵化、社群运营、数字人影像和文旅资源平台，呈现内容传播的不同场景。",
    projectIds: ["kuai", "suzhou-xinchen", "digital-culture"],
  },
  {
    start: 0.67,
    end: 0.84,
    eyebrow: "Campus & Skills",
    title: "在校经历与能力结构",
    text: "数字媒体与智能传播硕士，兼具活动策划、平台运营、数据分析、设计影像和 AI 工具使用经验。",
  },
  {
    start: 0.84,
    end: 1,
    eyebrow: "Honors",
    title: "荣誉证书与期刊成果",
    text: "将内容运营实践与数字传播研究并行推进，积累了竞赛、证书和期刊成果。",
  },
];

const getStep = (progress) =>
  storySteps.find((step) => progress >= step.start && progress < step.end) ??
  storySteps[storySteps.length - 1];

const SceneStoryOverlay = ({ progress, onProjectOpen }) => {
  const activeStep = getStep(progress);
  const projectMap = useMemo(
    () => new Map(projects.map((project) => [project.id, project])),
    []
  );
  const activeProjects = activeStep.projectIds
    ? activeStep.projectIds.map((id) => projectMap.get(id)).filter(Boolean)
    : [];

  return (
    <div className={styles.storyShell}>
      <div className={styles.progressRail} aria-hidden="true">
        <span style={{ height: `${Math.round(progress * 100)}%` }} />
      </div>

      <section className={styles.storyCard}>
        <p>{activeStep.eyebrow}</p>
        <h1>{activeStep.title}</h1>
        <strong>{activeStep.text}</strong>
        {activeStep.detail && <span>{activeStep.detail}</span>}

        {activeProjects.length > 0 && (
          <div className={styles.inlineProjects}>
            {activeProjects.map((project) => (
              <button
                type="button"
                key={project.id}
                onClick={() => onProjectOpen(project)}
              >
                <img src={project.cover} alt="" loading="lazy" />
                <span>{project.meta}</span>
                <b>{project.title}</b>
              </button>
            ))}
          </div>
        )}
      </section>

      <aside className={styles.quickPanel}>
        {progress < 0.67 && (
          <>
            <span>工作经验</span>
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
