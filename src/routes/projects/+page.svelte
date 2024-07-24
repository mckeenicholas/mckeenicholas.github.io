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
      title="Automated Scorecard OCR"
      sourceLink="https://github.com/mckeenicholas/scorecard-reader"
    >
      <div slot="desc">
        <div class="flex flex-wrap gap-x-2">
          <Badge logo="python" label="Python" color="white" fill="3776AB" />
          <Badge logo="opencv" label="OpenCV" color="black" fill="FFFFFF" />
          <Badge logo="numpy" label="Numpy" color="white" fill="4D77Cf" />
          <Badge logo="pytorch" label="PyTorch" color="white" fill="EE4C2C" />
          <Badge logo="graphql" label="GraphQL" color="white" fill="E10098" />
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
        <div class="flex flex-wrap gap-x-2">
          <Badge logo="python" label="Python" color="white" fill="3776AB" />
          <Badge logo="numpy" label="Numpy" color="white" fill="4D77Cf" />
          <Badge logo="pandas" label="Pandas" color="white" fill="1A0F59" />
          <Badge
            logo="postgresql"
            label="PostgreSQL"
            color="white"
            fill="316192"
          />
          <Badge logo="flask" label="Flask" color="black" fill="FFFFFF" />
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
        <p>
          Created a public facing RESTful API using Flask allowing program to be
          run as a backend service.
        </p>
      </div>
    </ProjectCard>

    <ProjectCard
      title="Cubing Betting Odds Web"
      sourceLink="https://github.com/mckeenicholas/wca-odds-web"
    >
      <div slot="desc">
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
      <div slot="content" class="space-y-2">
        <p>A web port of the Cubing Betting odds calculator.</p>
        <p>
          Created a custom result prediction model in Rust compiled to
          WebAssembly to efficiently run client-side in the browser acheving 5x
          performance boost over native JavaScript.
        </p>
        <p>
          Created a responsilve UI with Custom data visualizations for results
          using Vue.js.
        </p>
      </div>
    </ProjectCard>

    <ProjectCard
      title="Sudoku Solver"
      sourceLink="https://github.com/mckeenicholas/sudoku-wasm"
    >
      <div slot="desc">
        <div class="flex flex-wrap gap-x-2">
          <Badge logo="Rust" label="Rust" color="white" fill="CE412B" />
          <Badge
            logo="WebAssembly"
            label="WebAssembly"
            color="white"
            fill="6A55F0"
          />
          <Badge logo="svelte" label="Svelte" color="white" fill="FF4408" />
        </div>
      </div>
      <div slot="content" class="space-y-2">
        <p>A simple web-based 9x9 Sudoku solver using backtracking search.</p>
        <p>
          Implemented in Rust and compiled to WebAssembly to run for ultra-fast
          performance client-side.
        </p>
      </div>
    </ProjectCard>

    <ProjectCard
      title="WCA Advanced Group Editor"
      sourceLink="https://github.com/mckeenicholas/group-renamer"
    >
      <div slot="desc">
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
        <div class="flex flex-wrap gap-x-2">
          <Badge logo="react" label="React" color="black" fill="61DAFB" />
          <Badge
            logo="typescript"
            label="TypeScript"
            color="white"
            fill="007ACC"
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
        <div class="flex flex-wrap gap-x-2">
          <Badge logo="c++" label="C++" color="white" fill="00599C" />
          <Badge logo="cmake" label="CMake" color="white" fill="083D69" />
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
