import type { Community, Post, Story, User } from "../../20_TYPES_AND_DATA_MODELS";

export type SocialPostType = "experience" | "accessibility_update" | "event" | "job_tip" | "useful_guide" | "organization" | "community_invite" | "course" | "volunteer_call";

export interface SocialPost extends Post {
  type: SocialPostType;
  tags: string[];
  commentCount: number;
  publishedAt: string;
  communityId?: string;
  relatedPlaceId?: string;
  relatedEventId?: string;
  relatedCourseId?: string;
  relatedVacancyId?: string;
  relatedClubId?: string;
  relatedHelpHref?: string;
  status: "published" | "reported" | "moderated" | "hidden";
}

export interface SocialStory extends Story {
  dateLabel: string;
  ctaLabel?: string;
  ctaHref?: string;
  relatedPlaceId?: string;
  relatedEventId?: string;
  relatedCourseId?: string;
  relatedHelpHref?: string;
}

export interface SocialCommunity extends Community {
  description: string;
  moderators: string[];
  tags: string[];
  clubId?: string;
  postIds: string[];
  eventIds: string[];
}

export interface SocialUser extends User {
  ageLabel: string;
  bio: string;
  communityIds: string[];
  postIds: string[];
  avatarLabel: string;
}

export type FriendState = "friend" | "incoming" | "outgoing" | "none";
