export interface Storage {
    saveDocument(document: Record<string, any>): string;
    loadDocument(id: string): Record<string, any>;
    removeDocument(id: string): void;
    getDocuments(): string[];
}
