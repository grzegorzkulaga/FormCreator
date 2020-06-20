export interface Storage {
    // documents
    saveDocument(document: Record<string, any>): string;
    loadDocument(id: string): Record<string, any>;
    removeDocument(id: string): void;
    getDocuments(): string[];
    // forms
    saveForm(form: Record<string, any>[]): string;
    loadForm(id: string): Record<string, any>[];
    removeForm(id: string): void;
    getForms(): string[];
}
