import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Technologies.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <Meta
        title="Technologies"
        description="A list of technologies and frameworks I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Technologies"
          description="A somewhat comprehensive list of technologies, frameworks, and more that I use on a daily basis to code things."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    as my text editor.
                  </ListItem>
                  <ListItem>
                    <Link href="https://dotnet.microsoft.com/en-us/">.NET</Link>{' '}
                    is the backend framework I am most proficient with, using <Link href="https://dotnet.microsoft.com/en-us/languages/csharp">C#</Link>{" "}
                    as language. I use .NET for Web APIs but I ocassionaly also use it for <Link href="https://dotnet.microsoft.com/en-us/apps/aspnet/mvc">MVC</Link>.
                  </ListItem>
                  <ListItem>
                    For frontend, I mainly use <Link href="https://react.dev/">React</Link> and <Link href="https://angular.io/">Angular</Link>.<Link href="https://nextjs.org/">NextJS </Link>{' '}
                    is my framework of choice for most React Projects, but for simple ones I just use <Link href="https://vitejs.dev/">Vite</Link>.
                  </ListItem>
                  <ListItem>
                    I am also proficient with <Link href="https://www.java.com/">Java</Link>, using <Link href="https://spring.io/projects/spring-boot">Springboot</Link>{' '}
                    and <Link href="https://nodejs.org/">Node.js</Link>. My framework of choice for Node is <Link href="https://nestjs.com/">NestJS</Link>,{' '}
                    because is very good for building clean modularized applications.
                  </ListItem>
                  <ListItem>
                    I love asynchronous messaging in distributed applications and for that I use <Link href="https://kafka.apache.org/">Apache Kafka</Link>,{' '}
                    <Link href="https://www.rabbitmq.com/">RabbitMQ</Link> and <Link href="https://azure.microsoft.com/en-us/products/service-bus">Azure Service Bus</Link>.
                  </ListItem>
                  <ListItem>
                    I also like developing mobile applications and for that I use <Link href="https://flutter.dev/">Flutter</Link>,{' '}
                    although I am also learning <Link href="https://reactnative.dev/">React Native</Link> :).
                  </ListItem>
                  <ListItem>
                    For containerized applications I use <Link href="https://www.docker.com/">Docker</Link> and <Link href="https://kubernetes.io/">Kubernetes</Link>{' '}
                    / <Link href="https://docs.docker.com/compose/">Docker Compose</Link> for orchestration.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>https://www.microsoft.com/en-US/sql-server/
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Databases</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Talking about relational databases, the main ones I use are <Link href="https://www.microsoft.com/en-us/sql-server/">SQL Server</Link>,{' '}
                    <Link href="https://www.mysql.com/">MySQL</Link>, <Link href="https://www.postgresql.org/">PostgresDB</Link> and <Link href="https://www.oracle.com/database/">Oracle</Link>.
                  </ListItem>
                  <ListItem>
                    I also use no relational databases a lot and for that I really like <Link href="https://www.mongodb.com/">MongoDB</Link>{' '}
                    and I am proficient with <Link href="https://redis.io/">Redis</Link> and <Link href="https://azure.microsoft.com/en-us/products/cosmos-db">CosmosDB</Link>.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Cloud</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I am experienced with <Link href="https://azure.microsoft.com/">CosmosDB</Link>Azure,{' '}
                    holding two certificates at the moment:{' '}
                    <Link href="https://learn.microsoft.com/api/credentials/share/en-us/GabrielCarmeloVillaverde-0283/8AD86987FAD75531?sharingId=F07CAA10A23145C4">Azure Fundamentals</Link> and{' '}
                    <Link href="https://learn.microsoft.com/api/credentials/share/en-us/GabrielCarmeloVillaverde-0283/1C00A884BEF5C52?sharingId=F07CAA10A23145C4">Azure Administrator Associate</Link>.
                  </ListItem>
                  <ListItem>
                    I also have knowledge of <Link href="https://aws.amazon.com/">AWS</Link>,{' '}
                    <Link href="https://cloud.google.com/">GCP</Link> and <Link href="https://www.oracle.com/cloud/">Oracle Cloud</Link>
                  </ListItem>
                  <ListItem>
                    Lately I've been using <Link href="https://supabase.com/">Supabase</Link> for authentication and storage and I really like it :).
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
