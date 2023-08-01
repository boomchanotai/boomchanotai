import { component$ } from "@builder.io/qwik";
import Container from "../Container";
import { Image } from "@unpic/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const projects = [
    {
      image: "/images/eic.webp",
      title: "Engineering Innovator Club (EIC Club)",
      tech: ["NextTS", "TailwindCSS"],
      desc: "Static site for EIC Club Chulalongkorn University",
      href: "https://eicrobocup.com/",
    },
    {
      image: "/images/intania-oph.webp",
      title: "CU Intania Open House",
      tech: ["Astro", "TailwindCSS"],
      desc: "Static site for CU Intania Open House with Markdown Blog",
      href: "https://intania-oph.vercel.app/",
    },
    {
      image: "/images/chemcu.webp",
      title: "Stereochemistry - Faculty of Science, Chulalongkorn University",
      tech: ["Node.js", "JSmol"],
      desc: "Stereochemistry - Teaching materials on the topic of stereochemistry in the Department of Chemistry, Faculty of Science, Chulalongkorn University",
      href: "https://storehouse.chemcu.org/stereochemistry/",
    },
    {
      image: "/images/LigEGFR.webp",
      title: "LigEGFR - pIC50 Prediction Research Project",
      tech: ["VueJS"],
      desc: "LigEGFR is a heart-driven web project that predicts pIC50 values for VISTEC's School of Science and Information Technology.",
      href: "https://ligegfr.vistec.ist/",
    },
    {
      image: "/images/unisec.webp",
      title:
        "UNISEC Thailand - University Space Engineering Consortium Thailand's Website",
      tech: ["Next.js", "Markdown File"],
      desc: "UNISEC Thailand - Website for the space association in Thailand.",
      href: "http://unisec-thailand.org/",
    },
    {
      image: "/images/Cactustanjai.webp",
      title: "Cactustanjai - E-Commerce Website",
      tech: ["PHP", "jQuery", "MySQL Database"],
      desc: "Cactustanjai.com is an e-commerce website with payment notifications and a back-end system for order management and printing receipts/invoices.",
      href: "http://cactustanjai.com/",
    },
    {
      image: "/images/GiveMeYourQRCode.webp",
      title: "GiveMeYourQRCode - QR Code Scanning for PSMCOM Game",
      tech: ["React.js", "Firebase Realtime Database"],
      desc: "GiveMeYourQRCode - A website that allows users to scan QR codes as a way of collecting signatures for seniority certification.",
      href: "https://givemeyourqrcode.web.app/",
    },
  ];

  return (
    <Container class="py-8 space-y-6">
      <h2 class="text-2xl font-bold">My Projects</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link href={project.href} target="_blank">
            <div class="flex flex-row gap-8 items-start p-4 hover:bg-gray-100 hover:dark:bg-secondary-dark rounded-lg transition-colors duration-150">
              <div>
                <div class="w-32">
                  <Image
                    src={project.image}
                    layout="constrained"
                    class="w-full aspect-[3/4] shadow-lg"
                  />
                </div>
              </div>
              <div class="space-y-4">
                <div class="space-y-2">
                  <h3 class="text-lg font-semibold">{project.title}</h3>
                  <div class="flex flex-wrap gap-2">
                    {project.tech.map((item, i) => (
                      <div
                        key={i}
                        class="dark:text-accent-red border border-black dark:border-accent-red py-0.5 px-6 rounded-full text-sm font-medium flex flex-col justify-center items-center text-center"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <p class="text-sm">{project.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
});
