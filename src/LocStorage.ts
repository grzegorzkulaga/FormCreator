import { Storage } from "./interfaces/Storage";

class LocStorage implements Storage {
    saveDocument(document: Record<string, any>, currentId: string = null): string {
        const id = currentId || `document-${Date.now().toString()}`;
        const documents = this.getDocuments();
        const documentsJson = JSON.stringify(currentId ? documents : [...documents, id])

        localStorage.setItem("documents", documentsJson);
        localStorage.setItem(id, JSON.stringify(document));

        return id;
    }

    loadDocument(id: string): Record<string, any> {
        const document = localStorage.getItem(id);

        return JSON.parse(document);
    }

    removeDocument(id: string) {
        const documents = this.getDocuments().filter(value => value !== id)

        localStorage.setItem("documents", JSON.stringify(documents));
        localStorage.removeItem(id);
    }

    getDocuments(): string[] {
        const items = localStorage.getItem("documents");

        return items ? JSON.parse(items) : [];
    }
}

export default LocStorage;
