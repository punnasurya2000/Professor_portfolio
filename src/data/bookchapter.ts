export interface BookChapter {
  id: string;              // Unique identifier (UUID or string)    
    title: string;           // Title of the book chapter
    authors: string;         // Author list (as a single string or array)
    bookTitle: string;      // Title of the book
    year: number;            // Publication year
}
export const bookChapters: BookChapter[] = [
  {
    id: 'BC-001',
    title: '‘Green’ Resins from Plant Sources and Strengthening Mechanisms',
    authors: 'Rahman, M. M.; Netravali, A. N.',
    bookTitle: 'Advanced Green Composites',
    year: 2015
  }
];