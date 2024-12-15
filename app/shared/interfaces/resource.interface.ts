export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'audio';
  url: string;
  description?: string;
}