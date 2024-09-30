import {
  ListNamespaceInterface,
  UUIDGeneratorInterface,
} from "@/lib/interfaces/features/uuid-generator";

export const listUUIDGenerator: UUIDGeneratorInterface[] = [
  {
    id: "0",
    name: "Version-1 (Based On Time)",
    url: "https://www.uuidtools.com/api/generate/v1",
    isNamespace: false,
  },
  {
    id: "1",
    name: "Version-3 (MD5)",
    url: "https://www.uuidtools.com/api/generate/v3/namespace",
    isNamespace: true,
  },
  {
    id: "2",
    name: "Version-4 (Randomly Generated)",
    url: "https://www.uuidtools.com/api/generate/v4",
    isNamespace: false,
  },
  {
    id: "3",
    name: "Version-5 (SHA-1)",
    url: "https://www.uuidtools.com/api/generate/v5/namespace",
    isNamespace: true,
  },
];

export const listNamespace: ListNamespaceInterface[] = [
  {
    id: "0",
    name: "DNS",
  },
  {
    id: "1",
    name: "URL",
  },
  {
    id: "2",
    name: "OID",
  },
  {
    id: "3",
    name: "X500",
  },
];
