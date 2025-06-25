<script lang="ts">
  import ProjectCard from "$lib/components/custom/ProjectCard.svelte";
  import LinkText from "$lib/components/custom/LinkText.svelte";
  import Badge from "$lib/components/custom/Badge.svelte";
</script>

<div class="flex place-content-center">
  <div class="max-w-6xl grow">
    <h1
      class="mb-8 mt-4 scroll-m-20 text-center text-3xl font-bold tracking-tight"
    >
      My Projects:
    </h1>

    <ProjectCard
      title="Cubing Odds Calculator"
      sourceLink="https://github.com/mckeenicholas/wca-odds-web"
      demoLink="https://odds.nmckee.org/"
    >
      {#snippet desc()}
        <div>
          <div class="flex flex-wrap gap-x-2">
            <Badge logo="Rust" label="Rust" color="white" fill="CE412B" />
            <Badge
              logo="WebAssembly"
              label="WebAssembly"
              color="white"
              fill="6A55F0"
            />
            <Badge logo="vue.js" label="Vue.js" color="white" fill="4FC08D" />
            <Badge
              logo="typescript"
              label="TypeScript"
              color="white"
              fill="007ACC"
            />
          </div>
        </div>
      {/snippet}
      {#snippet content()}
        <div class="space-y-2">
          <p>
            A web-based application to calcualte a competitor's odds of winning
            a cubing competition.
          </p>
          <p>
            Designed custom prediction model written in Rust with SIMD
            acceleration to efficiently run over 100,000 simulations per second
            in the browser
          </p>
          <p>
            Correctly predicts the winner over 75% of the time, with a top-3
            error rate under 5%.
          </p>
          <p>
            Created a responsive frontend UI with custom data visualizations to
            display simulation results and statistics, using Vue.js
          </p>
          <p>
            Attracted high user engagement within the Speedcubing community,
            averaging over 15,000 monthly page views, and over 1,200 monthly
            unique visitors
          </p>
        </div>
      {/snippet}
    </ProjectCard>

    <ProjectCard
      title="Automated Scorecard OCR"
      sourceLink="https://github.com/mckeenicholas/scorecard-reader"
    >
      {#snippet desc()}
        <div>
          <div class="flex flex-wrap gap-x-2">
            <Badge logo="python" label="Python" color="white" fill="3776AB" />
            <Badge logo="opencv" label="OpenCV" color="black" fill="FFFFFF" />
            <Badge logo="numpy" label="Numpy" color="white" fill="4D77Cf" />
            <Badge logo="pytorch" label="PyTorch" color="white" fill="EE4C2C" />
            <Badge logo="graphql" label="GraphQL" color="white" fill="E10098" />
          </div>
        </div>
      {/snippet}
      {#snippet content()}
        <div class="space-y-2">
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
      {/snippet}
    </ProjectCard>

    <ProjectCard
      title="One on One"
      sourceLink="https://github.com/mckeenicholas/309-P3"
    >
      {#snippet desc()}
        <div>
          <div class="flex flex-wrap gap-x-2">
            <Badge logo="python" label="Python" color="white" fill="3776AB" />
            <Badge
              logo="typescript"
              label="TypeScript"
              color="white"
              fill="007ACC"
            />
            <Badge logo="react" label="React" color="black" fill="61DAFB" />
            <Badge logo="django" label="Django" color="white" fill="092E20" />
            <Badge
              logo="bootstrap"
              label="Bootstrap"
              color="white"
              fill="563D7C"
            />
          </div>
        </div>
      {/snippet}
      {#snippet content()}
        <div class="space-y-2">
          <p>
            Led a team of 3 students to create a full-stack web app for
            scheduling meetings with large teams.
          </p>
          <p>
            Designed an intuitive and functional frontend UI using React and
            Bootstrap CSS.
          </p>
          <p>
            Created a backend server using Django and Django REST Framework with
            a SQLite database.
          </p>
        </div>
      {/snippet}
    </ProjectCard>

    <ProjectCard
      title="UofT Exam Browser"
      sourceLink="https://github.com/mckeenicholas/course-project-exam-centre"
    >
      {#snippet desc()}
        <div>
          <div class="flex flex-wrap gap-x-2">
            <Badge logo="openjdk" label="Java" color="white" fill="ED8B00" />
            <Badge
              logo="postgresql"
              label="PostgreSQL"
              color="white"
              fill="316192"
            />
          </div>
        </div>
      {/snippet}
      {#snippet content()}
        <div class="space-y-2">
          <p>
            Led a team of 8 students to create a Java application students to
            submit and view past exams from an online repository.
          </p>
          <p>
            Ensured strict adherence to the Clean Architecture and SOLID coding
            principles.
          </p>
          <p>
            Created a user interface using Swing that communicates with a
            backend server using SFTP.
          </p>
        </div>
      {/snippet}
    </ProjectCard>

    <ProjectCard
      title="WCA Advanced Group Editor"
      sourceLink="https://github.com/mckeenicholas/group-renamer"
    >
      {#snippet desc()}
        <div>
          <div class="flex flex-wrap gap-x-2">
            <Badge logo="vue.js" label="Vue.js" color="white" fill="4FC08D" />
            <Badge
              logo="typescript"
              label="TypeScript"
              color="white"
              fill="007ACC"
            />
          </div>
        </div>
      {/snippet}
      {#snippet content()}
        <div class="space-y-2">
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
      {/snippet}
    </ProjectCard>

    <ProjectCard
      title="Personal Website"
      sourceLink="https://github.com/mckeenicholas/personal-site"
    >
      {#snippet desc()}
        <div>
          <div class="flex flex-wrap gap-x-2">
            <Badge logo="svelte" label="Svelte" color="white" fill="FF4408" />
            <Badge
              logo="typescript"
              label="TypeScript"
              color="white"
              fill="007ACC"
            />
          </div>
        </div>
      {/snippet}
      {#snippet content()}
        <div class="space-y-2">
          <p>The website you're currently viewing!</p>
          <p>
            Used as an experimentation ground for new web development frameworks
            and libraries.
          </p>
        </div>
      {/snippet}
    </ProjectCard>
  </div>
</div>
