import type { Article, Organization, Specialist } from "../../20_TYPES_AND_DATA_MODELS";

export type HelpCategoryId =
  | "documents"
  | "work"
  | "education"
  | "transport"
  | "accessibility"
  | "support"
  | "family"
  | "social";

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "checklist"; items: string[] }
  | { type: "info"; title: string; text: string };

export interface HelpArticle extends Article {
  category: HelpCategoryId;
  contentMode: { normal: ArticleBlock[]; simple: ArticleBlock[] };
  relatedPlaceIds?: string[];
  relatedArticleIds?: string[];
  nextAction?: { label: string; href: string };
  sourceNote?: string;
}

export interface HelpOrganization extends Organization {
  services: string[];
  placeIds: string[];
  specialistIds: string[];
  articleIds: string[];
}

export interface HelpSpecialist extends Specialist {
  avatar: string;
  description: string;
  organizationId: string;
  availabilityLabel: string;
}

export interface DemoQuestion {
  id: string;
  createdBy: string;
  category: string;
  topic: string;
  question: string;
  visibility: "public" | "private";
  createdAtLabel: string;
  status: "submitted" | "answered";
}

export interface BookingSlot {
  id: string;
  label: string;
  format: "online" | "offline";
}

export type AiIntentId =
  | "clinic"
  | "volunteer"
  | "broken_elevator"
  | "job"
  | "course"
  | "event"
  | "match"
  | "organization";
