/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  titleUrl: string;
  name: string;
  icon: string;
  description: string;
  details: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  metricLabel: string;
  metricValue: string;
  description: string;
  results: string[];
  duration: string;
}

export interface Review {
  author: string;
  roleUrl?: string;
  text: string;
  stars: number;
  timeText: string;
  isOfficial: boolean;
}

export interface AuditQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    points: number;
  }[];
}

export interface AIAdCopyRequest {
  businessType: string;
  targetAudience: string;
  productDescription: string;
  channel: 'all' | 'facebook' | 'google' | 'instagram' | 'linkedin';
  language: 'fr' | 'ar' | 'en';
}

export interface AIAdCopyResponse {
  success: boolean;
  content?: string;
  error?: string;
  hook?: string;
  bodyAndOffer?: string;
  ctaSuggestion?: string;
}
