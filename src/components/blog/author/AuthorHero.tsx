"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaGlobe,
  FaMedium,
  FaDev,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaTelegram,
  FaWhatsapp,
  FaTiktok,
  FaEnvelope,
  FaBehance,
} from "react-icons/fa6";

import { Author } from "@/types";

interface Props {
  author: Author;
  articlesCount: number;
}

export default function AuthorHero({ author, articlesCount }: Props) {
  const socialLinks = [
    {
      href: author.social.website,
      icon: <FaGlobe className="h-5 w-5" />,
      label: "Website",
    },
    {
      href: author.social.email ? `mailto:${author.social.email}` : undefined,
      icon: <FaEnvelope className="h-5 w-5" />,
      label: "Email",
    },
    {
      href: author.social.linkedin,
      icon: <FaLinkedin className="h-5 w-5" />,
      label: "LinkedIn",
    },
    {
      href: author.social.github,
      icon: <FaGithub className="h-5 w-5" />,
      label: "GitHub",
    },
    {
      href: author.social.medium,
      icon: <FaMedium className="h-5 w-5" />,
      label: "Medium",
    },
    {
      href: author.social.devto,
      icon: <FaDev className="h-5 w-5" />,
      label: "Dev.to",
    },
    {
      href: author.social.twitter,
      icon: <FaXTwitter className="h-5 w-5" />,
      label: "X",
    },
    {
      href: author.social.facebook,
      icon: <FaFacebook className="h-5 w-5" />,
      label: "Facebook",
    },
    {
      href: author.social.instagram,
      icon: <FaInstagram className="h-5 w-5" />,
      label: "Instagram",
    },
    {
      href: author.social.youtube,
      icon: <FaYoutube className="h-5 w-5" />,
      label: "YouTube",
    },
    {
      href: author.social.tiktok,
      icon: <FaTiktok className="h-5 w-5" />,
      label: "TikTok",
    },
    {
      href: author.social.behance,
      icon: <FaBehance className="h-5 w-5" />,
      label: "Behance",
    },
    {
      href: author.social.discord,
      icon: <FaDiscord className="h-5 w-5" />,
      label: "Discord",
    },
    {
      href: author.social.telegram,
      icon: <FaTelegram className="h-5 w-5" />,
      label: "Telegram",
    },
    {
      href: author.social.whatsapp,
      icon: <FaWhatsapp className="h-5 w-5" />,
      label: "WhatsApp",
    },
  ].filter((social) => social.href);

  return (
    <section className="mx-auto max-w-3xl text-center">
      <Image
        src={author.avatar}
        alt={author.name}
        width={140}
        height={140}
        className="mx-auto rounded-full"
      />

      <h1 className="mt-8 text-5xl font-bold tracking-tight">{author.name}</h1>

      {author.designation && (
        <p className="mt-3 text-xl text-primary">{author.designation}</p>
      )}

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
        {author.bio}
      </p>

      {socialLinks.length > 0 && (
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href!}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="rounded-full border p-3 transition-colors hover:bg-muted"
            >
              {icon}
            </Link>
          ))}
        </div>
      )}

      <div className="mt-10 flex justify-center gap-10 text-sm text-muted-foreground">
        <div>
          <p className="text-3xl font-bold text-foreground">{articlesCount}</p>
          <p>Articles</p>
        </div>
      </div>
    </section>
  );
}
