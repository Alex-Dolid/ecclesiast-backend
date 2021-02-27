export const getToken = (authorizationHeader: string): string => authorizationHeader?.split(" ")[1];
