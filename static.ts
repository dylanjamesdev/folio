interface iProject {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projects: iProject[] = [
  {
    title: "Disposable Email Service",
    description:
      "A disposable email service that allows you to create temporary email addresses, or login with a permanent email address.",
    image: "https://s3.tritan.gg/main/tritan-bot/logo.webp",
    link: "https://github.com/Team-Tritan/Disposable-Email",
  },
  {
    title: "DawgBox Uploader",
    description:
      "A file upload script for DawgBox, our spin off of Catbox. Uploads files to a server and returns a link.",
    image: "https://s3.tritan.gg/main/tritan-bot/logo.webp",
    link: "https://github.com/Team-Tritan/DawgBox-Uploader",
  },
  {
    title: "Jumpcloud Attack Logger",
    description:
      "Parses Jumpcloud logs while also searching for ASN abuse contacts then auto reporting any brute force attempts.",
    image: "https://s3.tritan.gg/main/tritan-bot/logo.webp",
    link: "https://github.com/Team-Tritan/Jumpcloud-Attack-Logger",
  },
  {
    title: "Tritan Bot",
    description:
      "A Discord bot that has many features such as moderation, fun, and utility commands.",
    image: "https://s3.tritan.gg/main/tritan-bot/logo.webp",
    link: "https://github.com/team-tritan/tritan-bot",
  },
  {
    title: "Tritan Internet Site",
    description:
      "The official website for Tritan Internet. Contains information about the team and ISP.",
    image: "https://s3.tritan.gg/main/tritan-bot/logo.webp",
    link: "https://tritan.gg",
  },
  {
    title: "S3 Migration Tool",
    description:
      "A tool that migrates files from one S3 bucket to another, while also updating the links.",
    image: "https://s3.tritan.gg/main/tritan-bot/logo.webp",
    link: "https://github.com/Team-Tritan/S3-Migration-Tool",
  },
  {
    title: "Cloudflare MX Updater",
    description:
      "Have a shit ton of domains and don't wanna update all the MX, SPF, and TXT records yourself? Same.",
    image: "https://s3.tritan.gg/main/tritan-bot/logo.webp",
    link: "https://github.com/Team-Tritan/Cloudflare-MX-Records-Updater",
  },
  {
    title: "Email Verification API",
    description:
      "A microservice to verify email addresses, can be integrated into any project via an API.",
    image: "https://s3.tritan.gg/main/tritan-bot/logo.webp",
    link: "https://github.com/Team-Tritan/Email-Verification-API",
  },
];

interface IFooterLinks {
  [category: string]: { label: string; href: string }[];
}

export const FooterLinks: IFooterLinks = {
  Me: [
    { label: "Contact", href: "https://tritan.gg/contact" },
    { label: "Github", href: "https://github.com/dylanjamesdev" },
  ],
  Tritan: [
    { label: "Website", href: "https://tritan.gg" },
    { label: "Discord", href: "https://tritan.gg/discord" },
  ],
};
