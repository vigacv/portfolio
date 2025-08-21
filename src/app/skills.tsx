import Image from 'next/image';
import styles from './skills.module.css';

const skills = [
  {
    name: "React & Frontend",
    description:
      "React, Next.js, Angular, micro frontends, state management, performance optimization, automated testing",
    image: "/images/react.svg",
    imageAlt: "React Logo",
  },
  {
    name: ".NET & Backend",
    description:
      "C#, ASP.NET Core, Entity Framework, microservices, APIs, legacy application optimization, scalability",
    image: "/images/dotnet.svg",
    imageAlt: ".NET Logo",
  },
  {
    name: "Cloud Platforms",
    description:
      "Azure (Functions, Service Bus, Cosmos DB, Pipelines), AWS (Lambda, Kinesis, Fargate, Batch), cloud architecture, cost optimization, deployments",
    image: "/images/azure.svg",
    imageAlt: "Azure Logo",
  },
  {
    name: "Databases",
    description:
      "SQL Server, PostgreSQL, Oracle, MongoDB, Cassandra, Redis, Cosmos DB, schema design, distributed caching, ETL processes, performance optimization",
    image: "/images/database.svg",
    imageAlt: "Database Logo",
  },
  {
    name: "Programming Languages",
    description:
      "JavaScript, TypeScript, C#, Python, Java, C, C++, Kotlin, data structures, algorithms, object-oriented programming, design patterns",
    image: "/images/javascript.svg",
    imageAlt: "Javascript Logo",
  },
  {
    name: "DevOps & Infrastructure",
    description:
      "Docker, Kubernetes, Terraform, GitHub Actions, Azure Pipelines, AWS Fargate, CI/CD automation, containerization, infrastructure as code, deployment pipelines",
    image: "/images/docker.svg",
    imageAlt: "Docker Logo",
  },
  {
    name: "Messaging & Event-driven",
    description:
      "RabbitMQ, Apache Kafka, Azure Service Bus, AWS SQS, event-driven architectures, retries, multi-stage processing, large-scale ingestion",
    image: "/images/rabbitmq.svg",
    imageAlt: "RabbitMQ Logo",
  },
  {
    name: "Testing & Monitoring",
    description:
      "Cypress, K6, Elastic Stack, end-to-end testing, load testing, observability, monitoring, system reliability",
    image: "/images/cypress.svg",
    imageAlt: "Cypress Logo",
  },
];


export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <h1 className={styles.title}>Skills</h1>
            <div className={styles.skillsContainer}>
                {skills.map(skill => (
                    <div key={skill.name} className={styles.skillCard}>
                        <div className={styles.skillHeader}>
                            <Image
                                src={skill.image}
                                alt={skill.imageAlt}
                                width={64}
                                height={64}
                                className={styles.skillImage}
                            />
                            <h2 className={styles.skillTitle}>{skill.name}</h2>
                        </div>
                        <div className={styles.skillContent}>
                            <p>{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}