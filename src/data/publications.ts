export interface JournalArticle {
  id: string;              // Unique identifier (UUID or string)
  title: string;           // Title of the journal article
  link: string;            // External link (e.g., DOI or full text)
  authors: string;         // Author list (as a single string or array)
  conference: string;      // Conference or journal name
  year: number;            // Publication year
}
export interface Patent {
  id: string;               // Unique identifier
  title: string;            // Title of the patent
  link: string;             // External link to the patent (e.g., Google Patents or USPTO)
  author: string;           // Inventors (you can also rename this to 'inventors' for clarity)
  applicationNumber: string;
  year : number // Patent application number
}
export interface BookChapter {
  id: string;              // Unique identifier (UUID or string)    
    title: string;           // Title of the book chapter
    authors: string;         // Author list (as a single string or array)
    bookTitle: string;      // Title of the book
    year: number;            // Publication year
}