<script lang="ts">
  import ProjectCard from "$lib/components/custom/ProjectCard.svelte";
  import LinkText from "$lib/components/custom/LinkText.svelte";
</script>

<div class="flex place-content-center">
  <div class="max-w-6xl grow">
    <h1
      class="mb-8 mt-4 scroll-m-20 text-center text-3xl font-bold tracking-tight"
    >
      My Projects:
    </h1>

    <ProjectCard title="Automated Scorecard OCR">
      <div slot="desc">
        <div class="flex space-x-2">
          <img
            src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
            class="rounded-md"
            alt="python"
          />
          <img
            src="https://img.shields.io/badge/OpenCV-FFFFFF?style=for-the-badge&logo=opencv&logoColor=black"
            class="rounded-md border border-black"
            alt="opencv"
          />
          <img
            src="https://img.shields.io/badge/Numpy-4d77cf?style=for-the-badge&logo=numpy&logoColor=white"
            class="rounded-md"
            alt="numpy"
          />
          <img
            src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"
            class="rounded-md"
            alt="pytorch"
          />
          <img
            src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"
            class="rounded-md"
            alt="graphql"
          />
        </div>
      </div>
      <div slot="content" class="space-y-2">
        <p>
          An automated OCR and data entry system utilizing a convolutional
          neural network built in PyTorch.
        </p>
        <p>
          Achieves a 99% per-character accuracy rate after only 50 epochs of
          training.
        </p>
        <p>
          Automatically uploads results to <LinkText
            href="https://live.worldcubeassociation.org/">WCA Live</LinkText
          >, the World Cube Association's official live results page using a
          GraphQL API.
        </p>
      </div>
    </ProjectCard>

    <ProjectCard
      title="One on One"
      sourceLink="https://github.com/mckeenicholas/309-P3"
    >
      <div slot="desc">
        <div class="flex space-x-2">
          <img
            src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
            class="rounded-md"
            alt="python"
          />
          <img
            src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
            class="rounded-md"
            alt="typescript"
          />
          <img
            src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black"
            class="rounded-md"
            alt="react"
          />
          <img
            src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
            class="rounded-md"
            alt="django"
          />
          <img
            src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
            class="rounded-md"
            alt="bootstrap"
          />
        </div>
      </div>
      <div slot="content" class="space-y-2">
        <p>
          Led a team of 3 students to create a full-stack web app for scheduling
          meetings with large teams.
        </p>
        <p>
          Designed an intuitive and functional frontend UI using React and
          Bootstrap CSS.
        </p>
        <p>
          Created a backend server using Django and Django REST Framework with a
          SQLite database.
        </p>
      </div>
    </ProjectCard>

    <ProjectCard
      title="UofT Exam Browser"
      sourceLink="https://github.com/mckeenicholas/course-project-exam-centre"
    >
      <div slot="desc">
        <div class="flex space-x-2">
          <img
            src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"
            class="rounded-md"
            alt="java"
          />
          <img
            src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
            class="rounded-md"
            alt="postgresql"
          />
        </div>
      </div>
      <div slot="content" class="space-y-2">
        <p>
          Led a team of 8 students to create a Java application students to
          submit and view past exams from an online repository.
        </p>
        <p>
          Ensured strict adherence to the Clean Architecture and SOLID coding
          principles.
        </p>
        <p>
          Created a user interface using Swing that communicates with a backend
          server using SFTP.
        </p>
      </div>
    </ProjectCard>

    <ProjectCard
      title="Cubing Betting Odds Calculator"
      sourceLink="https://github.com/mckeenicholas/wca-odds-v2"
    >
      <div slot="desc">
        <div class="flex space-x-2">
          <img
            src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
            class="rounded-md"
            alt="python"
          />
          <img
            src="https://img.shields.io/badge/Numpy-4d77cf?style=for-the-badge&logo=numpy&logoColor=white"
            class="rounded-md"
            alt="numpy"
          />
          <img
            src="https://img.shields.io/badge/Pandas-1a0f59?style=for-the-badge&logo=pandas&logoColor=white"
            class="rounded-md"
            alt="pandas"
          />
          <img
            src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
            class="rounded-md"
            alt="postgresql"
          />
        </div>
      </div>
      <div slot="content" class="space-y-2">
        <p>
          An application that quickly calculates a competitor's chances of
          winning official WCA cubing competitions.
        </p>
        <p>
          Analyzes a competitor's past results and uses a model to simulate
          results of future competitions.
        </p>
        <p>
          Utilizes highly parallellized and vectorized NumPy code to run over 10
          million simulations in under 30 seconds.
        </p>
        <p>
          Correctly predicts the winner over 75% of the time, with a top-3 error
          rate under 5%.
        </p>
      </div>
    </ProjectCard>

    <ProjectCard
      title="WCA Advanced Group Editor"
      sourceLink="https://github.com/mckeenicholas/group-renamer"
    >
      <div slot="desc">
        <div class="flex space-x-2">
          <img
            src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white"
            class="rounded-md"
            alt="vue"
          />
          <img
            src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
            class="rounded-md"
            alt="typescript"
          />
        </div>
      </div>
      <div slot="content" class="space-y-2">
        <p>
          A frontend web application to allow competition organizers to easily
          modify competition round data without having to manually edit JSON
          objects.
        </p>
        <p>
          Gives users manual control over round and group data for WCA
          competitions.
        </p>
        <p>
          Compatible with other popular group creation software such as <LinkText
            href="https://groupifier.jonatanklosko.com/">Groupifier</LinkText
          > and <LinkText href="https://delegate-dashboard.netlify.app/"
            >Delegate Dashboard</LinkText
          >.
        </p>
        <p>Users are authorized using OAuth 2.0 and their WCA Account.</p>
      </div>
    </ProjectCard>

    <ProjectCard
      title="WCA Competition Finder"
      sourceLink="https://github.com/mckeenicholas/competition-finder"
      demoLink="https://mckeenicholas.github.io/competition-finder/"
    >
      <div slot="desc">
        <div class="flex space-x-2">
          <img
            src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black"
            class="rounded-md"
            alt="react"
          />
          <img
            src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
            class="rounded-md"
            alt="typescript"
          />
        </div>
      </div>
      <div slot="content" class="space-y-2">
        <p>
          A frontend web application allowing users to search and filter for
          cubing competitions near them.
        </p>
        <p>
          Allows competitors to search for competitions by means not available
          on the offical WCA site, such as by distance to them.
        </p>
      </div>
    </ProjectCard>

    <ProjectCard
      title="Personal Website"
      sourceLink="https://github.com/mckeenicholas/personal-site"
    >
      <div slot="desc">
        <div class="flex space-x-2">
          <img
            src="https://img.shields.io/badge/Svelte-ff4408?style=for-the-badge&logo=svelte&logoColor=white"
            class="rounded-md"
            alt="svelte"
          />
          <img
            src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
            class="rounded-md"
            alt="typescript"
          />
        </div>
      </div>
      <div slot="content" class="space-y-2">
        <p>The website you're currently viewing!</p>
        <p>
          Used as an experimentation ground for new web development frameworks
          and libraries.
        </p>
      </div>
    </ProjectCard>

    <ProjectCard
      title="Text Compressor"
      sourceLink="https://github.com/mckeenicholas/huffman-encoder"
    >
      <div slot="desc">
        <div class="flex space-x-2">
          <img
            src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
            class="rounded-md"
            alt="c++"
          />
          <img
            src="https://img.shields.io/badge/CMake-083d69?style=for-the-badge&logo=cmake&logoColor=white"
            class="rounded-md"
            alt="cmake"
          />
        </div>
      </div>
      <div slot="content" class="space-y-2">
        <p>
          A Command-line utility for compressing text files into a binarized
          format.
        </p>
        <p>Reduces file size by 20-40% on average.</p>
      </div>
    </ProjectCard>
  </div>
</div>
