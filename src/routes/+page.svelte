<script lang="ts">
  import LinkText from "$lib/components/custom/LinkText.svelte";
  import * as Card from "$lib/components/ui/card/index";
  import * as Tooltip from "$lib/components/ui/tooltip";
</script>

<h1 class="my-4 scroll-m-20 text-center text-4xl font-bold tracking-tight">
  Nicholas McKee
</h1>
<div class="mb-4 mt-8 place-content-center">
  <div class="grid gap-4 lg:grid-cols-4">
    <div class="order-1 lg:order-2 lg:col-span-1">
      <Card.Root class="my-4 flex">
        <Card.Content class="p-0">
          <img src="/portrait.JPG" alt="portrait" class="rounded-lg" />
        </Card.Content>
      </Card.Root>
    </div>
    <div class="order-2 lg:order-1 lg:col-span-3">
      <Card.Root class="my-4">
        <Card.Header>
          <Card.Title class="-mb-2">About me</Card.Title>
        </Card.Header>
        <Card.Content class="-mb-2">
          <p class="mb-3">Hey, I'm Nicholas!</p>
          <div class="grid grid-cols-1 space-y-2">
            <p>
              I am a recent Computer Science graduate from the <LinkText
                href="https://www.utoronto.ca/">University of Toronto</LinkText
              >. I graduated in June 2025 with a focus in artifical intelligence
              and machine learning. During my time there, I also participated in
              a research group developing <LinkText
                href="https://github.com/KidneyOS/KidneyOS">KidneyOS</LinkText
              >, a Rust-based, pedagogical, toy operating system.
            </p>
            <p>
              I originally grew up in the Greater Boston area, (but often times
              spend my summers in Lunenburg, Nova Scotia) before moving to
              Toronto in 2021.
            </p>
            <p>
              Throughout high school, I participated in competitive swimming,
              with my best events being the 200 and 500 yard freestyle.
            </p>
            <p>
              In my free time I enjoy working on various <LinkText
                href="/projects">side projects</LinkText
              >, <LinkText
                href="https://www.worldcubeassociation.org/persons/2015MCKE02"
              >
                Speedcubing
              </LinkText>
              , and 3D modelling/printing.
            </p>
            <p>
              My programming languages of choice are Python, TypeScript and
              Rust, but I'm familiar with <LinkText
                href="https://teach.cs.utoronto.ca/~mckeenic/resume.pdf"
                >several others</LinkText
              >.
            </p>
          </div>
        </Card.Content>
        <Card.Header>
          <Card.Title class="-mb-2">Leadership & Awards</Card.Title>
        </Card.Header>
        <Card.Content>
          <div class="grid grid-cols-1 space-y-2">
            <p>
              I am currently a senior member on the Appeals Committee for the <LinkText
                href="https://www.worldcubeassociation.org/"
              >
                World Cube Association
              </LinkText>
              , the governing body for Rubik's cube and other twisty puzzle competitions.
              As part of this committee, we serve as the orginzations highest board
              of appeal.
            </p>
            <p>
              I have helped organize and oversee over 40 WCA recognized
              competitions within Eastern Canada and the Northeast U.S.,
              totaling over 3200 competitors.
            </p>
            <p>
              I served as the STEM Education Director at Griswold Scout
              Reservation for the 2022 season, responsible for a team of 4
              instructors, teaching a variety of skills including the basics of
              electronics, CAD modelling, and 3D printing.
            </p>
            <p>
              I earned Eagle Scout, the highest rank in scouting in January of
              2020, after over 10 years of active leadership, volunteer work,
              and outdoorsmanship. For my service project, I designed,
              fundraised, and lead a team to construct a
              <Tooltip.Root openDelay={0}>
                <Tooltip.Trigger class="underline">50-foot</Tooltip.Trigger>
                <Tooltip.Content>15.25 metre</Tooltip.Content>
              </Tooltip.Root>
              boardwalk on conservation land.
            </p>
          </div>
        </Card.Content>
      </Card.Root>
    </div>
  </div>
</div>
