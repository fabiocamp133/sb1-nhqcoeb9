import { Resource } from '../../../shared/interfaces/resource.interface';

export class ResourceService {
  private resources: Resource[] = [];

  addResource(resource: Resource): void {
    this.resources.push(resource);
  }

  getResources(): Resource[] {
    return this.resources;
  }

  getResourcesByType(type: 'article' | 'video' | 'audio'): Resource[] {
    return this.resources.filter(r => r.type === type);
  }

  searchResources(query: string): Resource[] {
    const lowercaseQuery = query.toLowerCase();
    return this.resources.filter(r => 
      r.title.toLowerCase().includes(lowercaseQuery) ||
      r.description?.toLowerCase().includes(lowercaseQuery)
    );
  }
}