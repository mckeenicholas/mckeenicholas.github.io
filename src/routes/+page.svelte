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
              I am currently a 3rd year computer science student at the
              University of Toronto with a focus in artificial intelligence and
              computer systems.
            </p>
            <p>
              I grew up in the Greater Boston area, (but often times spend my
              summers in Lunenburg, Nova Scotia) before moving to Toronto for
              University in 2021.
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
              My programming languages of choice are Python and TypeScript, but
              I am familiar with <LinkText href="/resume"
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
              I am currently a senior member on the Disciplinary Committee for
              the <LinkText href="https://www.worldcubeassociation.org/">
                World Cube Association
              </LinkText>
              , the governing body for Rubik's cube and other twisty puzzle competitions.
              As part of this committee, we investigate regulation and code of conduct
              violations, and issue sanctions where necessary.
            </p>
            <p>
              I have helped organize and oversee over 25 WCA recognized
              competitions within Eastern Canada and the Northeast U.S.,
              totaling over 2500 competitors.
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
