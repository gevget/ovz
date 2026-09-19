import type { Course, Event, Organization, Resume, Vacancy } from "../../20_TYPES_AND_DATA_MODELS";

export type OpportunityVacancy = Vacancy & {
  category: "design" | "research" | "support" | "content" | "development" | "creative";
  skills: string[];
  schedule: string;
  city: string;
  recommendationTags: string[];
};

export type OpportunityCourse = Course & {
  category: "design" | "digital" | "career" | "language" | "creative";
  level: "Начальный" | "Средний" | "Продвинутый";
  schedule: string;
  seatsLabel: string;
  recommendationTags: string[];
};

export type OpportunityEvent = Event & {
  category: "culture" | "learning" | "sport" | "community";
  timeLabel: string;
  recommendationTags: string[];
};

export interface Club {
  id: string;
  name: string;
  description: string;
  category: string;
  city: string;
  memberCount: number;
  meetingLabel: string;
  accessibilitySummary: string[];
  organizationId?: string;
  recommendationTags: string[];
}

export interface PartnerOffer {
  id: string;
  organizationId: string;
  title: string;
  description: string;
  benefit: string;
  validUntil: string;
  status: "available" | "expired";
  category: "service" | "education" | "transport" | "culture";
}

export type OpportunityOrganization = Organization & { educationSummary: string; programs: string[] };
export type OpportunityResume = Resume;
