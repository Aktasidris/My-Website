type CacheItem<T> = {
    data: T;
    expiry: number;
  };
  
  class MemoryCache {
    private cache = new Map<string, CacheItem<any>>();
  
    set<T>(key: string, data: T, ttl: number) {
      const expiry = Date.now() + ttl;
      this.cache.set(key, { data, expiry });
    }
  
    get<T>(key: string): T | null {
      const item = this.cache.get(key);
      if (!item) return null;
      if (Date.now() > item.expiry) {
        this.cache.delete(key);
        return null;
      }
      return item.data;
    }
  
    clear(key: string) {
      this.cache.delete(key);
    }
  }
  
  export const memoryCache = new MemoryCache();
  