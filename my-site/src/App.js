import logo from "./logo.svg";
import "./App.css";

function ProfileHeader(props) {
  return (
    <header className="profile-header">
      <main>Pranav Nerkar</main>
      <aside className="contact">
        <div className="email">pranav.n13@gmail.com</div>
        <div className="phone">8805029062</div>
      </aside>
    </header>
  );
}

function Skill(props) {
  const { title, content } = props;
  return (
    <section className="skill">
      <div className="sec-title">{title}</div>
      <div className="sec-content">{content}</div>
    </section>
  );
}

function Project(props) {
  const { company, title, role, description } = props;
  return (
    <section className="project">
      <div className="proj-company">{company}</div>
      <div className="proj-title">
        Project - {title} as {role}
      </div>
      <div className="proj-description">{description}</div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      {/* <nav>
        <span>
          <a href="/">Home</a>
        </span>
        <span>
          <a href="/">Profile</a>
        </span>
      </nav> */}
      {/* <aside className="default-border">Sidebar</aside> */}
      <main className="main-layout">
        <ProfileHeader />
        <section className="summary">
          9 Years of experience in design and development of web applications
          using Microsoft .NET technologies. I have been working presently in
          IIoT and Analytics domain where we capture streaming data and do
          real-time big data analytics and historical data analytics on
          industrial machine sensor data. I have thorough experience working in
          ASP.NET Core based API Services, Data modeling, Design and
          Architecture of microservice based applications.
        </section>
        <section className="skillset">
          <Skill
            title="Languages"
            content="Proficient in C#, JavaScript, TypeScript, SQL"
          />
          <Skill
            title="Frontend"
            content="React, React-Redux, Redux-Saga, Highcharts, Material-UI"
          />
          <Skill
            title="Frameworks"
            content="Worked on projects using .NET Core, ASP.NET Core, ASP.NET Web API"
          />
          <Skill
            title="Databases"
            content="Microsoft SQL Server, Apache Druid, Azure Cosmos DB, Mongo DB"
          />
          <Skill title="DevOps" content="Azure DevOps" />
          <Skill
            title="Infrastructure"
            content="Kubernetes, Docker, Kustomize, Flux operator, APIGEE API Management, NGINX Ingress Controller"
          />
        </section>
        <section className="Projects">
          <Project
            company="Plex Systems, a Rockwell Automation company"
            title="Plex IIoT"
            role="Senior Software Engineer"
            description="Plex Industrial IoT is a platform where we enable industrial assets to send their sensor data to our system for performance monitoring. The application constantly ingests sensor data using Kafka, performs stream processing and stores data in a timeseries database called Apache Druid. Through stream processing, we enable features such as machine maintenance status, generate notifications and alarms. Apache druid is used to create various type of analytics report based on historical data as well as for real time data aggregation. The solution was created as microservice architecture divided as front-api, ingest-api, stream-processor, reporting-api and exhaust-api. The application was deployed on Kubernetes cluster with flux taking care of automatic deployment whenever new image was being pushed to Azure Container Registry (ACR) by Azure DevOps pipeline."
          />
          <Project
            company="Tieto"
            title="Tieto Education"
            role="Software Engineer"
            description="Feature development for Tieto Education product suite."
          />
          <Project
            company="KPIT"
            title="Legal data"
            role="Software Engineer"
            description="Development of server side code in ASP.NET MVC and writing stored procedures and functions in SQL Server 2012."
          />
          <Project
            company="CDAC"
            title="Kaveri-II for Dept. of Stamps and Registration, Govt. of Karnataka."
            role="Software Engineer"
            description=""
          />
          <Project
            company="CDAC"
            title="Pre-Registration"
            role="Software Engineer"
            description=""
          />
        </section>
        <section className="Education">
          <div title="title">Education</div>
          <div className="graduation">
            Bachelor of Engineering in Information Technology from MET’s
            Institute of Engineering, Nashik, affiliated to University of Pune.
          </div>
          <div className="post-graduation">
            Post graduate diploma in advanced computing (PG-DAC) from CDAC ACTS
            Headquarters, Pune.
          </div>
        </section>
        <section className="Achievement">
          <div>
            Participated in State Level CSI regional student convention and won
            First Prize in IT Quiz.
          </div>
          <div>
            Won first prize in National Level Project Competition organized at
            Sandip Foundation, Nashik.
          </div>
          <div>
            WOW award for hard work and dedication shown towards project at
            KPIT.
          </div>
        </section>
        <section className="PersonalDetails">
          <div>Pranav Sanjay Nerkar</div>
          <div>13-May-1991</div>
          <div>
            202, Shriprasad apartment, Mangalmurti square, Trimurti nagar,
            Nagpur - 440022
          </div>
        </section>
      </main>
      {/* <footer className="default-border">footer Thanks for visiting</footer> */}
    </div>
  );
}

export default App;
