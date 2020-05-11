export interface Storage {
    saveDocument(document: Record<string, any>): string;
    loadDocument(id: string): Record<string, any>;
    getDocuments(): string[];
}
