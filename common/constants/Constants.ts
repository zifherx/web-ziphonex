import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { IIconMapItem } from "../interfaces";
import { FaDiscord, FaTelegram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const HTTP_RESPONSE = {
  BAD_REQUEST: {
    code: 400,
    value: "BAD_REQUEST",
    message: "Bad Request",
  },
  UNAUTHORIZED: {
    code: 401,
    value: "UNAUTHORIZED",
    message: "Unauthorized",
  },
  FORBIDDEN: {
    code: 403,
    value: "FORBIDDEN",
    message: "Forbidden",
  },
  NOT_FOUND: {
    code: 404,
    value: "NOT_FOUND",
    message: "Resource not found",
  },
  CONFLICT: {
    code: 409,
    value: "CONFLICT",
    message: "Conflict",
  },
  INTERNAL_ERROR: {
    code: 500,
    value: "INTERNAL_ERROR",
    message: "Internal Server Error",
  },
};

export const ICON_MAP: Record<string, IIconMapItem> = {
  facebook: { icon: Facebook, color: "#1877F2", name: "Facebook" },
  twitter: { icon: Twitter, color: "#1DA1F2", name: "Twitter" },
  instagram: { icon: Instagram, color: "#E4405F", name: "Instagram" },
  linkedin: { icon: Linkedin, color: "#0A66C2", name: "LinkedIn" },
  youtube: { icon: Youtube, color: "#FF0000", name: "YouTube" },
  tiktok: { icon: FaTiktok, color: "#000000", name: "TikTok" },
  github: { icon: Github, color: "#181717", name: "GitHub" },
  whatsapp: { icon: FaWhatsapp, color: "#250366", name: "WhatsApp" },
  telegram: { icon: FaTelegram, color: "#0088CC", name: "Telegram" },
  discord: { icon: FaDiscord, color: "#5865F2", name: "Discord" },
};

export const NUMBERS = {
  FIFTY: 50,
  ONE_HUNDRED: 100,
  TWO_HUNDRED: 200,
  FIVE_THOUSAND: 5000,
};
